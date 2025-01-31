const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./cheeseWheels03.json"));
let cheeses = data.cheeseTypes;
let folks = data.cheeseFolks;
console.log(data);
let totalGroupCheeseLbs = 0;
let totalGroupCheeseValue = 0;

for(person of folks){
    console.log(person.name);
    let table = []
    let totalPersonsCheeseValue = 0;
    for(let i = 0; i < person.wheelSizes.length; i++){
        totalGroupCheeseLbs += person.wheelSizes[i]
        if(person.wheelSizes[i] > 0){
            let currentCheeseValue = 
                cheeses[i].costPerPound * person.wheelSizes[i]
            table.push({
                "Cheese Type": cheeses[i].type,
                "Cost Per lb": cheeses[i].costPerPound,
                "Amount in lbs": person.wheelSizes[i],
                "Cheese Value": currentCheeseValue,
            });
            totalPersonsCheeseValue += currentCheeseValue;
            totalGroupCheeseValue += currentCheeseValue
        }
    }
    console.table(table)
    console.log(`Total Value in Cheese $${totalPersonsCheeseValue.toFixed(2)}`)
    console.log()
}
console.log();
console.log("Group Totals: ");
console.log(`Total lbs of Cheese $${totalGroupCheeseLbs}`)
console.log(`Total Value $${totalGroupCheeseValue.toFixed(2)}`)