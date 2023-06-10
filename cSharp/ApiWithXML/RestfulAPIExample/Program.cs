global using ApiWithXML.Models;
global using ApiWithXML.Dto;
using ApiWithXML.Data;
using ApiWithXML.Services.SuperHeroService;
using Microsoft.AspNetCore.Mvc.Formatters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options =>
    {
        options.InputFormatters.Add(new XmlSerializerInputFormatter(options)); // Need these two lines for XML
    }).AddXmlDataContractSerializerFormatters();

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
