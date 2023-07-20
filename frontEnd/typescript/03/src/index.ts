console.log("heelo")
console.log("heelo fds")

// class User {
//     email: string;
//     name: string;
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
    
// }
class User {

    // private _courseCount = 1; // private cannot be accessed anywhere
    protected _courseCount = 1;  // protected can be accessed inside classes that inherit from this class
    

    constructor(
        public email: string,   // the same thing as above class just simplified without writing this.email etc.
        public name: string){        
    }
    get getEmail():string{
        return this.email
    }

    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNumber: number){ // 'set' cannot have a return type, even if it is void. and it must take in one parameter, no less, no more
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNumber;
    }
}

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4
    }
}

const newUser = new User("email@mail.com", "namey")
