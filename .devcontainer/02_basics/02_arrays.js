let arr1=[1,2,3,4]
let arr2=[5,6,7,8]

// arr1.push(arr2); //arr2 gest pushed as an element at index 4
// console.log(arr1);

//To access the values opf arr2
// console.log(arr1[4][2]); //you get to 2nd index of arr2

// let arr_merged=arr1.concat(arr2) //concat returns a new merged array while push doesn't

// console.log(arr_merged); //this merges two arrays and creates a new array

                    //SPREAD OPERATOR

let spread_arr=[...arr1,...arr2]
//Using three dots arr1 array's values get spread like normal values,similary for arr2 and they get added into new array of spread_arr
console.log(spread_arr);


let use_flat=[1,2,3,[4,5],6,[7,[8,9]]]

let all_values_in_one=use_flat.flat(Infinity)
//Gets all values in one array,you can give depth i.e. levels
//upon which you want to go but infinity handles all levels
console.log(all_values_in_one);


let str="Kalash"
console.log(Array.isArray(str)); //tells whetehr str is array or not

console.log(Array.from(str)); //It converts str to an array

let abc={name:"kalash"}
console.log(Array.from(abc)); //Gives an empty array beacuse it does not know whether you have to make array from key or values pair from the object,hence you have to specify whether keys as array or values as array



let score1=10;
let score2=20;
let score3=30;

//These both ways create an array from variables or other elements
let arr_check=new Array(score1,score2,score3)

console.log(Array.of(score1,score2,score3));
console.log(arr_check);
