/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)



// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let billTotal = Number(billTotalInput.value)

    // get the tip from user & convert it into a percentage (divide by 100)
    let tip = parseFloat(tipInput.value)/100

    // get the total tip amount
    let totalTip = billTotal * tip
  
    // calculate the total (tip amount + bill)
    let billPlusTip = billTotal + totalTip
  
    // calculate the per person total (total divided by number of people)
    let perPersonTotal = billPlusTip/numberOfPeople
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  


  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1
    console.log(numberOfPeople)
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill();
  
  }
  


  // ** Splits the bill between fewer people **
  const decreasePeople = () => {

    // if amount is 1 or less simply return
    if(numberOfPeople === 1){
        return numberOfPeople
    }
    else{
         // decrement the amount of people
        numberOfPeople  -= 1 

        // update the DOM with the new number of people
        numberOfPeopleDiv.innerText = numberOfPeople
    
        // calculate the bill based on the new number of people
        return calculateBill();
    }
    
  }