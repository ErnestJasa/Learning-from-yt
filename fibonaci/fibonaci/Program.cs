

int a = 0;
int b = 1;
int c = 1;
/*for (int i = 1; i <= 8; i++)
{
    if(i <= 1)
    {
        c = i;
    }
    else
    {
        c = a + b;
        a = b;
        b = c;
    }
    Console.Write(c + " ");
    
}*/

do
{
    Console.Write(c + " ");
    c = a + b;
    a = b;
    b = c;

}while (c < 10);


/*
   
    
        for(int i = 1; i <= 8; i++)
        {
            Console.Write(Fibo(i) + " ") ;
        }
        
    
    static int Fibo(int x)
    {   
        if(x >= 3)
        {
            return (Fibo(x-1)+Fibo(x-2));
        }
        else { 
            return 1;
        }
        
    }

*/