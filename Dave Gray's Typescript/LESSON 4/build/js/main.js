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
//Optional Parameters
var addAll = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
var sumAll = function (a, b, c) {
    if (a === void 0) { a = 10; }
    if (c === void 0) { c = 2; }
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// REST PARAMETERS
var total = function (a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return a + nums.reduce(function (prev, curr) { return prev + curr; });
};
logMsg(total(1, 2, 3, 4));
//NEVER TYPE
var createError = function (errMsg) {
    throw new Error(errMsg);
};
//Also never type will be infered when we have an infinite loop in our code.
var infinite = function () {
    var i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; //A conditional break point will infer it to void
    }
};
var numberOrString = function (value) {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen");
};
