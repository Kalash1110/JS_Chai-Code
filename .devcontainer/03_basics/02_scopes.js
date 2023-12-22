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


