const fs = require("fs")

let data = JSON.parse(fs.readFileSync("./cheeseWheels02.json"));
/**
 * Same as 
 * let data = fs.readFileSync("./cheeseWheels02.json")
 * data = JSON.parse(data)
 */

console.log(data);
let cheeses = data.cheeseTypes
for (cheese of cheeses){
    console.log(cheese.type)
    let sizes = data.wheelSizes;
    let table = []
    for(size of sizes){
        table.push(
            {
                Pounds: size,
                "Cost of Wheel": cheese.costPerPound * size
            });
    }
    console.table(table);
}