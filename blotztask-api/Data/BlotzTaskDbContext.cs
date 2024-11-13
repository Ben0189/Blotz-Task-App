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
        }
    }
}
