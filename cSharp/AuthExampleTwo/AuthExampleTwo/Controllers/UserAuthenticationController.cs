using AuthExampleTwo.Models.Dto;
using AuthExampleTwo.Repositories.Abstract;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace AuthExampleTwo.Controllers
{
    public class UserAuthenticationController : Controller
    {
        private readonly IUserAuthenticationService _service;
        public UserAuthenticationController(IUserAuthenticationService service)
        {
            _service = service;
        }

        public IActionResult Registration()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Registration(RegistrationModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            model.Role = "user";
            var result = await _service.RegistrationAsync(model);
            TempData["msg"] = result.Message;
            return RedirectToAction(nameof(Registration));

        }

        public IActionResult Login()
        {
            ClaimsPrincipal claimUser = HttpContext.User;
            if (claimUser.Identity.IsAuthenticated)     // checks if user is already logged in and redirects
            {
                return RedirectToAction("Display", "Dashboard");
            }
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if(!ModelState.IsValid)
            {
                return View(model);
            }
            var result = await _service.LoginAsync(model);
            if(result.StatusCode == 1)
            {
                return RedirectToAction("Display", "Dashboard");
            }
            else
            {
                TempData["msg"] = result.Message; 
                return RedirectToAction(nameof(Login));
            }
        }

        [Authorize]
        public async Task<IActionResult> Logout()
        {
            await _service.LogoutAsync();
            return RedirectToAction(nameof(Login));
        }

        //public async Task<IActionResult> Reg()
        //{
        //    var model = new RegistrationModel()
        //    {
        //        Username = "admin",
        //        Name = "administrator",
        //        Email = "admin@email.com",
        //        Password = "Admin123!",
        //        Role = "admin"
        //    };
        //    var result = await _service.RegistrationAsync(model);
        //    TempData["msg"] = result.Message;
        //    return Ok(result);
        //}
    }
}
