using BlotzTask.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Data
{
    public class BlotzTaskDbContext : IdentityDbContext<User>
    {
        public BlotzTaskDbContext(DbContextOptions options) : base(options) { }

        public DbSet<TaskItem> TaskItems { get; set; }
        public DbSet<Label> Labels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem
                {
                    Id = 1,
                    Title = "Initial Task 1",
                    Description = "Description for Task 1",
                    DueDate = new DateOnly(2024, 10, 01),
                    IsDone = false,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new TaskItem
                {
                    Id = 2,
                    Title = "Initial Task 2",
                    Description = "Description for Task 2",
                    DueDate = new DateOnly(2024, 10, 01),
                    IsDone = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new TaskItem
                {
                    Id = 3,
                    Title = "Initial Task 3",
                    Description = "Description for Task 3",
                    DueDate = new DateOnly(2024, 10, 01),
                    IsDone = false,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            );
            modelBuilder.Entity<Label>().HasData(
                new Label
                {
                    LabelId = 1,
                    Name = "Urgent",
                    Color = "Red",
                    Description = "Tasks that need to be addressed immediately"
                },
                new Label
                {
                    LabelId = 2,
                    Name = "In Progress",
                    Color = "Yellow",
                    Description = "Tasks that are currently being worked on"
                },
                new Label
                {
                    LabelId = 3,
                    Name = "Completed",
                    Color = "Green",
                    Description = "Tasks that have been completed"
                }
            );
        }
    }
}
