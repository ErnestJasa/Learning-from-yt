"use strict";
console.log("heelo");
console.log("heelo fds");
// class User {
//     email: string;
//     name: string;
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, // the same thing as above class just simplified without writing this.email etc.
    name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1; // private cannot be accessed anywhere
        this._courseCount = 1; // protected can be accessed inside classes that inherit from this class
    }
    get getEmail() {
        return this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const newUser = new User("email@mail.com", "namey");
