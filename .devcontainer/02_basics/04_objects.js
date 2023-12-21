//Singleton object, not object literal
let tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="Kalash"


//Objects inside objects
let normalUser={
    id:"1235",
    full_name:{
        firstName:"Kalash",
        secName:"Jha"
    }
}


console.log(normalUser.full_name.firstName);

//Merge two objects
const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}

//Using spread operator
const obj3={...obj1,...obj2}
console.log(obj3);

//Using assign function
const obj4=Object.assign(obj1,obj2)
console.log(obj4);


// Handling array of objects
const users_data=[
    {
        name:"Kalash",
        email:"abc@yahhooo"

    },
    {
        name:"Yashi",
        email:"xyz@google"
    }
]

//Acccessing values in array of objects
console.log(users_data[1].email);


//Get keys of object in an array
let keyAsArrayOfnormalUser= Object.keys(normalUser)
console.log(keyAsArrayOfnormalUser);

//Get values of objects
console.log(Object.values(normalUser));

//Get entries of objects i.e. arrays for all entries,in one array you have pair of that key and value
console.log(Object.entries(normalUser));

//Checks whether that key is present in object or not
console.log(tinderUser.hasOwnProperty(id));