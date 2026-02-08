using Microsoft.EntityFrameworkCore;
using SpedTaskTracker.Api.Models;

namespace SpedTaskTracker.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<TaskEntity> Tasks { get; set; }
    }
}
