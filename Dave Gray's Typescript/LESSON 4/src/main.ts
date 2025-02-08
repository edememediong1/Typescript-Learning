interface Guitarist { //Interface can be used when writing methods in a class
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

//interface is the same thing as type aliases

//Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type artiste = { //Interface can be used when writing methods in a class
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber 

// interface PostId = stringOrNumber //interface cannot be used for variable type annotation but rather for objects


//LITERAL TYPES
let myName : "Emediong" // Strictly setting the Name to Emediong

// myName = "David" // will not work because the name has been set to Emediong

let userName: "Dave" | "John" | "Amy" //multiple literal types
userName = "Amy"

//FUNCTIONS
const add = (a: number, b:number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!")
logMsg(add(2, 3))

