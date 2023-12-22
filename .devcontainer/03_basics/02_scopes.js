var k=900

let p=88
if(true){
    let a=30
    var b=40
    const c=70
    var k=80
    let p=67
    console.log("INNER P: ",p);
}


//  console.log(a); //not accesssible outside if block
console.log(b); //accesible outside if block
//  console.log(c); //not accesible outside if block
console.log(k); //you should get 900 generally but you get 80 as var is not limited to its block only,hence refrain from var


console.log(p); //still p's value is independent of if block




//------------- Functions inside functions ------------
function one(){
    const Username="Kalash"

    function two(){
        const website="youtube"
        console.log(Username); //username accessible inside two
    }
    // console.log(website);  //not accessible outside two

    two() //invoked after function one is invoked

}

one()





//---------- Function expression and hoisting ----------


//Throws error
// console.log(addTwo(5))  //using function before its definition and declarataion 


const addTwo=function(val){
    return val+2
}



//Does not throw error
console.log(addOne(90)) //using function before its definition and declarataion 


function addOne(num){
    return num+1
}


