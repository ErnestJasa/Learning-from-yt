using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.QueueTwo
{
    public class Order
    {
        public int OrderId { get; set; }
        public int OrderQuantity { get; set; }

        public Order(int id, int orderQuantity)
        {
            this.OrderId= id;
            this.OrderQuantity= orderQuantity;
        }

        // print message on screen that order was processed
        public void ProccessOrder()
        {
            Console.WriteLine($"Order {OrderId} proccessed!");
        }
    }
}
