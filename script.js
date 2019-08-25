// how to organize code 


//  •	The app will ask the user 3 questions 
// •	The app will save the user’s answers
// •	The app will use stored user answers to determine the user’s wrestler name 
// •	The app will display the user’s fictitious wrestler name 
// •	1 array, 3 names
// •	Tabulate score based on user answers (e.g. user gets 2 points for true answer, and so on)

// const myApp = {};
// myApp.wrestlerNames = ["The Jabrone", "Holay Molay", "Masked Kitten"];
// myApp.score = myApp.score + (radioValue) + (radioValue1) + (radioValue2);


// myApp.init = function () {
    // myApp.getWrestlerName();
    // myApp.assignName();
    // myApp.totalScore();
// }

// document ready - load all jquery content on page
$(function() {




});


// Listen to for submit

$(`form`).on(`submit`, function(event){
    event.preventDefault();

    // calculate user score

        const radioValue = $(`input[name="answer"]:checked`).val();
        const radioValue1 = $(`input[name="answer1"]:checked`).val();
        const radioValue2 = $(`input[name="answer2"]:checked`).val();
        const myScore = parseFloat(radioValue) + parseFloat(radioValue1) + parseFloat(radioValue2);

    // names array
    const wrestlerNames = ["your name is The Jabrone", "your name is Colonel Crunch", "your name is Masked Kitten", "your name is Todd Alpain", "Error: Answer the Questions!"];

    // name generator logic

    getWrestlerName = function (){
        if (myScore === 6) {
            return (wrestlerNames[0]);
        } else if (myScore === 5) {
            return wrestlerNames[1];
        } else if (myScore === 4){
            return wrestlerNames[2];
        } else if (myScore === 3){
            return wrestlerNames[3];
        }  else {
            return wrestlerNames[4];
        }

    }


$(`.results`).html(`<h2 class="YourName">${getWrestlerName()}</h2>`)


});


// remove checked radio buttons upon refresh

$('input[type="radio"]').prop('checked', false); 

