

namespace RestfulAPIExample.Services.SuperHeroService
{
    public interface ISuperHeroService
    {
        Task<List<SuperHero>> GetAllHeroes();
        Task<SuperHero> GetHero(int id);
        Task<SuperHero> AddHero(SuperHeroDto hero);
        Task<SuperHero> UpdateHero(int id, SuperHeroDto updatedHero);
        Task<SuperHero> DeleteHero(int id);

    }
}
