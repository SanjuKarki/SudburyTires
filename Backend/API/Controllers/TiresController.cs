using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TiresController : ControllerBase
    {
        private readonly ITiresService _tiresService;

        // Constructor for TiresController, injecting an IAuthService instance
        public TiresController(ITiresService tiresService)
        {
            _tiresService = tiresService;//?? throw new ArgumentNullException(nameof(tiresService));
        }

        [HttpGet("getTires")]
        public IActionResult GetTires()
        {
            var tires = _tiresService.GetTires();
            return Ok(tires);
        }
    } 

}
