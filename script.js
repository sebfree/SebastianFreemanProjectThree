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
// $(document).on('page:change', function(){
$(function() {

  

    // myApp.radioValues();
    // myApp.init();

    // $(`form`).on(`submit`, function(event){
    //     event.preventDefault();



    // $(`fieldset`).on(`submit`, function(event){
    //     event.preventDefault();
    
    // })

// const myApp = {};



// console.log(myScore);

    // console.log(getWrestlerName());


});


// Listen to for submit

$(`form`).on(`submit`, function(event){
    event.preventDefault();

// Calculate user score based on selection


        const radioValue = $(`input[name="answer"]:checked`).val();
        console.log(radioValue);
        const radioValue1 = $(`input[name="answer1"]:checked`).val();
        console.log(radioValue1);
        const radioValue2 = $(`input[name="answer2"]:checked`).val();
        console.log(radioValue2);
        const myScore = parseFloat(radioValue) + parseFloat(radioValue1) + parseFloat(radioValue2);
        console.log(myScore);


    // logic to determine name

    const wrestlerNames = ["The Jabrone", "Beast From Within", "Masked Kitten"];

    getWrestlerName = function (){
        if (myScore >= 5) {
            return (wrestlerNames[0]);
        } else if (myScore > 3) {
            return wrestlerNames[1];
        } else if (myScore <= 3){
            return wrestlerNames[2];
        } 

    }

    // inject answer to screen

    $(`.results`).html(`<h2 class="Your name is">Your name is ${getWrestlerName()}</h2>`)

    // inject error message to screen if no buttons selected


        error = function () {
            if ((`input[name="answer"]:checked`), false);  {
            $(`.results`).html(`<h2 class="error">Click the buttons, ya jabrone!</h2>`)
        };
   error();

};

// clear radio button upon refresh

$('input[type="radio"]').prop('checked', false); 



