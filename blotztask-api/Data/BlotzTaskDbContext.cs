using BlotzTask.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Data
{
    public class BlotzTaskDbContext : IdentityDbContext<User>
    {
        public BlotzTaskDbContext(DbContextOptions options) : base(options) { }

        public DbSet<TaskItem> TaskItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem
                {
                    Id = 1,
                    Title = "Initial Task 1",
                    Description = "Description for Task 1",
                    IsDone = false,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new TaskItem
                {
                    Id = 2,
                    Title = "Initial Task 2",
                    Description = "Description for Task 2",
                    IsDone = true,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                },
                new TaskItem
                {
                    Id = 3,
                    Title = "Initial Task 3",
                    Description = "Description for Task 3",
                    IsDone = false,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                }
            );
        }
    }
}
