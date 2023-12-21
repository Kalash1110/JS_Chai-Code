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


user.isLogged=true //value change or override

//Even after changing values after freeze it won't be reflected in the object (throws no error)
// Object.freeze(user) 

user.isLogged=false; //no chnage as object is already freezed
console.log(user.isLogged); //gives true

//Adding function to the object 
user.greet=function(){
    console.log(`Welcome!!,${this.name}`);
    //using this to get the object's variable
}



//Using that function
console.log(user.greet());