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
            modelBuilder.Entity<Label>().HasData(
                new Label
                {
                    LabelId = 6,
                    Name = "Work",
                    Color = "#CDB2FF",
                    Description = "Work related tasks"
                },
                new Label
                {
                    LabelId = 7,
                    Name = "Personal",
                    Color = "#FBFAC2",
                    Description = "Personal tasks"
                },
                new Label
                {
                    LabelId = 8,
                    Name = "Academic",
                    Color = "#278291",
                    Description = "Academic tasks"
                },
                new Label
                {
                    LabelId = 9,
                    Name = "Others",
                    Color = "#1458C6",
                    Description = "Other tasks"
                }
            );
        }
    }
}
