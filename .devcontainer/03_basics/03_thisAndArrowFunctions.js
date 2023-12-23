const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){

        //this used to refer object's current context
        console.log(`Username is ${this.username}`)
    }
}


user.welcomeMessage()
user.username="Kalash"
user.welcomeMessage()

//Inside node environment,it gives an empty object but inside window console enviroment on chrome,it gives window object 
console.log(this);



function chai(){
    let username="Kalash"
    //It prints some context, does not gives an empty object
    //console.log(this);

    console.log(this.username); //prints undefined unlike object where we get values
}
chai()



//---------- Arrow ----------
 //just remove function keyword and add and arrow after argument bracket

const ibibo= (name) =>{
    let age=18
    console.log(`Name is ${name} and age is ${age}`);
    console.log(this.username);
}

ibibo("Kalash")


const AddTwo=(num1,num2)=>{
    return num1+num2
}

console.log(AddTwo(3,4)); 