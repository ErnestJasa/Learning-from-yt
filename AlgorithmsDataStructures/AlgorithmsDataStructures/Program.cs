using AlgorithmsDataStructures;
using AlgorithmsDataStructures.AbstractDataType;
using AlgorithmsDataStructures.LinkedList;
using AlgorithmsDataStructures.Stack;

// YT tutorial https://www.youtube.com/watch?v=5o1eNLXRgy8&list=PL82C6-O4XrHf49SjEZWSa5DHN--ZRrcN_&index=3




int[] array = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

Stack stack= new Stack(10);

for (int i = 0; i < 3; i++)
{
    stack.Push("Squirtle");
    stack.Push("Pickachu");
    stack.Push("Charmander");
}

stack.Pop();
stack.Peek();

while (!stack.isEmpty())
{
    var value = stack.Pop();
    Console.WriteLine(value);
}



// --------------------------------------------------------------------



// Linked list. Rarely used anymore.

//LinkedList linkedList= new LinkedList();

//linkedList.InserFirst(1);
//linkedList.InserFirst(2);
//linkedList.InserFirst(3);
//linkedList.InserFirst(4);

//linkedList.DeleteFirst();
//linkedList.DeleteFirst();

//linkedList.InsertLast(565);
//linkedList.InsertLast(867);

//linkedList.DisplayList();


// --------------------------------------------------------------------


//Arrays
//Array Insertions and deletions TBH most of this shit seems dumb AF and youre not actually deleting anything. inserting only sometimes

// Assigning value at the last used index of an array

//int[] intArray = new int[9];

//A variable to keep track of last filled index of the array. the values after it are null or 0. AKA not used
//int lastFilledIndex = 0;

//for (int i = 0; i < 6; i++)
//{
//    intArray[lastFilledIndex] = i;
//    lastFilledIndex++;
//}
//intArray[lastFilledIndex] = 5;
//lastFilledIndex++;

//Insert value to the start of an array

//for (int i = intArray.Length - 1; i > 0; i--)
//{
//    moving over values
//   intArray[i] = intArray[i - 1];
//}
//intArray[0] = 10;

//insert anywhere into array

//for (int i = 4; i >= 2; i--)
//{
//    shift each element one positition to the right
//    intArray[i + 1] = intArray[i];
//}

//intArray[2] = 8;

//Delete the first value of the array (basically shifts the whole array to the left)

//for (int i = 1; i < lastFilledIndex; i++)
//{
//    shifts elements to the left
//   intArray[i - 1] = intArray[i];
//}
//lastFilledIndex--;

//Delete anywhere from the array

//for (int i = 2; i < lastFilledIndex; i++)
//{
//    intArray[i - 1] = intArray[i];
//}
//lastFilledIndex--;

//for (int i = 0; i < lastFilledIndex; i++)
//{
//    Console.WriteLine(intArray[i]);
//}
