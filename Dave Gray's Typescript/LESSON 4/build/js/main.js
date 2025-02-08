"use strict";
// interface PostId = stringOrNumber //interface cannot be used for variable type annotation but rather for objects
//LITERAL TYPES
var myName; // Strictly setting the Name to Emediong
// myName = "David" // will not work because the name has been set to Emediong
var userName; //multiple literal types
userName = "Amy";
//FUNCTIONS
var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
var substract = function (c, d) {
    return c - d;
};
// You can also use the interface like below: But it mainly for classes;
// interface mathFunction {
//     (a: number, b:number): number
// }
var multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 2));
