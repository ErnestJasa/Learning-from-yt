using Microsoft.EntityFrameworkCore;
using ApiWithXML.Data;

namespace ApiWithXML.Services.SuperHeroService
{
    public class SuperHeroService : ISuperHeroService
    {      
        private readonly DataContext _dataContext;

        public SuperHeroService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        /*
         Xml Request Format
            <?xml version="1.0" encoding="UTF-8"?>
            <Hero>
	            <Name>yyyyyy</Name>
	            <FirstName>jjjjjj</FirstName>
	            <LastName>hhhhh</LastName>
	            <Place>nnnnnn</Place>
            </Hero>
         */
        public async Task<SuperHero> AddHeroXML(SuperHeroDtoXML hero)
        {
            SuperHero newHero = new SuperHero
            {
                Name = hero.Name,
                FirstName = hero.FirstName,
                LastName = hero.LastName,
                Place = hero.Place
            };

            await _dataContext.SuperHeroes.AddAsync(newHero);
            await _dataContext.SaveChangesAsync();

            return newHero;
        }

        public async Task<SuperHero> DeleteHero(int id)
        {
            var hero = await _dataContext.SuperHeroes.FindAsync(id);
            if (hero == null)
            {
                return null;
            }

            _dataContext.SuperHeroes.Remove(hero);
            await _dataContext.SaveChangesAsync();

            return hero;

        }

        public async Task<List<SuperHero>> GetAllHeroes()
        {
            var heroes = await _dataContext.SuperHeroes.ToListAsync();
            return  heroes;
        }

        public async Task<SuperHero> GetHero(int id)
        {
            var hero = await _dataContext.SuperHeroes.FindAsync(id);
            if (hero == null)
            {
                return null;
            }
            return hero;
        }

        public async Task<SuperHero> UpdateHero(int id, SuperHeroDtoXML updatedHero)
        {
            var hero = await _dataContext.SuperHeroes.FindAsync(id);
            if (hero == null)
            {
                return null;
            }

            hero.Name = updatedHero.Name;
            hero.FirstName = updatedHero.FirstName;
            hero.LastName = updatedHero.LastName;
            hero.Place = updatedHero.Place;

           await _dataContext.SaveChangesAsync();

            return hero;
        }
    }
}
