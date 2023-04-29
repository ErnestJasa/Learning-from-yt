using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures
{
    public class ArrayInsertionDeletion
    {
        // Array Insertions and deletions TBH most of this shit seems dumb AF and youre not actually deleting anything. inserting only sometimes

        // Assigning value at the last used index of an array

        // A variable to keep track of last filled index of the array. the values after it are null or 0. AKA not used
        int lastFilledIndex = 0;

        public int[] InsertAtEnd(int[] intArray)
        {
            for (int i = 0; i < 6; i++)
            {
                intArray[lastFilledIndex] = i;
                lastFilledIndex++;
            }
            intArray[lastFilledIndex] = 5;
            lastFilledIndex++;
            return intArray;
        }

        public int[] InsertAtStart(int[] intArray)
        {
            for (int i = intArray.Length - 1; i > 0; i--)
            {
                // moving over values
                intArray[i] = intArray[i - 1];
            }
            intArray[0] = 10;
            return intArray;
        }
        public int[] InsertAnywhere(int[] intArray, int insertPosition)
        {
            for (int i = 4; i >= insertPosition; i--)
            {
                // shift each element one positition to the right
                intArray[i + 1] = intArray[i];
            }

            intArray[insertPosition] = 8;
            return intArray;
        }

        // Delete the first value of the array (basically shifts the whole array to the left)
        public int[] DeleteFirst(int[] intArray)
        {
            for (int i = 1; i < lastFilledIndex; i++)
            {
                // shifts elements to the left
                intArray[i - 1] = intArray[i];
            }
            lastFilledIndex--;
            return intArray;
        }
        public int[] DeleteAnywhere(int[] intArray)
        {
            for (int i = 2; i < lastFilledIndex; i++)
            {
                intArray[i - 1] = intArray[i];
            }
            lastFilledIndex--;
            return intArray;
        }

    }
}
