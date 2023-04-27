using System.Net;
using System.Net.Mail;

namespace SendEmailTwo
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            string mail = "temp.mail.for.school123456@gmail.com";
            string pw = "AEEDE73E99BD76C536539C132B69A17FDB3D";

            var client = new SmtpClient("smtp.elasticemail.com", 2525)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(mail, pw)
            };

            return client.SendMailAsync(
                new MailMessage(
                        from: mail,
                        to: email,
                        subject,
                        message
                    ));
        }
    }
}
