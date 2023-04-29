using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures
{
    public class LinearSearchArray
    {

        // Linear search array
        // Pretty much a regular for/foreach loop where we check each element if it meets the requirement 
        // Key - what value is being searched for
       public bool LinearSearch(int[] array, int key)
        {
            for (int i = 0; i < array.Length; i++)
            {
                if (array[i] == key)
                {
                    return true;
                }
            }
            return false;
        }

    }
}
