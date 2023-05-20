using Microsoft.AspNetCore.Mvc;
// need these three usings 
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

using AuthExample.Models;

namespace AuthExample.Controllers
{
    public class AccessController : Controller
    {
        public IActionResult Login()    // this action is used to check if the user is already logged in
        {
            ClaimsPrincipal claimUser = HttpContext.User;
            
            if(claimUser.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }

            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Login(VMLogin modelLogin)      // this one is used to log in
        {
            if(modelLogin.Email ==  "user@email.com" || modelLogin.Email == "test@test.com" && modelLogin.Password == "123") // Should make a database call here
            {
                List<Claim> claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.NameIdentifier, modelLogin.Email), // i guess this is to pass to the view what to use as a username
                    new Claim("OtherProperties", "Example Role"),            // and this is to set for example roles of admin/user or such
                    new Claim(ClaimTypes.Name, "user")
                };

                ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                AuthenticationProperties properties = new AuthenticationProperties()
                {
                    AllowRefresh = true,
                    IsPersistent = modelLogin.KeppLoggedIn
                };

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, 
                    new ClaimsPrincipal(claimsIdentity), properties);

                return RedirectToAction("Index", "Home", claims);
            }

            ViewData["ValidateMessage"] = "user not found";

            return View();
        }
    }
}
