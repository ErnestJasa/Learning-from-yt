using IMS.CoreBusiness;

namespace IMS.UseCases.Interfaces
{
    public interface IAddInventoryUseCase
    {
        Task EexecuteAsync(Inventory inventory);
    }
}