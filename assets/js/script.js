// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
         });

    }
    runGame("addition");
});


/** 
 * This is a doc string, and goes above a function to explain what it does... it appears wherever the function is called later in the code for easy mainteance and explanation.  
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed 
 */

function runGame(gameType) {

    // Creates two random numbers between 1 and 25 //
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }

}

function checkAnswer() {

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM and returns the correct answer
 */

function calculateCorrectAnswer() {
      //wats happening:  parseInt ensures a number is being passed from the operand1 string.  The if statement returns an array containing (the answer of operand1 + operand 2) and the game type we want to run next (? not following this bit)
    
      let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMutiplyQuestion() {

}

function displayDivideQuestion() {

}






// ------------------------------------------------------------------- /

/* code development:
--- Part One - checking that the event listeners are working using an alert()

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
         });

    }
});  

---End of Part One ------------------------------------------ 

---Part Two  ------------------------------------------------ 
add random number generator (created in console)
Build out gameType and runGame(gameType) function

    Random number between 1 and 25
    Math.floor(Math.random() * 25) +1; 

    document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
         });

    }
    runGame("addition");
});

function runGame(gameType) {

    // Creates two random numbers between 1 and 25 //
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }

}


Develop Addition question fucntion---------------------

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

--- End of Part Two ---------------------------------

--- Part Three-----------------------------------
Develop calculateCorrectAnswer() function

function calculateCorrectAnswer() {
      //wats happening:  parseInt ensures a number is being passed from the operand1 string.  The if statement returns an array containing (the answer of operand1 + operand 2) and the game type we want to run next (? not following this bit)
    
      let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}







*/