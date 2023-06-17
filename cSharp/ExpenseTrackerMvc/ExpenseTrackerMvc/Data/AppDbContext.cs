using ExpenseTrackerMvc.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTrackerMvc.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) :base(options) 
        {
            
        }

        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
