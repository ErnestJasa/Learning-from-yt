using Microsoft.EntityFrameworkCore;
using MvcCrud.Models.Domain;

namespace MvcCrud.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {            
        }
        public DbSet<Employee> Employees { get; set; }
    }
}
