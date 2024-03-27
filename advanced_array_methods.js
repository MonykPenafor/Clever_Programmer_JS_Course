// higher order functions
// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// reduce


// MAP
//map - loops and returns an array (inside you put what action will happen to the items)

[1,2,3,4].map(number => console.log(number)); // print the numbers separetely

let result = [1,2,3,4].map(number1 => number1 * 2);        // prints [2,4,6,8]
console.log(result);


//fuction with map
const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}

console.log(doubleMap([1, 2, 3]))   // prints [2,4,6]


// a filter function manually created
const filter = (numbers, greaterThan) => {
    let newArray = []
    for (const number of numbers){
        if (number > greaterThan){
            newArray.push(number)
        } 
    }
    return newArray
}

console.log(filter([3,5,2,8,1], 4));


// that function already exist - and works even better ofc
//loops and return the items that match the condition/s
const numbers = [1,2,3,4,5,6]
console.log(numbers.filter(num => num > 3));
console.log(numbers.filter(num => num <= 3));
console.log(numbers.filter(num => num < 3 && num > 1));
console.log(numbers.filter(num => num < 4 || num === 6));


//array of objects
const actors = [
  { name: 'johnny', netWorth: 200 },
  { name: 'amber', netWorth: 100000000 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]

// console.log(actors.filter(actor => actor.netWorth > 500 ))

let actorsFiltered = actors.filter(actor => actor.netWorth > 500)
console.log(actorsFiltered)

let names = actorsFiltered.map(actor => actor.name).join(', ') //join separeted by , the names of the objects


playground.innerHTML = `<h1>${names}</h1>`; //it will appear in the html tag with 'playground' id


console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))



//reduce 





