interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    // someMethod: () => string  // declares a function type that returns a string
    someMethod(): string,        // same as above, just different syntax
    getCoupon(couponName: string): number
}

// can add additional values to an already existing interface, but need to assign those values where the interface is used too
interface User{ 
    githubToken: string
}

const newUser: User = {
    dbId: 165,
    email:"fdas", 
    userId:165,
    someMethod: () =>{                  // assaignment of the declared function
        return "some text to return"
    },
    getCoupon(couponName:"some coupon"){    // can also assign function like this
        return 2;
    },
    githubToken: "token"
}

interface Admin extends User{ // interfaces can inherit one another
    role: "admin"
}

export {}