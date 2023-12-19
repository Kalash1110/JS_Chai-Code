"use strict"

let name="Kalash" 
let repoCount=13

//console.log(name+" : "+repoCount);  Dont' use

//USe string interpolation
console.log(`The name is ${name} and the repocount is ${repoCount}`);

//Another way of declaring strings as objects

let str1=new String("Kalash"); //String as object
console.log(str1);  
console.log(typeof str1); //object type
console.log(typeof name); //normal string type

console.log(str1[0]); //Even though it is an object,but to access values you can use them,this means at 0th key we have value as K i.e. key value pair
//Inside console you can see them as key value pairs

