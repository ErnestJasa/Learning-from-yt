using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SendEmailTwo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailSenderController : ControllerBase
    {
        private readonly IEmailSender _emailSender;
        public EmailSenderController(IEmailSender emailSender)
        {
            _emailSender= emailSender;
        }

        [HttpPost]
      public IActionResult SendMail(string email, string subject, string message)
        {

            _emailSender.SendEmailAsync(email, subject, message).Wait();

            return Ok();
        }
    }
}
