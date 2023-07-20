"use strict";
const score = [];
function identityOne(value) {
    return value;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true); // makes the type as boolean automagically
identityThree({ brand: "", type: 0 }); // can pass in your own type like this
