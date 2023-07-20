let score: number | string = 54;

score = "84";

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number;
}

let wanker: User | Admin  = { name: "wunker", id:165 }

wanker = { username: "wenker", id: 165 } // can change from one type to another if the initial variable specifies both of them

function getItemFromDb(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  }
  // cant do it this way since its expecting that it might be a number. need to check the type like above to make sure
  // id.toUpperCase();
}

const array: (number | string)[] = [1, 2, "3"] // array can contain both numbers and strings
const array2: string[] | number[] = ["1", "2", "3"] // the array can only be made up of strings or numbers, but cant contain both

let seatAllotment: "aisle" | "middle" | "window"; // variable can only be these three values
seatAllotment = 'aisle' 
// cant assaign
// seatAllotment = "crew"