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
                    LabelId = 1,
                    Name = "Work",
                    Color = "Purple",
                    Description = "Work related tasks"
                },
                new Label
                {
                    LabelId = 2,
                    Name = "Personal",
                    Color = "Yellow",
                    Description = "Personal tasks"
                },
                new Label
                {
                    LabelId = 3,
                    Name = "Academic",
                    Color = "Teal",
                    Description = "Academic tasks"
                },
                new Label
                {
                    LabelId = 4,
                    Name = "Others",
                    Color = "Sky",
                    Description = "Other tasks"
                }
            );
        }
    }
}
