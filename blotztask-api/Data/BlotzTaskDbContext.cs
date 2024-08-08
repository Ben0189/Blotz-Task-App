using BlotzTask.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Data
{
    public class BlotzTaskDbContext : DbContext
    {
        
        public BlotzTaskDbContext(DbContextOptions<BlotzTaskDbContext> options) : base(options) { }

        public DbSet<TaskItem> TaskItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem { Id = 1, Title = "Initial Task 1", Description = "Description for task 1", IsDone = false, CreatedAt = DateTime.UtcNow, UpdatedAt = DateTime.UtcNow },
                new TaskItem { Id = 2, Title = "Initial Task 2", Description = "Description for task 2", IsDone = false, CreatedAt = DateTime.UtcNow, UpdatedAt = DateTime.UtcNow },
                new TaskItem { Id = 3, Title = "Initial Task 3", Description = "Description for task 3", IsDone = false, CreatedAt = DateTime.UtcNow, UpdatedAt = DateTime.UtcNow }
            );
        }
    }
}
