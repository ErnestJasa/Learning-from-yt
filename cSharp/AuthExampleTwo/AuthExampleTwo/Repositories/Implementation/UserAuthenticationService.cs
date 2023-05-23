using AuthExampleTwo.Models.Domain;
using AuthExampleTwo.Models.Dto;
using AuthExampleTwo.Repositories.Abstract;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace AuthExampleTwo.Repositories.Implementation
{
    public class UserAuthenticationService : IUserAuthenticationService
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UserAuthenticationService(SignInManager<ApplicationUser> signInManager,
                                         UserManager<ApplicationUser> userManager,
                                         RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public async Task<Status> LoginAsync(LoginModel model)
        {
            var status = new Status();
            var user = await _userManager.FindByNameAsync(model.Username);
            if(user == null)
            {
                status.StatusCode = 0;
                status.Message = "User does not exist";
                return status;
            }
            // match password
            if (!await _userManager.CheckPasswordAsync(user, model.Password))
            {
                status.StatusCode = 0;
                status.Message = "Invalid password";
                return status;
            }

            var signInResult = await _signInManager.PasswordSignInAsync(user,model.Password, true, true);

            if(signInResult.Succeeded)
            {
                // add roles if succeeded
                var userRoles = await _userManager.GetRolesAsync(user);
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName)
                };
                foreach(var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }
                status.StatusCode = 1;
                status.Message = "Logged in successfully";
                return status;
            }else if(signInResult.IsLockedOut)
            {
                status.StatusCode = 0;
                status.Message = "User is locked out";
                return status;
            }
            else
            {
                status.StatusCode = 0;
                status.Message = "Error on logging in";
                return status;
            }
        }

        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task<Status> RegistrationAsync(RegistrationModel model)
        {
            var status = new Status();
            var userExists = await _userManager.FindByNameAsync(model.Username);
            if (userExists != null)
            {
                status.StatusCode = 0;
                status.Message = "User already exists";
                return status;
            }
            ApplicationUser user = new ApplicationUser
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                Name = model.Name,
                Email = model.Email,
                UserName = model.Username,
                EmailConfirmed = true,
            };
            
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                status.StatusCode = 0;
                status.Message = "User creation failed";
                return status;
            }
            // Role management
            if(!await _roleManager.RoleExistsAsync(model.Role))
            {
                await _roleManager.CreateAsync(new IdentityRole(model.Role));
            }
            if(await _roleManager.RoleExistsAsync(model.Role))
            {
                await _userManager.AddToRoleAsync(user, model.Role);
            }
            status.StatusCode = 1;
            status.Message = "User has registered successfully";
            return status;
        }
    }
}
