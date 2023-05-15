global using RestfulAPIExample.Models;
global using RestfulAPIExample.Dto;
using RestfulAPIExample.Data;
using RestfulAPIExample.Services.SuperHeroService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ISuperHeroService, SuperHeroService>();

builder.Services.AddDbContext<DataContext>();

var app = builder.Build();          // tutorial https://www.youtube.com/watch?v=8pH5Lv4d5-g

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
