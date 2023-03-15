using Kerala2.Models;
using Microsoft.EntityFrameworkCore;

namespace Kerala2.Data
{
    public class ApplicationAPIContext : DbContext
    {
        public ApplicationAPIContext(DbContextOptions<ApplicationAPIContext> dbContextOptions) : base(dbContextOptions) { }

        public DbSet<Locations> Locations { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
