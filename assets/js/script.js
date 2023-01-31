// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
         });
    }
    
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }

    })
    
    runGame("addition");
});


/** 
 * This is a doc string, and goes above a function to explain what it does... it appears wherever the function is called later in the code for easy mainteance and explanation.  
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed 
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25 //
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);

    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);

    } else if (gameType === "division") {
        displayDivideQuestion(num1, num2);

    } else   
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    } 

/**
 *  Checks the answer against the first element in the
 * returned calculatedCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You got it right!");
        incrementScore();
    } else {
        alert(`You got it wrong, you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
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
    
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];

    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];

    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    
    }  else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}

/**
 * Gets the current score from the DOm and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOm and increments it by 1
 */

function incrementWrongAnswer() {
    let incorrectScore = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++incorrectScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 < operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";   
}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 * operand2;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
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

--- End of Part Three ---------------------------------

--- Part Four  ---------------------------------

* create this code in dev tools console to understand how
* to check if answer is correct (true or false) 

let userAnswer = 23;
undefined
let calculatedAnswer = [21, "addition"];
undefined
let isCorrect = userAnswer === calculatedAnswer[0];
undefined
isCorrect
false

* use this code to create the checkAnswer() function. 
* Whats happening?  we are getting the answer from the dom ("answer-box"), we are getting the answer from calculateCorrectAnswer(), we are comparing the two (remember it returns an array so its index [0]).  if its correct there is a winn alert, otherwise (else) the alert says it is wrong, and gives the correct calculatedAnswer... 

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You got it right!")
    } else {
        alert(`You got it wrong, you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);
}

--- End of Part Four  ---------------------------------


--- Part Five  ---------------------------------

Incerement score functions for correct and incorrect answers.
Then add these function calls into the checkAnswer() function 

// Gets the current score from the DOm and increments it by 1
 
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}


 // Gets the current tally of incorrect answers from the DOm and increments it by 1
 

function incrementWrongAnswer() {
    let incorrectScore = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++incorrectScore;

}


--- and update this function with the new increment functions

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You got it right!");
        incrementScore();
    } else {
        alert(`You got it wrong, you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

--- End of Part Five  ---------------------------------

--- Part six  ---------------------------------
add in multply fucntionality
3 things are needed
1. update runGame()
2. add displayMultiplyQuestion
3. update calculateCorrectAnswer function


===updated else if statement in runGame() code:

function runGame(gameType) {

    // Creates two random numbers between 1 and 25 //
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
        
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else   
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }


=== created multiply question
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}


===updated else if statement in calulcateCorrectAnswer()

function calculateCorrectAnswer() {
         
      let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];

    }  else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}

--- End of Part six  ---------------------------------

--- Part Seven  ---------------------------------
add subtraction functionality - but making an adjustment so its not a negative answer - use the ternary operator and statement

3 things are needs
1. update runGame()  - add in the else if for subtraction
2. add displaySubtractQuestion()
3. update calculateCorrectAnswer function - add in the else if for subtraction

=== displaySubtractQuestion function code with ternary statement:

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 < operand2 ? operand1 : operand2;
    document.getElementById('operator').textContent = "-";

 --- End of Part Seven  ---------------------------------
 
 --- Part Eight  ---------------------------------
* add favicon item to HTML
* clear out the answer-box before each game is run
* set the focus - put the cursor inside the answer-box when the game is run
* add eventListener so users can hit enter key instead of submit button

added to runGame() function
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

added eventListener to DOM ContentLoaded section
   document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

--- End of Part Eight  ---------------------------------

--- Part Nine  ---------------------------------
Add the division function - makiiung sure it returns a whole number
3 things are needs
1. update runGame()  - add in the else if for division
2. add displayDivideQuestion() - you can easily make sure the first operand is divisible by the second operand by multiplying your two random numbers and using the result as operand1. You can then use either of the random numbers as operand2 
3. update calculateCorrectAnswer function - add in the else if for division


added a copy of else if to runGame() and calculateCorrectAnswer()

code for displayDivideQuestion():

function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 * operand2;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}



*/