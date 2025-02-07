let stringArr = ['one', 'hey', "Eme"]

let guitars = ["Strat", "Les Paul", 5150]

let mixedData = ['EVH', 1984, true]

//Typescript automatically infers the types so
stringArr[0] = "two" 
stringArr.push("hey")

guitars[0] = 1984
guitars.unshift('Jim')

let test = [] //When you create an empty area, it sets to an any type
let bands: string[] = [] //Annotating an empty list to type string
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

console.log(typeof myObj) //checking the typeof

myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Dave",
    prop2: true
}

exampleObj.prop2 = false //prop2 will only accept a boolean type because it has been lockedin as boolean type

//ANNOTATING THE TYPE OF A STRING

type Guitarist = {
    name: string,
    active?: boolean, //The question mark makes the active property optional (that means it is not strictly boolean or compulsory to be present)
    albums: (string | number)[]
}

//OR

interface Drumer { //Interface can be used when writing methods in a class
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984,5150,'0U812']
}

let jp: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ['I', "II", "IV"]
}

let u2: Drumer = {
    name: "Unity",
    active: false,
    albums: ["WOWU", "U2"]
}

//evh = jp

//Example of usecase:

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp))

const greetDrumer = (drumer: Drumer) => {
    // Using narrowing
    if (drumer.name){
        return `Hello ${drumer.name.toUpperCase()}`
    }
    return 'Hello!'
    //OR
    // return `Hello ${drumer.name?.toUpperCase()}!` //We need to add ? to the name property or it will not work.
}
console.log(greetDrumer(u2))


//ENUMS
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime"

enum Grade {
    U = 1, //enum U = 0 defaultly
    D,
    C,
    B,
    A,
}