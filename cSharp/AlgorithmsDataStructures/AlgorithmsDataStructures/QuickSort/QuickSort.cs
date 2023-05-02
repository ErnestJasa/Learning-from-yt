using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.QuickSort
{
    public class QuickSort                              
    {
        private int[] Qs(int[] array, int low, int high)
        {
            if (low >= high)
            {
                return array;
            }
            int pivotIndex = Partition(array, low, high);
            array = Qs(array, low, pivotIndex -1); // repeat the quick sort on the left side
            array = Qs(array, pivotIndex + 1, high); // repeat the quick sort on the right side

            return array;
        }
        private int Partition(int[] array, int low, int high)   
        {
            int pivot = array[high];
            int index = low - 1;
            for (int i = low; i < high; i++)
            {
                if (array[i] <= pivot)          // finds everything thats less than the pivot and moves it to the beginning
                {
                    index++;
                    int temp = array[i];
                    array[i] = array[index];
                    array[index] = temp;
                }
            }

            // moves the pivot so that whats higher than it is on the right side
            index++;
            array[high] = array[index];
            array[index] = pivot;

            return index;
        }
        public int[] Sort(int[] nums)
        {
            nums = Qs(nums, 0, nums.Length - 1);
            return nums;
        }

    }
}
