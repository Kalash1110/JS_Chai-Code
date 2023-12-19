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


let first=Symbol('123'); //Even values are same but symbol gives uniquenesss
let sec=Symbol("123");

console.log(first===sec); //gives false

            //PRIMITIVE DATA TYPES

let arr=["Kalash","Jha",2]; //object type
let obj={
    name:"Kalash",
    title:"Jha"             //object type
}


let sum=function add() {
    return 2+3;             //function object type
}
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof sum);

let strold="Kalashjha"
let strnew=str1;
strnew="New string"
console.log(strold); //No change in strold as call by value since string is primitive
console.log(strnew);  

let user={
    email:"Kalash@gmail",
    id:2
}

let new_user=user
new_user.id=5   //changes the id of user also as call by reference since object is non primitive
console.log(user.id);
console.log(new_user.id);

