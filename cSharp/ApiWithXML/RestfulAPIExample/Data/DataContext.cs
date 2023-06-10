using Microsoft.EntityFrameworkCore;

namespace ApiWithXML.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=Restful-API-Example;Trusted_Connection=true;TrustServerCertificate=true;");
        }

        public DbSet<SuperHero> SuperHeroes { get; set; }

    }
}
