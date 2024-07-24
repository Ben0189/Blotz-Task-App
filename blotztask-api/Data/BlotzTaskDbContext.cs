using BlotzTask.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Data
{
    public class BlotzTaskDbContext : DbContext
    {
        public BlotzTaskDbContext(DbContextOptions options) : base(options) {}
        public DbSet<TaskItem> TaskItems { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem { Id = 1, Title = "Initial Task 1" },
                new TaskItem { Id = 2, Title = "Initial Task 2" },
                new TaskItem { Id = 3, Title = "Initial Task 3" }
            );
        }
    }
}
