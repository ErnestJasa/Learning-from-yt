using AuthExampleTwo.Models.Domain;
using AuthExampleTwo.Repositories.Abstract;
using AuthExampleTwo.Repositories.Implementation;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

// required packages - Entityframework.sqlServer, tools,  microsoft.aspnet.core.identity.entityframeworkcore

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("conn")));

//configure for identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<DatabaseContext>()
    .AddDefaultTokenProviders();
builder.Services.ConfigureApplicationCookie(options => {
    options.LoginPath = "/UserAuthentication/Login";
    options.ExpireTimeSpan = TimeSpan.FromMinutes(20);
    }); // sets the login path

//builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
//    .AddCookie(option =>
//    {
//        option.LoginPath = "/UserAuthentication/Login";
//        option.ExpireTimeSpan = TimeSpan.FromMinutes(20);
//    });

builder.Services.AddScoped<IUserAuthenticationService, UserAuthenticationService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=UserAuthentication}/{action=Login}/{id?}");

app.Run();
