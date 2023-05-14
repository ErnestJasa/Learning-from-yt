using IMS.Plugins.InMemory;
using IMS.UseCases.Interfaces;
using IMS.UseCases.Inventories;
using IMS.UseCases.PluginInterfaces;
using InventoryManagementSystem.Data;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

var builder = WebApplication.CreateBuilder(args);       // tutorial https://youtu.be/EluvVXA_Rto?t=7427

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>();

// Singleton will create an instance of class when it's needed and will store it in application (in memory??)
// and the instance will stay there for as long as application is running. And when any user requires the instance it will provide the same one to everyone.
builder.Services.AddSingleton<IInventoryRepository, InventoryRepository>();

// Transient will create an instance of the class whenever user requires it. Framework does not store the instance of it. Every user will get their own instance of it, unlike singleton
builder.Services.AddTransient<IViewInventoriesByNameUseCase, ViewInventoriesByNameUseCase>();
builder.Services.AddTransient<IAddInventoryUseCase, AddInventoryUseCase>();
builder.Services.AddTransient<IEditInventoryUseCase, EditInventoryUseCase>();
builder.Services.AddTransient<IViewInventoryByIdUseCase, ViewInventoryByIdUseCase>();

// Scoped will provide an instance of the class similarly to singleton, but it will only last while, for example, the connection with SignalR is established
//builder.Services.AddScoped<>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
