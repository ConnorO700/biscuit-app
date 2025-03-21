using biscuit_api.Models;
using biscuit_api.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace biscuit_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class BiscuitController : Controller
    {
        private readonly BiscuitService _biscuitService;
        public BiscuitController(BiscuitService biscuitservice)
        {
            _biscuitService = biscuitservice;
        }
        [HttpGet]
        public string Default()
        {
            return "Default";
        }

        [HttpGet("all")]
        public async Task<List<Biscuit>> GetAll() =>
            await _biscuitService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Biscuit>> Get(string id)
        {
            var oldBiscuit = await _biscuitService.GetAsync(id);
            if (oldBiscuit == null)
            {
                return NotFound();
            }
            return Ok(oldBiscuit);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddBiscuit(Biscuit biscuit)
        {
            await _biscuitService.CreateAsync(biscuit);
            return CreatedAtAction(nameof(AddBiscuit), new { id = biscuit.Id }, biscuit);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdateBiscuit(string id, Biscuit biscuit)
        {
            var oldBiscuit = await _biscuitService.GetAsync(id);
            if (oldBiscuit == null)
            {
                return NotFound();
            }
            await _biscuitService.UpdateAsync(id, biscuit);

            return NoContent();

        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> DeleteBiscuit(string id)
        {
            var oldBiscuit = await _biscuitService.GetAsync(id);
            if (oldBiscuit == null)
            {
                return NotFound();
            }
            await _biscuitService.RemoveAync(id);
            return NoContent();
        }
    }
}
