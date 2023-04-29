using MvcTutorial.Data.Enum;
using MvcTutorial.Models;

namespace MvcTutorial.ViewModels
{
    public class EditRaceViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile Image { get; set; }
        public string? URL { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
        public RaceCategory RaceCategory { get; set; }
    }
}
