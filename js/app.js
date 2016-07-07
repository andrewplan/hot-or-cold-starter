
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    newGame() {} //do everything necessary to start a new game without refreshing/reloading page.  Clear: input box, ul#guesslist, h2#feedback
    //when new game starts, generate a secret number between 1 and 100 that user will guess
    //function to give user feedback on each guess -- if it was too low/too high/just right.  Use absolute values for now.  Have feedback appear in h2#feedback.
    //function (counter) that tracks how many guesses have been made and display in span#count
    //function that adds each guessed number as <li> to ul#guesslist on clicking "Guess"
    //function that ensures that user supplies numeric input between 1 and 100 (refer back to FizzBuzz refactor)
    //on +NEW GAME button, invoke newGame()
});


