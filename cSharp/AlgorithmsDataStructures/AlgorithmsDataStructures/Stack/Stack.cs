using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.Stack
{
    public class Stack
    {
        public int MaxSize { get; set; } // Array stacks needs a maxsize to initialize an array

        public string[] stackArray { get; set; }
        public int Top { get; set; } // Keeps track of the last element added (top)

        public Stack(int size)
        {
            this.MaxSize = size; // Holds contructor value
            this.stackArray = new string[MaxSize]; // Creates an array with size
            this.Top = -1; // We give top -1 because array indexes start with 0. Otherwise it would skip first element
        }

        public void Push(string item)
        {
            Top++; // sets a new top, because a new element was added and now it is at the top. like putting a paper on an already existing stack of papers.
            stackArray[Top] = item;
        }

        public string Pop()
        {
            int old_top = Top; // Placeholder
            Top--; // Sets a new top, because the old one was "taken out"
            return stackArray[old_top];
        }
        public string Peek()
        {
            return stackArray[Top];
        }

        public bool isEmpty()
        {
            return Top == 0;
        }

        public bool isFull()
        {
            return (MaxSize - 1 == Top);
        }

    }
}
