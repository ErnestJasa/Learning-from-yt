const User = {
    name: "nameyname",
    email: "hte@email.com",
    isActive: true
}

// function createUser(user:{name: string, isActive: boolean}){    
// }
// createUser({name: "gfdss", isActive: true})

type user = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number // questionmark makes it optional
}

function createUser(user: user): user{
    return user;
}

let myUser: user = {
    _id: "fdsa",
    name: "dsaf",
    email: "sdf@df.d",
    isActive: false
}

type cardNumber = {
    cradNumber: string;
}
type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // make types use other custom types
    cvv: number;
}



export {}