"use strict"; // treat all js code as newer version

// alert(3+3) using this in browser gives an alert sign with answer 6

let name="Kalash"
let age=23
let loggedIn=false
 console.log(typeof "skjhf");
 console.log(typeof null) // object type
 console.log(typeof undefined); //undefined type


                //CONVERSIONS
 let score="33abc"
 //if score was undefined you get NaN in getNumber
 //if score was true you get 1 in getNumber
 //if score was null you get 0 in getNumber
 //if score was 33 you get 33 in getNumber
 console.log(typeof score);
 let getNumber=Number(score)
 console.log(typeof getNumber)
 console.log(getNumber)

 let IsLoggedIn=1;
let getBoolean=Boolean(IsLoggedIn)
console.log(getBoolean);

//If IsLoggedIn ="" ,gives false
//If IsLoggedIn ="abc" ,gives true

            //OPERATIONS

let a=2**2 //Power
console.log(a);

console.log(2/3); //Not zero as output

let str1="Kalash"
let str2=" Jha"
let str3=str1+str2 //String concatenation
console.log(str3);

console.log(1+2+"2"); //Number comes first hence addition then atlast string
console.log("1"+2+2); //Starts from string,hence as string
console.log(+true); //gives 1
console.log(+""); //gives 0

let num1,num2,num3
num1=num2=num3=4  //All get values as 4
console.log(num1);
console.log(num2);
console.log(num3);

                //COMPARISONS

console.log("2">1); //true
console.log(null==0); //false null is not converted to number
console.log(null>0); //false
console.log(null>=0); //true,null is converted to number

console.log("2"==2); //checks only values by conversion
console.log("2"===2) //strict check,checks data type as well
