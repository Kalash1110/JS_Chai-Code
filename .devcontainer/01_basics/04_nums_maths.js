//++++++++++++++++++++++ NUMBERS ++++++++++++

const score=400

const balance=new Number(100) //number object
console.log(balance) //logged as an object,go to console to see prototypes and functions
console.log(score);

let useNumber=balance.toString(); //Changes number to string
console.log(useNumber);
console.log(useNumber.length);
console.log(balance.toFixed(2)); //to print till 2 decimals i.e. why parameter=2

const otherNum=23.9907
console.log(otherNum.toPrecision(3)); //givs precision,kind of round off till parameter values 

//To get commas in zeroes for readibility
const hundred=10000000
console.log(hundred.toLocaleString()); //By US standards
console.log(hundred.toLocaleString('en-IN'));//by indian standards


let max=Number.MAX_VALUE //max value in js
let min=Number.MIN_VALUE //min value in js 

//-------------------- MATHS -------------

console.log(Math); //You can get functions if you do in console
console.log(Math.abs(-10))
console.log(Math.round(4.6));
console.log(Math.floor(4.8));
console.log(Math.ceil(2.3));
console.log(Math.min(2,3,43,45)); //gives min value,similarly use max

console.log(Math.random()); //gives random values between 0 and 1

console.log((Math.random()*10)+1)  //what if random gives 0,hence to be safe add 1 to get some values

const min_v=10;
const max_v=20;
//Get random values between min and max
let random=Math.floor((Math.random()*(max-min+1))+min)



