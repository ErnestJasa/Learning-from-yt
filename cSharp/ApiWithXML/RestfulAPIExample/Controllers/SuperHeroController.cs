using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ApiWithXML.Services.SuperHeroService;

namespace ApiWithXML.Controllers
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
        [Produces("application/xml")]
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
        public async Task<ActionResult<SuperHero>> AddHero([FromBody]SuperHeroDtoXML hero)
        {
           var newHero = await _superHeroService.AddHeroXML(hero);
            return Ok(newHero);
        }
      
        [HttpPut("{id}")]
        public async Task<ActionResult<SuperHero>> UpdateHero(int id,SuperHeroDtoXML request)
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
