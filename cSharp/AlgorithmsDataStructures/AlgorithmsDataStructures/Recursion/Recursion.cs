namespace AlgorithmsDataStructures.Recursion
{
    public class Recursion
    {
        public void MinusByOne(int n)
        {
            // base case to prevent an infinite loop/stack overflow
            if (n != 0)
            {
                MinusByOne(n - 1); // it calls this function all the way to 0, then continues doing the code below it in reverse order. 
            }
            Console.WriteLine("n = " + n); // console will write n = 0 first, then 1, then 2 etc.
        }

        // factorial formula - n! = n * (n - 1) * (n - 2) * ... * 1 
        // examples - 1! = 1          2! = 2 * 1 = 2             3! = 3 * 2 * 1 = 6           4! = 4 * 3 * 2 * 1 = 24    5! = 5 * 4 * 3 * 2 * 1 = 120     
        public int IterativeFactorial(int num)
        {
            int factorial = 1;
            for (int i = 1; i <= num; i++)
            {
                factorial = factorial * i;
            }
            return factorial;
        }
        public int RecursiveFactorial(int num) // for factorials its better to use recursion than iteration.
        {
            if (num == 0)
            {
                return 1;
            }
            return num * RecursiveFactorial(num - 1);
        }            
    }
}
