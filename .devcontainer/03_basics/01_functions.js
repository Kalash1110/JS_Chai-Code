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