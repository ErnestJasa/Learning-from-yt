using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using AuthExampleThree.Data;
using AuthExampleThree.Areas.Identity.Data;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.AspNetCore.Authentication.Cookies;
// Setting up : step 1. right click project, add, new scaffolded item, on the left select Identity
//              step 2. Select what you want to add from the contents (login/registration/logout)
//              step 3. on the right top, click three dots, select Views -> Shared folder on the left and _Layout.cshtml
//              step 4. click the plus to add Data Context Class, give it some name
//              step 5. click the plus to add User Class, give it some name like ApplicationUser

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("AuthDbContextConnection") ?? throw new InvalidOperationException("Connection string 'AuthDbContextConnection' not found.");

builder.Services.AddDbContext<AuthDbContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = false).AddEntityFrameworkStores<AuthDbContext>();

builder.Services.PostConfigure<CookieAuthenticationOptions>(IdentityConstants.ApplicationScheme, options => // change cookie parameters like expiration time and name
{
    options.Cookie.Name = "sausainiai";
    options.ExpireTimeSpan = TimeSpan.FromMinutes(20);
});

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddRazorPages();   // Need to add razor pages, because the Identity library uses them by default

builder.Services.Configure<IdentityOptions>(options =>          // Setting up and modifying requirements for input fields
{
    options.Password.RequireUppercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequiredLength = 3;
    options.Password.RequiredUniqueChars = 0;
    options.Password.RequireLowercase = false;
    options.Password.RequireDigit = false;
    options.User.RequireUniqueEmail = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapRazorPages(); // Adds the routing support for razor pages

app.Run();
