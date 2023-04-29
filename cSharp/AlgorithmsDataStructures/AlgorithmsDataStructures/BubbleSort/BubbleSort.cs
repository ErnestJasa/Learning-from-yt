using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.BubbleSort
{
    public class BubbleSort
    {
        public int[] Sort(int[] array)
        {
            // hold temporary value for the swap.
          

            for (int i = 0; i < array.Length; i++) // pointer loop
            {
                for (int j = 0; j < array.Length - 1 - i; j++) // sorting loop
                                                              // (the array.Length -1 - i includes i because the largest value after first itteration
                                                              // will always end up at the end)
                {
                    if (array[j] > array[j + 1])  
                    {
                        // store the variable so it doesnt get overwritten
                        int temp = array[j + 1];
                        array[j + 1] = array[j];
                        array[j]  = temp;
                    }
                }
            }
            return array;
        }
    }
}
