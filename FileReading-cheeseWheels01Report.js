const fs = require("fs");

let cheeseData = fs.readFileSync("./cheeseWheels01.json");
cheeseData = JSON.parse(cheeseData);
console.log(cheeseData);

console.log("We have the following cheese wheels")
//Demonstrate looping through cheese:
let cheeses = cheeseData.cheeseTypes;
for (cheese of cheeses){
    console.log(cheese);
}

console.log("We have the following wheel sizes:");
let sizes = cheeseData.wheelSizes;
for (size of sizes) {
  console.log(size);
}
