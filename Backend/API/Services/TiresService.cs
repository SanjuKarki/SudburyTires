using API.Model;
using API.Repository;
using Azure.Core;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

public interface ITiresService
{
    List<Tire> GetTires(string searchKey);
}

public class TiresService : ITiresService
{
    private readonly ITiresRepository _tiresRepository;

    public TiresService(ITiresRepository tiresRepository)
    {
        _tiresRepository = tiresRepository;
    }

    public List<Tire> GetTires(string searchKey)
    {
        var tires = _tiresRepository.GetTires(searchKey);

        return tires;
    }

}
