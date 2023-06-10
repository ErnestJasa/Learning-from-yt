

namespace ApiWithXML.Services.SuperHeroService
{
    public interface ISuperHeroService
    {
        Task<List<SuperHero>> GetAllHeroes();
        Task<SuperHero> GetHero(int id);
        Task<SuperHero> AddHeroXML(SuperHeroDtoXML hero);
        Task<SuperHero> UpdateHero(int id, SuperHeroDtoXML updatedHero);
        Task<SuperHero> DeleteHero(int id);

    }
}
