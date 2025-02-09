type One = string
type Two = string | number
type Three = "hello"

//convert to more or less specific
let a: One = "hello"
let b = a as Two //less Specific
let c = a as Three //more specific

let d = <One>"world"
let e = <string | number>"Howdy"  //alternative for an alias
//the angle brackets are less used in react files (tsx)

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b
    return "" + a + b
}

let myVal:string = addOrConcat(2,2,"concat") as string

// Be careful TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2,"concat") as number

//DOUBLE ASSERTION
//10 as string //Typescript cannot 
let doubleCast = (10 as unknown) as string
console.log(typeof doubleCast)

//The DOM
