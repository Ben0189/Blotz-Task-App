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

        await SeedLabelsAsync(context);
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

    private static async Task SeedLabelsAsync(BlotzTaskDbContext context)
    {
        if (!await context.Labels.AnyAsync())
        {
            await context.Labels.AddRangeAsync(
                new Label
                {
                    Name = "Urgent",
                    Color = "Red",
                    Description = "Tasks that need to be addressed immediately"
                },
                new Label
                {
                    Name = "Completed",
                    Color = "Green",
                    Description = "Tasks that have been completed"
                }
            );
            await context.SaveChangesAsync();
            Console.WriteLine("Labels seeded successfully.");
        }
        else
        {
            Console.WriteLine("Labels already exist.");
        }
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

        var labelUrgent = await context.Labels.FirstOrDefaultAsync(l => l.Name == "Urgent");
        var labelCompleted = await context.Labels.FirstOrDefaultAsync(l => l.Name == "Completed");

        if (labelUrgent == null || labelCompleted == null)
        {
            Console.WriteLine("Labels are missing. Cannot seed tasks.");
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
                LabelId = labelUrgent.LabelId
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
                LabelId = labelCompleted.LabelId
            }
        );
        await context.SaveChangesAsync();
        Console.WriteLine("Tasks for today's date seeded successfully.");
    }
}
