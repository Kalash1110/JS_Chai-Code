//------------ OBJECT LITERAL-----------------
let x=Symbol("mykey")
const user={
    name:"Kalash",
    age:18,
    location:"NITK",
    isLogged:false,
    "full name":"Kalash Jha",
    [x]:"myval"  //syntax of declaration for symbols

}

//YOu can access values using both methods
console.log(user.age);
console.log(user["age"]);

//You can't acccess full name using dot operator
console.log(user["full name"]);

console.log(user[x]); //syntax to access symbols
console.log(typeof x); 