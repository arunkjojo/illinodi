using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Kerala2.Data;
using Kerala2.Models;
using Microsoft.AspNetCore.Cors;

namespace Kerala2.Controllers
{
    /*[EnableCors("applicationCorsPolicy")]*/
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private readonly ApplicationAPIContext _context;

        public LocationsController(ApplicationAPIContext context)
        {
            _context = context;
        }

        // GET: api/Locations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<APIResponse<TownListApiResponse>>>> GetLocations()
        {
            var location = await _context.Locations.ToListAsync();
            var apiResData = new TownListApiResponse
            {
                Cities = location.Where(c => c.LType == "city").ToList(),
                Town = location.Where(t => t.LType == "town").ToList(),
                District = location.Where(d => d.LType == "district").ToList(),
            };
            var response = new APIResponse<TownListApiResponse>
            {
                Msg = "Hi",
                Data = apiResData
            };
            return Ok(response);
        }

    }
}
