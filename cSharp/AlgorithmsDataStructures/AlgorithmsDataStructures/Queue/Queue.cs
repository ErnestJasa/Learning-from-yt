using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.Queue
{
    public class Queue
    {
        public int MaxSize { get; set; } // sets the number of elements, because its an array
        public int[] QueueArray { get; set; } // the actual array where elements are stored
        public int Front { get; set; } // index to keep track of front(head)
        public int Rear { get; set; } // index to keep track of added elements
        public int NItems { get; set; } // to keep track of the length
        public Queue(int size)
        {
            MaxSize= size;
            QueueArray = new int[size];
            Front = 0;
            Rear = -1;
        }

        public void Enqueue(int item) // something enters a line(queue)
        {            
            Rear++; // increment the end of queue pointer
            QueueArray[Rear] = item; // insert where the end was incremented
            NItems++;
        }

        public int Dequeue()
        {
            int temp = QueueArray[Front]; // i feel like this is good and bad at the same time
                                          // good because you dont have to iterate through the array and move all the items up the line(queue)
                                          // but bad because if you just change where the front is, without moving everything up, there might be
                                          // available space in the front but not the back and so you couldnt put a new item in, even though there is space
            Front++;
            if(Front == MaxSize)
            {
                Front = 0;
            }
            NItems--;
            return temp;
        }
        public int Peek()
        {
            return QueueArray[Front];
        }
    }
}
