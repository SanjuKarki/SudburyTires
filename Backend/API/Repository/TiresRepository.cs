using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Repository
{
    // Interface defining the contract for tire-related data operations
    public interface ITiresRepository
    {
        List<Tire> GetTires(string searchKey);
    }

    public class TiresRepository : ITiresRepository
    {
        private readonly SudburyTiresContext _dbContext;

        public TiresRepository(SudburyTiresContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Tire> GetTires(string searchKey)
        {
            List<Tire> tires = null;
            if (string.IsNullOrEmpty(searchKey))
            {
                tires = _dbContext.Tires.ToList();
            }
            else if (searchKey?.ToLower()=="brands")
            {
                tires = _dbContext.Tires
                          .GroupBy(t => t.Brand) // Group by brand
                          .Select(g => g.First()) // Select the first item in each group
                          .ToList();

            }
            else
            {
                tires = _dbContext.Tires.Where(x => x.Detail.Contains(searchKey) 
                || x.Name.Contains(searchKey) || x.Brand.Contains(searchKey)).ToList();
            }
            return tires;
        }

    }
}
