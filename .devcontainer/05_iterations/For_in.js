//For In
const games={
    game1:"Cricket",
    game2:"Badminton",
    game3:"KhoKho"
}

for(const key in games){
    console.log(key); //getting keys
    console.log(games[key]); //getting values using keys
}


//USing For-IN in arrays
const prog=["JS",2,3,4]
for(const variable in prog){
    //console.log(variable);  //giving keys i.e. index value
    console.log(prog[variable]);  //getting values of array
}

const map=new Map()
map.set("IN","India")
map.set("US","United States")
map.set("PAK","Pakistan")
map.set("IN","Bharat") 

for(const key in map){
    console.log(key);  //Nothing is getting printed beacuse
    //maps are not iterable
}


