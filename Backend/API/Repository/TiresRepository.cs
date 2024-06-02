using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Repository
{
    // Interface defining the contract for tire-related data operations
    public interface ITiresRepository
    {
        List<Tire> GetTires();
    }

    public class TiresRepository : ITiresRepository
    {
        private readonly SudburyTiresContext _dbContext;

        public TiresRepository(SudburyTiresContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Tire> GetTires()
        {
            var tires = _dbContext.Tires.ToList();
            return tires;
        }

    }
}
