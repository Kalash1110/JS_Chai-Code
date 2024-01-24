//Some values where without comparison we assume that the values are true
const userName="Kalash"

//Even though no comparison done for userName still it gives
//true,similarly if userName="" i.e. empty string,it will give
//false

if(userName){
    console.log("Name given");
}
else{
    console.log("Name not given");
}


//FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Rest all values are true or truthy values
//Eg. "0", 'false', " ", [], {}, function(){} 


//How to check whether object and array are empty or not, beacuse using them directly gives truthy values

const emptyArr=[]

// Wrong practice, Similar for objects also
// if(emptyArr){
//     console.log("Array is Empty");
// }

//Correct Method
if(emptyArr.length==0){
    console.log("Array is Empty");
}

const emptyObj={}

//Object.keys gives us an array of keys,hence use length property on that array
if(Object.keys(emptyObj).length){
    console.log("Not empty");
}
else{
    console.log("empty Object");
}


