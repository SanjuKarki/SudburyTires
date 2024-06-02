using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class YourDbContext : DbContext
    {
        public YourDbContext(DbContextOptions<YourDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            //optionsBuilder
            //    .UseSqlServer("Server=tcp:dbdevelopmentserver.database.windows.net,1433;Initial Catalog=DBdev;Persist Security Info=False;User ID=sqladmin;Password=Sql@dmin;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            optionsBuilder
                .UseSqlServer("Server=DESKTOP-QHSV13C;Initial Catalog=sudbury_tires;TrustServerCertificate=True; Integrated Security = True");
        }
        public DbSet<User> Users { get; set; }
    }

}
