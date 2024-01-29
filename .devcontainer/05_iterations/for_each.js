const coding=["JS","Ruby","Java","Python","CPP"]


//For-each takes a call back function
//You can write a simple function in it
coding.forEach(
    function (element){
        console.log(element);
    }
)


//Using arrow functions
coding.forEach(element => { console.log(element)
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