const myArray=[1,2,3,4,5,true,"Kalash"]
console.log(typeof myArray); //type is object 

const anotherWay=new Array(1,2,3)

anotherWay.push("Jha") //Add values in array

anotherWay.pop() //removes last value





anotherWay.unshift(10) //adds value in front but slow as it shifts the entire array

anotherWay.shift() //removes value from first  index


console.log(anotherWay.includes(3)); //checks whether that value is present in array or not

console.log(anotherWay.indexOf(3)); //gives index of values in array

const arrayString=anotherWay.join() //binds the array into one string
// console.log(arrayString);
// console.log(typeof arrayString); //type is string not object


//SLICE AND SPLICE IMPORTANT 

const arr=[1,2,3,4,5,6,7,8]
console.log("Start array og: ",arr);
const sl=arr.slice(2,5)
console.log("sliced array",sl);
console.log("After slice og array: ",arr);
//No change in original array, slice(i,n) moves from i to n-1 index


const spl=arr.splice(2,5)
console.log("spliced array",spl);
console.log("After splice og array",arr);

//Change in original array, spl(i,n) moves from th index to 
// i+nth index and all those elements in splice are not in original array now
