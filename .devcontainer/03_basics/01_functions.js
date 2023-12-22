function sayMyName(){
    console.log("My name is Kalash");
}

sayMyName()


//Default values of num1 and num2 are 0
function addTwoNumbers(num1=0,num2=0){
   return num1+num2
}

let added=addTwoNumbers(2,3)
console.log(added);

let default_val=addTwoNumbers() 
//default values used as not argument passed
console.log(default_val);


//----------------- REST OPERATOR -----------

//Used to pass multiple values in functions
let ret=function(...num){
    return num
}

console.log(ret(200,300,400));

let ret2=function(val1,val2,...num){
    return num
}

// 200,300 goes in val1 and val2 respectively and rest values go into num
console.log(ret2(20,300,400,500,600));


//Handling objects in functions

const user={
    name:"Kalash",
    age:23
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and its age is ${anyObject.age}`);
}

handleObject(user)

//Directly passing the object

handleObject({
    name:"Yashi",
    age:18
})


//Passing arrays
const array=[2,3,4,5]

function handleArray(getArray){
    return getArray[1]
}

console.log("The array first index is ",handleArray(array));

// Directly passing arrays
console.log(handleArray([200,300,800]));