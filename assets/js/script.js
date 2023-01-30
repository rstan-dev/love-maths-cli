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
                alert(`You clicked ${gameType}`);
            }
         });

    }
});


/** 
 * This is a doc string, and goes above a function to explain what it does... it appears wherever the function is called later in the code for easy mainteance and explanation.  
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed 
 */

function runGame() {

    // Creates two random numbers between 1 and 25 //
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

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

---End of Part One */

/*  Random number between 1 and 25
    Math.floor(Math.random() * 25) +1; 

*/