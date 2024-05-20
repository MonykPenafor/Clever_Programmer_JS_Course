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



//FILTER
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
// playground.innerHTML = `<h1>${names}</h1>`; //this only works when running the html



//REDUCE
//reduce takes in a function as an argument
//it loops and gives you back the accumulator

console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0)) //sum the networths, prev = 0 at the start


// function sum(a, b){
//   return a + b;
// }   

// IS THE SAME AS:
const sum = (a, b) => a+b;


const nums = [1,2,3,4];
const resultReduce = nums.reduce((prev, curr) => prev * curr); //24
console.log(resultReduce) 

const reduceTest = nums.reduce(sum); //10
console.log(reduceTest) 
