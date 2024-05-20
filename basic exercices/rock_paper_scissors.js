// RPS.HTML

// let rock = document.getElementById('rock')
// let paper = document.getElementById('paper')
// let scissors = document.getElementById('scissors')

const options = document.querySelectorAll(".rps-game"); // the '.' mean its a class

console.log(options) // logs a node list with the 3 classes

// forEach :
// options.forEach(option => {     //for each op that is clicked
//     option.onclick = () => {

//         let choice = option.value   //takes the value (r,p,s)

//         console.log(choice)

//         let id = `${choice}Counter`     //creates the id to change the html tag

//         let counter = document.getElementById(id)       //finds the tag

//         if(choice === 'rock'){
//             counter.innerText = parseInt(counter.innerText) + 1
//         }
//         if(choice === 'paper'){
//             counter.innerText = parseInt(counter.innerText) + 1
//         }
//         else{
//             counter.innerText = parseInt(counter.innerText) + 1
//         }

//     }
// })
    




// EASY MODE BY CLEVER PROGRAMMER

const timesCliced = {"rock": 0, "paper": 0, "scissors": 0, }

options.forEach(option => {
    option.onclick = () => {
        timesCliced[option.value] += 1

        let id = `${option.value}Counter`     //creates the id to change the html tag

        let counter = document.getElementById(id)   

        counter.innerText = timesCliced[option.value]
    }
})


const clear = document.getElementById('clear')
clear.onclick = () => clearScores()


const clearScores = () => {

    options.forEach(option => {

        timesCliced[option.value] = 0

        let id = `${option.value}Counter`

        let counter = document.getElementById(id)   

        counter.innerText = '0'
    })
}

