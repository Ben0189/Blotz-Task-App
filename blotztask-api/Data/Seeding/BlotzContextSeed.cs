using System.Security.Claims;
using BlotzTask.Data;
using BlotzTask.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public static class BlotzContextSeed
{
    public static async Task SeedBlotzContextAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, BlotzTaskDbContext context)
    {
        await SeedRolesAsync(roleManager);
        var user = await SeedAdminUserAsync(userManager);
        if (user == null)
        {
            Console.WriteLine("Admin user creation failed or already exists. Exiting seeding process.");
            return;
        }

        await SeedTasksForTodayAsync(context, user);
    }

    private static async Task SeedRolesAsync(RoleManager<IdentityRole> roleManager)
    {
        if (!await roleManager.RoleExistsAsync("Admin"))
        {
            await roleManager.CreateAsync(new IdentityRole("Admin"));
            Console.WriteLine("Admin role created successfully.");
        }
        else
        {
            Console.WriteLine("Admin role already exists.");
        }
    }

    private static async Task<User?> SeedAdminUserAsync(UserManager<User> userManager)
    {
        var defaultUser = new User
        {
            UserName = "blotztest1@gmail.com",
            Email = "blotztest1@gmail.com",
            EmailConfirmed = true,
        };

        var user = await userManager.FindByEmailAsync(defaultUser.Email);
        if (user != null)
        {
            Console.WriteLine($"User with email {defaultUser.Email} already exists.");
            return user;
        }

        var createUserResult = await userManager.CreateAsync(defaultUser, "@Blotztest1");
        if (!createUserResult.Succeeded)
        {
            Console.WriteLine("Admin user creation failed.");
            return null;
        }

        await userManager.AddToRoleAsync(defaultUser, "Admin");
        user = await userManager.FindByEmailAsync(defaultUser.Email);

        if (user != null)
        {
            var claims = new List<Claim>
            {
                new Claim("CanEdit", "true"),
                new Claim("CanPost", "true"),
                new Claim("CanDelete", "true")
            };
            await userManager.AddClaimsAsync(user, claims);
            Console.WriteLine("Admin user and claims created successfully.");
        }

        return user;
    }

    private static async Task SeedTasksForTodayAsync(BlotzTaskDbContext context, User user)
    {
        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        bool hasTasksForToday = await context.TaskItems.AnyAsync(t => t.DueDate == today);

        if (hasTasksForToday)
        {
            Console.WriteLine("Tasks for today's date already exist. No seeding necessary.");
            return;
        }

        var labelWork = await context.Labels.FirstOrDefaultAsync(l => l.Name == "Work");
        var labelPersonal = await context.Labels.FirstOrDefaultAsync(l => l.Name == "Personal");

        if (labelWork == null || labelPersonal == null)
        {
            Console.WriteLine("Label missing. Try to run migrations to seed the label. Failed to seed task");
            return;
        }

        await context.TaskItems.AddRangeAsync(
            new TaskItem
            {
                Title = "Initial Task 1",
                Description = "Description for Task 1",
                DueDate = today,
                IsDone = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                UserId = user.Id,
                LabelId = labelWork.LabelId
            },
            new TaskItem
            {
                Title = "Initial Task 2",
                Description = "Description for Task 2",
                DueDate = today,
                IsDone = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                UserId = user.Id,
                LabelId = labelPersonal.LabelId
            }
        );
        await context.SaveChangesAsync();
        Console.WriteLine("Tasks for today's date seeded successfully.");
    }
}
