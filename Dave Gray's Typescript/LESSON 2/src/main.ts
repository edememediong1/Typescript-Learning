let myName: string = "Emediong"
let meaningOfLife: number;
let isLoading: boolean;
let year: any;  //any type
let album: string | number //union type

myName = "John"
meaningOfLife = 42
isLoading = true
year = 1984
album = 'Disco'

const sum = (a: number, b: string) => {
    return a + b
}

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g