

const options = document.querySelectorAll(".rps-game"); 

console.log(options) 

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

