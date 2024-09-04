using BlotzTask.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Drawing;

namespace BlotzTask.Data
{
    public class LabelDbContext : DbContext
    {
        public LabelDbContext(DbContextOptions<LabelDbContext> options) : base(options) { }

        public DbSet<Label> Labels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Label>().HasData(
                new Label
                {
                    LabelId = 1,
                    Name = "Label 1",
                    Color = "Red",
                    Description = "Description for Label 1"
                },
                new Label
                {
                    LabelId = 2,
                    Name = "Label 2",
                    Color = "Yellow",
                    Description = "Description for Label 2"
                },
                new Label
                {
                    LabelId = 3,
                    Name = "Label 3",
                    Color = "Blue",
                    Description = "Description for Label 3"
                }
            );
        }
    }
}
