var score = 54;
score = "84";
var wanker = { name: "wunker", id: 165 };
wanker = { username: "wenker", id: 165 }; // can change from one type to another if the initial variable specifies both of them
function getItemFromDb(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    // cant do it this way since its expecting that it might be a number. need to check the type like above to make sure
    // id.toUpperCase();
}
var array = [1, 2, "3"]; // array can contain both numbers and strings
var array2 = ["1", "2", "3"]; // the array can only be made up of strings or numbers, but cant contain both
var seatAllotment; // variable can only be these three values
seatAllotment = 'aisle';
// cant assaign
// seatAllotment = "crew"
