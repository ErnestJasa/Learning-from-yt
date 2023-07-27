function detectType(value: number | string){
    if (typeof value === "string") {        
        return value.toLowerCase()
    }
    return value + 3;
}

function provideId(id: string | null){
    if (!id) {
        console.log("Provide ID")
        return;
    }
    return id.toLowerCase();
}


function printAll(strs: string | string[] | null){ 
  // !!!!!!!!!!!!!!!
  //  DON'T DO THIS
  if (strs) {                               // the if's cover all three types but doesn't account for an empty string
    if(typeof strs === 'object'){
        for(const s of strs){
            console.log(s)
        }
    }else if (typeof strs === 'string'){
        console.log(strs)
    }
  }
}


interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function checkIfAdmin(account: User | Admin){
    if ("isAdmin" in account) { // checks if the passed value has a property from some interface. the dumb thing to me is that its typed as a string
        return account.isAdmin
    }
}


function logValue(x: Date | string){
    if (x instanceof Date) { // instanceof is used on values that can be created using 'new' keyword (new Date - creates a new date), 
                             // or like a class instantiation
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase())
    }
}


type Fish = {
    swim(): void
}
type Bird = {
    fly(): void
}

function isFish(pet: Fish | Bird): pet is Fish{ 
    return (pet as Fish).swim !== undefined // pet is cast as a Fish type and checked if the swim method exists
                                            // if no type of function is specified then it just returns a boolean value. 
                                            // if the type is written like this :pet is Fish, then will return a type of Fish if the statement is true
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}



interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {          // specify by ourselves what type/kind an interface is and make it easier to identify it.
                                            // instead of having to check if the passed value has some kind of property, like in line 44
        return Math.PI * shape.radius ** 2        
    }
   // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;

      case "square":
        return shape.side * shape.side;

      case "rectangle":    
        return shape.length * shape.width;
        
      default:                                  // in switch statement, it should contain a default return,
                                                // incase the provided type gets updated and not all the clauses are covered.
        const _defaultForShape: never = shape;
        return _defaultForShape;
    }
}