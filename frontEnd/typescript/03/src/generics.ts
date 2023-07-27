const score: Array<number> = []

function identityOne(value: boolean | number): boolean | number{
    return value
}

function identityTwo<Type>(val: Type): Type{    // can pass your own type, making this function generic
    return val;
}

function identityThree<T>(val: T): T{   // same as above, just shortened
    return val;
}

identityThree(true) // makes the type as boolean automagically

interface Bottle{
    brand: string,
    type: number
}
identityThree<Bottle>({brand: "", type: 0}) // can pass in your own type like this



function getSearchProducts<T>(products: T[]): T{ // get a generic type as an array - specify that its an array inside the function parameters
    // do some Db operations
    const index = 3;
    return products[index];
}
const getMoreSearchProducts = <T>(products: T[]): T =>{ // Arrow function syntax, same as above
    // Db operations
    const index = 4;
    return products[index]
}

function someGenericTypeFunction<T,>(){ // The comma in the <T,> is just syntax sugar, that specifies that its a generic type, and not something specific
}


interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valueOne: T,valueTwo: U): object{ // can take in two generic types.
                                                                                  // The extends part just makes the generic type into the type that is specified.
                                                                                  // It can also extend to the previous generic type like <T, U extends T>
    return{
        valueOne,
        valueTwo
    }
}
// anotherFunction(3, {}) // and when calling the function would need to provide the correct type, that it extended



interface Quiz{
    name: string,
    type: string
}

interface Course{
    names: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

export {}