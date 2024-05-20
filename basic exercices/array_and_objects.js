//run 'node file-name.js' in the terminal

// how many letters there is in a string (1 by 1)
const letterCounter = () => {
    const phrase = 'hey, this is kinda fun'
    for (const index in phrase) {                    //IN (indiex)
        console.log(Number(index)+1)
    }
}

letterCounter()      //no need to console.log, it is already inside the function



//prints the letters that make the string
const letterPrinter = () => {
    const phrase = 'hey, this is kinda fun'
    for (const letter of phrase) {                    // OF (value)
        console.log(letter)
    }
}
console.log(letterPrinter())    // if you console.log it, it will log 'undefined' at the end because it doesnt return anything



//counts how many letters there is in a string
const howManyLetters = (phrase) => {
    let result = 0;
    for (const index in phrase) {    
        result = Number(index) + 1
    }
    return { result }
}

const phrase = 'this is another way to count the letters'
console.log(howManyLetters(phrase))         // console.log prints the return - result as an object 
console.log(howManyLetters('hey'))  


// ^ this obiv can be done with a simple 'phrase.lenght'
console.log('easy: ' + phrase.length)



// const your_phrase = prompt('write your phrase') - only works if run in a browser

//to run on terminal Import the 'readline' module, used to get user input in the terminal.
const readline = require('readline');

function prompt(question) {
  // Create a readline interface for reading and writing data in the terminal.
  const rl = readline.createInterface({
    input: process.stdin, // Set the input to be the terminal
    output: process.stdout // Set the output to be the terminal
  });

  // Return a Promise, which will be resolved when the user provides an answer.
  return new Promise((resolve) => {
    // Show the question to the user and wait for a response.
    rl.question(question, (answer) => {
      // Close the readline interface after the user's response.
      rl.close();
      // Resolve the Promise with the user's answer.
      resolve(answer);
    });
  });
}

// The main async function that calls the 'prompt' and displays the response.
async function howManyLettersPrompt(question) {
  const your_phrase = await prompt(question);
  console.log('number of letters: ', howManyLetters(your_phrase));
}

howManyLettersPrompt('write your phrase: ');
