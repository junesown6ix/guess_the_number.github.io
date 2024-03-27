
"use strict";

//create event listener for click event of button
document.getElementById("check").addEventListener("click", checkGuess);
document.getElementById("start").addEventListener("click", newGame);



//declare variables 
let pickedNumber = 0;

const maxTries = 10;
let count = 0;
let gameover = false;

//call function to start game 
newGame();

//create function 
function checkGuess() {
    // alert("this works, right?");
    let message = "";

    //get the user input from the textbox
    let userInput = parseInt(document.getElementById("guess").value);
    console.log(`userInput is ${userInput}`);

   

    //a condition for userInput to always be a number 
    // if (isNaN(userInput)) {
    //      message = "Hello world!";
    //     // console.log("Please ENTER a valid number");
    // }

    // if (userInput.trim() === "") {
    //     message = "Please ENTER a guess.";
    //     document.getElementById("display-msg").textContent = message;
    //     return;
    // }

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        message = "Invalid guess. Please ENTER a number between 1 and 100.";
        document.getElementById("display-msg").textContent = message;
        return;
    }

    //compare guess to pickedNumber 
    if(userInput == pickedNumber) {
        message = "Correct!";
        //signal that i won
        gameover = true;
        //re-enable new game button
        document.getElementById("start").disabled = false;
        

    }else if(userInput < pickedNumber) {
        message = "Too low";
    }else {
        message = "Too high";
    }

    //increment counter
    count++;
    //check if i am out of tries
    // if(count == maxTries && gameover == false) {
    //     message = `Uh oh, out of turns. The number was ${pickedNumber}.`;
    //     document.getElementById("start").disabled = false;
        
    // }

    if (gameover || count === 10) {
        document.getElementById("check").disabled = true;
        if (count === 10 && !gameover) {
            message = `Out of turns! The number was ${pickedNumber}.`;
        }
    }

    //display message of 'correct' or 'incorrect input'
    document.getElementById("display-msg").textContent = message;
}


function newGame() {
//     document.getElementById("start").disabled = true;
//     //pick a number
//     //generate a random number btwn 1 and 100
// pickedNumber = 1 + Math.floor(Math.random() * 100);
// console.log(`PickedNumber is ${pickedNumber}`);

pickedNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Picked Number: ${pickedNumber}`);
count = 0;
let gameover = false;
document.getElementById("guess").value = "";
document.getElementById("check").disabled = false;
document.getElementById("display-msg").textContent = "";

// //reset variables
// count = 0;
// let gameover = false;

// Clear input field on New Game click
document.getElementById("guess").value = "";

}

