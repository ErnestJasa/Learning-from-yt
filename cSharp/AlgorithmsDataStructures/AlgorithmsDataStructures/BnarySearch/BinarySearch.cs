using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.BnarySearch
{
    public class BinarySearch
    {
        public int Search(int[] intArray, int value)
        {
            int start = 0;
            int end = intArray.Length;
            while (start < end)
            {
                int midpoint = (start + end) / 2;

                // search the middle
                if (intArray[midpoint] == value)
                {
                    return midpoint;
                }
                else if (intArray[midpoint] < value)
                {
                    start = midpoint +1; // that +1 is kinda useless, in theory does help a bit, practice wise, not really
                }
                else
                {
                    end = midpoint;
                }
            }
            return -1;
        }
    }
}
