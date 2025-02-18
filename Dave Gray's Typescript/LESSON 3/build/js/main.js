"use strict";
var stringArr = ['one', 'hey', "Eme"];
var guitars = ["Strat", "Les Paul", 5150];
var mixedData = ['EVH', 1984, true];
//Typescript automatically infers the types so
stringArr[0] = "two";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift('Jim');
var test = []; //When you create an empty area, it sets to an any type
var bands = []; //Annotating an empty list to type string
bands.push('Van Halen');
/*
Here, the order of the type or the length of the array does not matter.
However, to create a stricter and lockin a type at a position, use a tuple.
*/
//Tuple
var myTuple = ["Dave", 42, true];
var mixed = ["John", 1, false]; //creating a list with similar features as the tuple
// myTuple = mixed // will not work because the tuple doesn't accept new features
mixed = myTuple; //will work because mixed is not a tuple, hence not strict
// myTuple[1] = "hey" // Will not work
myTuple[1] = 42;
//OBJECTS
var myObj;
myObj = [];
console.log(typeof myObj); //checking the typeof
myObj = bands;
myObj = {};
var exampleObj = {
    prop1: "Dave",
    prop2: true
};
exampleObj.prop2 = false; //prop2 will only accept a boolean type because it has been lockedin as boolean type
var evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, '0U812']
};
var jp = {
    name: "Jimmy",
    active: true,
    albums: ['I', "II", "IV"]
};
var u2 = {
    name: "Unity",
    active: false,
    albums: ["WOWU", "U2"]
};
//evh = jp
//Example of usecase:
var greetGuitarist = function (guitarist) {
    return "Hello ".concat(guitarist.name, "!");
};
console.log(greetGuitarist(jp));
var greetDrumer = function (drumer) {
    // Using narrowing
    if (drumer.name) {
        return "Hello ".concat(drumer.name.toUpperCase());
    }
    return 'Hello!';
    //OR
    // return `Hello ${drumer.name?.toUpperCase()}!` //We need to add ? to the name property or it will not work.
};
console.log(greetDrumer(u2));
//ENUMS
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
