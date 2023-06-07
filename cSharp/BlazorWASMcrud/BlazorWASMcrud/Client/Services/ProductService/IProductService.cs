using BlazorWASMcrud.Shared;

namespace BlazorWASMcrud.Client.Services.ProductService
{
    public interface IProductService
    {
        IEnumerable<Product> Products { get; set; }
        Task GetProducts();
        Task<Product> GetProductById(int id);
        Task CreateProduct(Product product);
        Task UpdateProduct(int id,Product product);
        Task DeleteProduct(int id);
    }
}
