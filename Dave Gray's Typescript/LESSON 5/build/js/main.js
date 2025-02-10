"use strict";
//convert to more or less specific
var a = "hello";
var b = a; //less Specific
var c = a; //more specific
var d = "world";
var e = "Howdy"; //alternative for an alias
//the angle brackets are less used in react files (tsx)
var addOrConcat = function (a, b, c) {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
var myVal = addOrConcat(2, 2, "concat");
// Be careful TS sees no problem - but a string is returned
var nextVal = addOrConcat(2, 2, "concat");
//DOUBLE ASSERTION
//10 as string //Typescript cannot 
var doubleCast = 10;
console.log(typeof doubleCast);
//The DOM
var img = document.querySelector('img'); //using the non-null assertion
var myImg = document.getElementById("#img");
var nextImg = document.getElementById("#img");
img.src;
myImg.src;
