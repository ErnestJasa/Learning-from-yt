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