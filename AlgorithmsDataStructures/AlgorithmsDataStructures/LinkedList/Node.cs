using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.LinkedList
{
    public class Node // Node (just a term) in a list is pretty much a container for data.
                      // A list is made up of multiple nodes, where one points to the other.
                      // The last element of the list points to null. 
    {
        public int Data { get; set; }
        public Node? NextElement { get; set; }

        public void DisplayNode()
        {
            Console.WriteLine(Data);
        }
    }
}
