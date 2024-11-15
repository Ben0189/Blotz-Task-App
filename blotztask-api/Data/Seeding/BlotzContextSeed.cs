using System.Security.Claims;
using BlotzTask.Data;
using BlotzTask.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

public static class BlotzContextSeed
{
    public static async Task SeedBlotzContextAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, BlotzTaskDbContext context)
    {
        // Seed roles
        if (!await roleManager.RoleExistsAsync("Admin"))
        {
            await roleManager.CreateAsync(new IdentityRole("Admin"));
        }

        // Seed admin user
        var defaultUser = new User
        {
            UserName = "blotztest1@gmail.com",
            Email = "blotztest1@gmail.com",
            EmailConfirmed = true,
        };

        var user = await userManager.FindByEmailAsync(defaultUser.Email);

        // If the user already exists, log and return early
        if (user != null)
        {
            Console.WriteLine($"User with email {defaultUser.Email} already exists. No new user was added. No task and label was added");
            return; // Exit early since no further seeding is needed
        }

        // If the user does not exist, create the new super admin
        var createUserResult = await userManager.CreateAsync(defaultUser, "@Blotztest1");
        if (createUserResult.Succeeded)
        {
            await userManager.AddToRoleAsync(defaultUser, "Admin");

            var userAdded = await userManager.FindByEmailAsync(defaultUser.Email);

            List<Claim> claims = new List<Claim>
            {
                new Claim("CanEdit", "true"),
                new Claim("CanPost", "true"),
                new Claim("CanDelete", "true")
            };

            await userManager.AddClaimsAsync(userAdded, claims);
            user = userAdded;
            Console.WriteLine("User creation Success.");
        }
        else
        {
            Console.WriteLine("User creation failed.");
            return; // Exit early if user creation failed
        }

        // Seed labels and tasks only if the user was successfully created
        if (!await context.Labels.AnyAsync())
        {
            await context.Labels.AddRangeAsync();
            await context.SaveChangesAsync();
            Console.WriteLine("Label creation Success.");
        }

        if (!await context.TaskItems.AnyAsync())
        {
            var labelWork = await context.Labels.FirstOrDefaultAsync(l => l.Name == "Work");
            var labelPersonal = await context.Labels.FirstOrDefaultAsync(l => l.Name == "Personal");
            await context.TaskItems.AddRangeAsync(
                new TaskItem
                {
                    Title = "Initial Task 1",
                    Description = "Description for Task 1",
                    DueDate = new DateOnly(2024, 10, 01),
                    IsDone = false,
                    CreatedAt = new DateTime(2024, 10, 2),
                    UpdatedAt = new DateTime(2024, 10, 2),
                    UserId = user.Id,
                    LabelId = labelWork.LabelId
                },
                new TaskItem
                {
                    Title = "Initial Task 2",
                    Description = "Description for Task 2",
                    DueDate = new DateOnly(2024, 10, 01),
                    IsDone = true,
                    CreatedAt = new DateTime(2024, 10, 2),
                    UpdatedAt = new DateTime(2024, 10, 2),
                    UserId = user.Id,
                    LabelId = labelPersonal.LabelId
                }
            );
            await context.SaveChangesAsync();
            Console.WriteLine("Tasks creation Success.");
        }
    }
}
