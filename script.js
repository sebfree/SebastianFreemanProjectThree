 // how to organize code 


//  •	The app will ask the user 3 questions 
// •	The app will save the user’s answers
// •	The app will use stored user answers to determine the user’s wrestler name 
// •	The app will display the user’s fictitious wrestler name 
// •	1 array, 3 names
// •	Tabulate score based on user answers (e.g. user gets 2 points for true answer, and so on)

        // set up all listeners here

        const myApp = {
            question: 0,
            score: 0
        };
        myApp.wrestlerNames = ["The Jabrone", "Holay Molay", "Masked Kitten"];
        

        // listen for a form submit event
            $(`form`).on(`submit`, function(event){
                // prevents form from refreshing
                event.preventDefault();
                //  set variable that checks which input user selected
                let value = $(`input:checked`).val();
                // set user score to a number (it defaults to a string)
                myApp.score = myApp.score + Number(value);
                // increment question e.g. skips to next question
                myApp.question++;

                // inject question + answers to screen
                // updateQuestion();
            });

            const updateQuestion = function () {
                $(`#question`).text(questions[0]);
            }

            // updateQuestion();

        const questions = [
            { 
                question: "Are you a hardcore wrestling champion???",
                answer1: "Hell yeah!",
                answer2: "Uh, no man. Stop yelling."
             },
             
            { 
                question: "Are you a hardcore wrestling champion???",
                answer1: "Hell yeah!",
                answer2: "Uh, no man. Stop yelling."
             },
             
            { 
                question: "Are you a hardcore wrestling champion???",
                answer1: "Hell yeah!",
                answer2: "Uh, no man. Stop yelling."
             }
        ];

        // myApp.assignName = function () {
        //     return myApp.wrestlerNames[totalScore % 3]
        // //     switch (totalScore) {
        //         case 0:
        //             jkdhfiewf
        //             return myApp.wrestlerNames[0]
        //             break;
        //         case totalScore < 4:
        //             return myApp.wrestlerNames[1]
        //             // break;
        //         case 2:
        //             return myApp.wrestlerNames[2]
        //             // break;
        //   }
        //     if (totalScore === 3) {
        //         console.log(myApp.wrestlerNames[0]);
        //     } else if (totalScore === 4) {
        //         return myApp.wrestlerNames[1];
        //     } else if (totalScore === 5) {
        //         return myApp.wrestlerNames[2];
        //     } else {
        //         return myApp.wrestlerNames[3];
        //     } 
            
        // }

        myApp.init = function(){
            // myApp.formSubmit();
            // myApp.assignName();
            // myApp.totalScore();
        }

// document ready - load all jquery content on page
        $(function(){
            // myApp.init();


        });
    

