using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.LinkedList
{
    public class LinkedList
    {
        public Node? First { get; set; }

        public void InserFirst(int data)
        {
            // create the node
            Node newNode = new Node();
            // put the data in the node
            newNode.Data = data;
            // put the old node in next
            newNode.NextElement= First;
            // make the first the new node
            First = newNode;
        }

        public Node DeleteFirst() // again not really deleting anything, the spot will still exist logically, just changing which element is the first
                                  // i guess garbage collector removes it since it has no links to any other element and is inaccessable
        {
            // assign temporary variable
            Node temp = First;
            // assign the next head/first
            First = First.NextElement;
            return temp;
        }

        public void DisplayList()
        {
            Console.WriteLine("Iterating through list... ");
            Node current = First;
            while (current != null)
            {
                current.DisplayNode();
                current = current.NextElement; // this means its iteratting.
            }
        }
        public void InsertLast(int data)
        {
            Node current = First;
            while (current.NextElement != null)
            {
               current = current.NextElement;
            }
            Node newNode = new Node();
            newNode.Data = data;
            current.NextElement= newNode;
        }
    }
}
