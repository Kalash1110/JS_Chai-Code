const myNums=[1,2,3]
const intial=3

//Using normal fncn
const myTotal=myNums.reduce(
     function (acc,currVal){
        //gets myNums values from array in currVal
        console.log(`acc: ${acc} and currval: ${currVal}`);
        return acc +currVal         
        //the returned value is stored in acc
        //puts initial value in acc in first loop
    },intial
)


//Using arrow function

const arrTotal=myNums.reduce(
    (acc,currVal)=> acc+currVal,8
)
console.log(myTotal);
console.log(arrTotal);


const shoppingCart=[
    {
        itemName:"Js",
        price:3000
    },
    {
        itemName:"Python",
        price:1000
    },
    {
        itemName:"Mob dev",
        price:3000
    },
    {
        itemName:"DSA",
        price:8999
    }
]

const total=shoppingCart.reduce(
    ((acc,item)=>{
        return acc+item.price
    }),0
)

console.log(total);