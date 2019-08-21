 // how to organize code 


//  •	The app will ask the user 3 questions 
// •	The app will save the user’s answers
// •	The app will use stored user answers to determine the user’s wrestler name 
// •	The app will display the user’s fictitious wrestler name 
// •	1 array, 3 names
// •	Tabulate score based on user answers (e.g. user gets 2 points for true answer, and so on)

        // set up all listeners here

        const myApp = {};
        myApp.wrestlerNames = ["The Jabrone", "Holay Molay", "Masked Kitten", "Big Baby"];
        

        // listen for a form submit event
	    myApp.formSubmit = function () {
            $(`form`).on(`submit`, function(event){
        // prevent default form submission
		    event.preventDefault();
            });
        }


        // store user answers to variables
        let userTrueAnswer = $(`input[name="true"]:checked`).val();
        let userFalseAnswer = $(`input[name="false"]:checked`).val();
        
        userTrueAnswer === 2;
        userFalseAnswer === 1;

        const totalScore = userTrueAnswer + userFalseAnswer;

        myApp.assignName = function () {
            if (totalScore === 3) {
                console.log(myApp.wrestlerNames[0]);
            } else if (totalScore === 4) {
                return myApp.wrestlerNames[1];
            } else if (totalScore === 5) {
                return myApp.wrestlerNames[2];
            } else {
                return myApp.wrestlerNames[3];
            } 
            
        }

        myApp.init = function(){
            myApp.formSubmit();
            myApp.assignName();
            // myApp.totalScore();
        }

// document ready - load all jquery content on page
        $(function(){
            myApp.init();


        });
    

