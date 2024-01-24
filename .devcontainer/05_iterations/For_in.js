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

