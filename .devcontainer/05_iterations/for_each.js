const coding=["JS","Ruby","Java","Python","CPP"]


//For-each takes a call back function
//You can write a simple function in it
coding.forEach(
    function (element){
        console.log(element);
    }
)


//Using arrow functions
coding.forEach( (element) => { console.log(element)
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)  //giving function as input


//It has element as well as index as well as entire array
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})



//objects inside array
const myCoding=[
    {
        langName:"JS",
        langFile:"abc.js"
    },
    {
        langName:"Java",
        langFile:"pqr.java"
    }
]


myCoding.forEach(
    (item)=>{
        console.log(item.langName+" + "+item.langFile);
        
    }
)


// For-each loops return nothing even if you want to return 


const values=coding.forEach(
    (item)=>{
        return item
    }
)

console.log(values); //undefined is printed as nothing is returned


//Filter returns whatever you want based on condition 
const myNums=[1,2,3,4,5,6,7,8,9]

wrongNums= myNums.filter(
    (num )=> {num>4}  //returns nothing
    //recall that to get return from arrow function you have
    //to use normal parentheses intead of curly braces
)
newNums=myNums.filter(
    (num)=>(
        num>4  //normal parentheses used
    )

    //or you can use return keyword for curly braces
    // (num)=>{ return num>4}
)
console.log(wrongNums); //gets undefined
console.log(newNums); //gets all values

forEachNums=[]
myNums.forEach(
    (num)=>{
        if(num>4)
            forEachNums.push(num)
    }
)

console.log(forEachNums);
