using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestfulAPIExample.Services.SuperHeroService;

namespace RestfulAPIExample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly ISuperHeroService _superHeroService;

        public SuperHeroController(ISuperHeroService superHeroService)
        {
            _superHeroService = superHeroService;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetAllHeroes()
        {
            return Ok(await _superHeroService.GetAllHeroes());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<SuperHero>> GetSingleHero(int id)
        {
            var hero = await _superHeroService.GetHero(id);
            if(hero == null)
            {
                return NotFound("Sorry, it doesn't exist");
            }
            return Ok(hero);
        }
        [HttpPost]
        public async Task<ActionResult<SuperHero>> AddHero(SuperHeroDto hero)
        {
           var newHero = await _superHeroService.AddHero(hero);
            return Ok(newHero);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<SuperHero>> UpdateHero(int id,SuperHeroDto request)
        {
            var result = await _superHeroService.UpdateHero(id, request);
            if(result == null)
            {
                return NotFound("Sorry, it doesn't exist");
            }

            return Ok(result);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<SuperHero>> DeleteHero(int id)
        {
            var result = await _superHeroService.DeleteHero(id);
            if(result == null)
            {
                return NotFound("Sorry, it doesn't exist");
            }
            return Ok(result);
        }
    }
}
