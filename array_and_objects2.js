// sum all numbers in an array

const sumArray = (numbersArray)=>{
    let total = 0;

    for (const number of numbersArray) {
        total = total + number;
    }

    return {total};
}

let n = [4,5,6,10];
console.log(sumArray(n))



//find the biggest number
const max = (numbers) => {
    //let result = 0; // this will not work when having only negative numbers
    let result = numbers[0] // it takes the first number in the array to compare

    for (const number of numbers){
        if (number > result) {
            result = number
        } 
    }
    return {result};
}

let numbers = [-25, -40, -6, -100, -21]
console.log(max(numbers))


// counts how many of each character there is in a string
const letterFrequency = (phrase) => {
    let freq = {'b':1,}

    for (const letter of phrase){
        if (letter in freq){
            freq[letter] ++; //freq[letter] += 1 or //freq[letter]= freq[letter]+1

        } else{
            freq[letter] = 1
        }
    }
    return freq;
}

console.log(letterFrequency('how many in here'));


// counts how many of each word there is in a string
const wordFrequency = (phrase) => {
    // let frequency = {}
    
    // for (const word of words){
    //     if (word in frequency){
    //         frequency[word]++
    //     }else {
    //         frequency[word] = 1
    //     }
    // }

    let words = phrase.split(' ')

    // return frequency
    return letterFrequency(words)
}

console.log(wordFrequency('lol what lol yo yo yo'))