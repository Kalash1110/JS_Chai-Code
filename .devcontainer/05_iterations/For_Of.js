// For of loop
const arr=[1,2,3,4,5]

//get direct values in num
for (const num of arr) {
    console.log(num);
}

const greeting="Hello World"

//Printing each letter 
for (const letter of greeting) {
    console.log(letter);
    
}

// -----------------------------------------------

//Maps : Key value pair and maintains orders unlike objects

const map=new Map()
map.set("IN","India")
map.set("US","United States")
map.set("PAK","Pakistan")
map.set("IN","Bharat") //Removes earlier value,has unique values 
console.log(map); //order is maintained in which you insert


for(const key of map){
    console.log(key);  //Prints both key value pair in array
}

//Doing array destructuring and getting individual values from map
for(const [key,value] of map){
    console.log(`Key :- ${key} and value :- ${value}`);
}


const obj={
    game1:"Cricket",
    game2:"Badminton"
}


//The same syntax does not works for objects
// for(const [key,val] of obj){
//     console.log(`Key ${key} :- Val ${val}`);
// }