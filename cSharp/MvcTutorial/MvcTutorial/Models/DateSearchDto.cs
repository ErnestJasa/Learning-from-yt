namespace MvcTutorial.Models
{
    public class DateSearchDto
    {
        public DateOnly Start { get; set; } = new DateOnly(2023, 5, 3);
        public DateOnly End { get; set; }
    }
}
