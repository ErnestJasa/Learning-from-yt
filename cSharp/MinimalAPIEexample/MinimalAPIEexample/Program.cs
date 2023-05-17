using Microsoft.EntityFrameworkCore;
using MinimalAPIEexample;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGet("/api/book", async (DataContext context) =>
{
   return await context.Books.ToListAsync();
});

app.MapGet("/api/book/{id}", async (DataContext context, int id) =>
{
    var book = await context.Books.FindAsync(id);
    if(book is null)
    {
        return Results.NotFound("Book doesn't exist");
    }
    return Results.Ok(book);
});

app.MapPost("/api/book", async (DataContext context, Book book) =>
{
    context.Books.Add(book);
    await context.SaveChangesAsync();
    return book;
});
app.MapPut("/api/book/{id}", async (DataContext context, Book updatedBook, int id) =>
{
    var book = await context.Books.FindAsync(id);
    if (book is null)
    {
        return Results.NotFound("Book doesn't exist");
    }
    book.Author = updatedBook.Author;
    book.Title = updatedBook.Title;
    await context.SaveChangesAsync();
    return Results.Ok(book);
});

app.MapDelete("/api/book/{id}", async (DataContext context, int id) =>
{
    var book = await context.Books.FindAsync(id);
    if (book is null)
    {
        return Results.NotFound("Book doesn't exist");
    }
    context.Books.Remove(book);
    await context.SaveChangesAsync();
    return Results.Ok(book);
});

app.Run();

public class Book
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Author { get; set; }
}
