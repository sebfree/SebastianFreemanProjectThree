// how to organize code 


//  •	The app will ask the user 3 questions 
// •	The app will save the user’s answers
// •	The app will use stored user answers to determine the user’s wrestler name 
// •	The app will display the user’s fictitious wrestler name 
// •	1 array, 3 names
// •	Tabulate score based on user answers (e.g. user gets 2 points for true answer, and so on)

// const questions = [
//     {
//         question: "Are you a hardcore wrestling champion???",
//         answer1: "Hell yeah!",
//         answer2: "Uh, no man. Stop yelling."
//     },

//     {
//         question: "is it batman",
//         answer1: "Hell yeah!",
//         answer2: "Uh, no man. Stop yelling."
//     },

//     {
//         question: "wee oo weeeooooo",
//         answer1: "Hell yeah!",
//         answer2: "Uh, no man. Stop yelling."
//     }
// ];


const myApp = {
    question: 0,
    score: 0
};
myApp.wrestlerNames = ["The Jabrone", "Holay Molay", "Masked Kitten"];


// listen for a form submit event
$(`form`).on(`submit`, function (event) {
    // prevents form from refreshing
    event.preventDefault();
    //  set variable that checks which input user selected
    let value = $(`input:checked`).val();
    // const userTrue = $(`input[name="answer1"]:checked`).val();
	// const userFalse = $(`input[name="answer2"]:checked`).val();
    // set user score to a number (it defaults to a string)
    myApp.score = myApp.score + Number(value);
    console.log(value)
    // increment question e.g. skips to next question
    // myApp.question++;

    // inject question + answers to screen

    
});

// const updateQuestion = function () {
//     $(`#question`).text(questions[0]["question"]);
    // $(`#answer1`).text(questions[0]["answer1"]);
    // $(`#answer2`).text(questions[0]["answer2"]);

    // updateQuestion()


    const getWrestlerName = function () {
        if (myApp.score >= 5) {
            return (myApp.wrestlerNames[0]);
        } else if (myApp.score >= 3) {
            return myApp.wrestlerNames[1];
        } else {
            return myApp.wrestlerNames[2];
        } 
}

// getWrestlerName();

$(`.results`).html(`<h2 class="Your name is">${getWrestlerName()}</h2>`)

myApp.init = function () {
    // myApp.getWrestlerName();
    // myApp.assignName();
    // myApp.totalScore();
}

// document ready - load all jquery content on page
$(function () {
    // myApp.init();


});


