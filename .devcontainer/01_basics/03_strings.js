"use strict"

let name="Kalash" 
let repoCount=13

//console.log(name+" : "+repoCount);  Dont' use

//USe string interpolation
console.log(`The name is ${name} and the repocount is ${repoCount}`);

//Another way of declaring strings as objects

let str1=new String("Kalash-Jha"); //String as object
console.log(str1);  
console.log(typeof str1); //object type
console.log(typeof name); //normal string type


//ACESS VALUES

console.log(str1[0]); //Even though it is an object,but to access values you can use them,this means at 0th key we have value as K i.e. key value pair
//Inside console you can see them as key value pairs

//LENGTH
console.log(str1.length)
console.log(str1.toUpperCase()); //No change in original str1 value

console.log(str1.charAt(2)) //gives char value at 2nd index 
console.log(str1.indexOf('p')) //gives index of that character in string

let newstr=str1.substring(0,3)  // get values from 0 to 2
console.log(newstr); //nth index excluded

let anotherStr=str1.slice(0,-2) //can use negative values too
console.log(anotherStr);


let newstr1="       kalash    "  //srting with spaces
console.log(newstr1.trim()); //removes spaces

const url="https:kalash%20.com" //how to remove spaces or replace anything

console.log(url.replace("%20","k"));

console.log(url.includes("kalash")) //checks whether given thing is present in string or not

let fordash="Kalash-jha-begusarai"
console.log(fordash.split('-'));