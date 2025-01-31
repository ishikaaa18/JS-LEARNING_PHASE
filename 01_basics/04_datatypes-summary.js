//PRIMITIVE DATA TYPE(CALL BY VALUE)

const score = 100
// console.table(typeof score)//number

const scoreValue = 100.3
// console.table(typeof scoreValue)//number

const myboolean=true
// console.table(typeof myboolean)//boolean

const  myNull=null
// console.log(typeof myNull)//object---------------special

const myUndefined=undefined
// console.table(typeof myUndefined)//undefined

const mySymbol=Symbol("123")
// console.log(typeof mySymbol)//symbol

const myBigInt=278638712479162487n

// console.table(typeof myBigInt)//bigint


//------------------------------------------------------------

//NON-PRIMITIVE DATA-TYPE(CALL BY REFERENCE)

let myArray=["ishika","rahul","raj"]
console.table(typeof myArray)//object----------------------special

let myObject={
    name:"ishika",
    age:22,
    rollNo:23
}
console.table(typeof myObject)//object

let myFunction=function(){
    console.log("Hello World!!!")
}
console.table(typeof myFunction)//function