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

let substract = function (c: number, d:number):number {
    return c - d
}

//USING A TYPE ALIAS TO ANNOTATE THE PARAMETERS OF THE FUNCTION
type mathFunction = (a: number, b: number) => number

// You can also use the interface like below: But it mainly for classes;
// interface mathFunction {
//     (a: number, b:number): number
// }


let multiply: mathFunction = function(c,d) {
    return c * d
}

logMsg(multiply(3, 2))

//Optional Parameters
const addAll = (a: number, b: number, c?: number):number => {
    if (typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b 
}

// Default param value
const sumAll = (a: number = 10, b: number, c: number = 2): 
number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(undefined, 3))

// REST PARAMETERS
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4)) 