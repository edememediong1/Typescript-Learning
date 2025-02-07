let stringArr = ['one', 'hey', "Eme"]

let guitars = ["Strat", "Les Paul", 5150]

let mixedData = ['EVH', 1984, true]

//Typescript automatically infers the types so
stringArr[0] = "two" 
stringArr.push("hey")

guitars[0] = 1984
guitars.unshift('Jim')

let test = [] //When you create an empty area, it sets to an any type
let bands: string[] = []
bands.push('Van Halen')

/*
Here, the order of the type or the length of the array does not matter.
However, to create a stricter and lockin a type at a position, use a tuple.
*/

//Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true]

let mixed = ["John" , 1 , false] //creating a list with similar features as the tuple

// myTuple = mixed // will not work because the tuple doesn't accept new features
mixed = myTuple //will work because mixed is not a tuple, hence not strict

// myTuple[1] = "hey" // Will not work
myTuple[1] = 42


//OBJECTS
let myObj: object
myObj = []

console.log(typeof myObj)