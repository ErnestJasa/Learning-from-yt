using AlgorithmsDataStructures.BinarySearchTree;
using AlgorithmsDataStructures.BnarySearch;
using AlgorithmsDataStructures.BubbleSort;
using AlgorithmsDataStructures.HashTable;
using AlgorithmsDataStructures.Recursion;

// YT tutorial https://www.youtube.com/watch?v=5o1eNLXRgy8&list=PL82C6-O4XrHf49SjEZWSa5DHN--ZRrcN_&index=3




int[] array = new int[] { -150, -20, 6, 10, 90, 333, 345, 385, 400, 412, 435, 471, 490, 500, 501, 502, 506, 507, 523, 543 };
int[] arrayTwo = new int[] { 465, 8, 3, 9, 48, -450, -5 };

HashTable hashTable = new HashTable();

hashTable.Set("teddy", "55-9656-74");
hashTable.Set("steve", "87-4986-15"); // will collide with teddy and wont insert
hashTable.Set("jessica", "98-5687-14");
hashTable.Set("sarra", "83-9874-17"); // will collide with teddy and wont insert
hashTable.Set("jennifer", "98-15357-14");

Console.WriteLine(hashTable.Get("teddy"));
Console.WriteLine(hashTable.Get("steve"));
Console.WriteLine(hashTable.Get("jessica"));
Console.WriteLine(hashTable.Get("sarra"));
Console.WriteLine(hashTable.Get("jennifer"));




//-----------------------------------------------------------------

// Recursion

Recursion recursion = new Recursion();

//Console.WriteLine(recursion.IterativeFactorial(5));

//Console.WriteLine(recursion.RecursiveFactorial(5));


//---------------------------------------------------------------

// Bubble sort   very inefficient, shouldnt use O(N^2)

BubbleSort bubbleSort = new BubbleSort();

bubbleSort.Sort(arrayTwo);
//foreach (var item in arrayTwo)
//{
//    Console.Write(item + " ");
//}

//-----------------------------------------------------------------

// Binary Search tree

BinarySearchTree bst = new BinarySearchTree();

bst.Insert(7, "squirtle");
bst.Insert(23, "ekans");
bst.Insert(151, "mew");
bst.Insert(4, "charmander");
bst.Insert(1, "bulbasaur");

//Console.WriteLine(bst.Find(1));

//bst.PrintPostOrderTraversal();




// ----------------------------------------------------------------------------

// Binary search only really works on a sorted array O(logN)

//Array.Sort(array);

BinarySearch binarySearch = new BinarySearch();

//Console.WriteLine(array[binarySearch.Search(array, 501)]); 




// ----------------------------------------------------------------------------

// Queue

AlgorithmsDataStructures.Queue.Queue ytQueue = new AlgorithmsDataStructures.Queue.Queue(10); /* from the teddy smith tutorial. i think its flawed in execution
                                                                                              * and would break as is right now.
                                                                                              * Still its good enough to understand
                                                                                              * how it works under the hood of an integrated queue from
                                                                                              * System.Collections
                                                                                              * O(1)
                                                                                              */
//ytQueue.Enqueue(1);
//ytQueue.Enqueue(2);
//ytQueue.Enqueue(3);
//ytQueue.Enqueue(4);
//ytQueue.Enqueue(5);

//ytQueue.Dequeue();
//ytQueue.Dequeue();

//Console.WriteLine(ytQueue.Peek());

//// -----
//// Integrated .net/c# queue
//Queue<int> queue = new Queue<int>();
//queue.Enqueue(1);
//queue.Dequeue();

//Queue<Order> ordersQueue = new Queue<Order>();
//foreach(Order order in ReceiveOrdersFromBranch1()) // enqueues the orders of branch1
//{
//    ordersQueue.Enqueue(order);
//}
//foreach (Order order in ReceiveOrdersFromBranch2()) // enqueues the orders of branch2
//{
//    ordersQueue.Enqueue(order);
//}
//while (ordersQueue.Count > 0) // as long as the que is not empty process the orders
//{
//    // remove the order at the front of queue
//    // and store it in a variable called currentOrder
//    Order currentOrder = ordersQueue.Dequeue();
//    // process order
//    currentOrder.ProccessOrder();
//}
//static Order[] ReceiveOrdersFromBranch1()
//{
//    Order[] orders = new Order[]
//    {
//        new Order(1,5),
//        new Order(2,4),
//        new Order(6,10),
//    };
//    return orders;
//}
//static Order[] ReceiveOrdersFromBranch2()
//{
//    Order[] orders = new Order[]
//    {
//        new Order(3,5),
//        new Order(4,4),
//        new Order(5,10),
//    };
//    return orders;
//}


// ----------------------------------


// Stack O(1)
AlgorithmsDataStructures.Stack.Stack stack = new AlgorithmsDataStructures.Stack.Stack(10);

for (int i = 0; i < 3; i++)
{
    stack.Push("Squirtle");
    stack.Push("Pickachu");
    stack.Push("Charmander");
}

stack.Pop();
stack.Peek();

//while (!stack.isEmpty())
//{
//    var value = stack.Pop();
//    Console.WriteLine(value);
//}



// --------------------------------------------------------------------



// Linked list. Rarely used anymore. If implemented without traversing - O(1)

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
