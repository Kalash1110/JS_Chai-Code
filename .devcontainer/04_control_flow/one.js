//If statements

if(2=="2"){
    console.log("Executed");
}

//Used to check value as well as datatype, for the opposite of this we have !== as another operator
if(2==="2"){
    console.log("Type check done");
}

if(2!=="2"){
    console.log("Type check failed");
}


const score=200

//By using comma you can write multiple statements in if without brackets but it is a wrong practice
if(score>150) console.log("test"),console.log("test2");


// Nullish Coleascing operator (??)
//Not ternary
//works on null and undefined

let val1
val1= 5 ?? 10

console.log(val1);



val2=null ?? 10  //either null is set or whaetever you get from function (eg. 10 here) is set
console.log(val2);

val3=undefined ?? 20 //gets 20 from fncn
console.log(val3);

val4=null ?? 10 ?? 15  //gets first value only
console.log(val4);


//Ternary 
const val7= 3>1? 2:7
console.log(val7);