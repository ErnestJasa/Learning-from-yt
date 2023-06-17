using ExpenseTrackerMvc.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionString")));

//Register Syncfusion license
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("MjQ0ODYyNUAzMjMxMmUzMDJlMzBiYnRIUlhqS2VQWUl3TFJGWkxKemxqcXkwTWZVUVprTEp5UFNISXplajRNPQ==;Mgo+DSMBaFt+QHJqVk1mQ1NAaV1CX2BZfVl1QWlcfE4QCV5EYF5SRHBeRVxmSnpWdUxlXnw=;Mgo+DSMBMAY9C3t2VFhiQlJPcEBAWXxLflF1VWBTfFp6cVZWACFaRnZdQV1lSHlSc0ZnXHxXeXJW;Mgo+DSMBPh8sVXJ1S0R+X1pCaV1GQmFJfFBmRmlae1R1cEUmHVdTRHRcQltiTn9WdUFmXX9fdHc=;MjQ0ODYyOUAzMjMxMmUzMDJlMzBvRUdYeE1VOVVvQ1UvUTZSNXdyWVZCQllJRjhISm1CN001VFBKWDRuQUVVPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldX2dWfFN0RnNadV10flBCcDwsT3RfQF5jT39Ud0BgXXpacHNXQg==;ORg4AjUWIQA/Gnt2VFhiQlJPcEBAWXxLflF1VWBTfFp6cVFWACFaRnZdQV1lSHlSc0ZnXHteeXdW;MjQ0ODYzMkAzMjMxMmUzMDJlMzBrQStBU2QyS01CWUhKMUI2TGpLcXM0d21OL3E0NE9VVlQ2RndOMEJMdnI4PQ==;MjQ0ODYzM0AzMjMxMmUzMDJlMzBoeG41NzZHQmw0eE50WlAwSy9sNXJRcEVicDRheXBJaHZTelIxN2RKNmpvPQ==;MjQ0ODYzNEAzMjMxMmUzMDJlMzBlc3NyOGp0d0xvUUMwaHZIL0Z3SWZSOVBXTHIwM3BJOEMrQkNzMWpIZEs4PQ==;MjQ0ODYzNUAzMjMxMmUzMDJlMzBZRVZUNTgzZU12WWxhRktXdU1Mc3NyTS9MWUJ0a1haQU9YTnBCUDh4ODBFPQ==;MjQ0ODYzNkAzMjMxMmUzMDJlMzBiYnRIUlhqS2VQWUl3TFJGWkxKemxqcXkwTWZVUVprTEp5UFNISXplajRNPQ== ");

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

app.Run();

//https://youtu.be/zQ5eijfpuu8?list=PLuyywttDftVX8xTNErbwKUp2VYarnDm2B&t=3259