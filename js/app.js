/*--- newGame() {} do everything necessary to start a new game without refreshing/reloading page.  Clear: input box, ul#guesslist, h2#feedback ---*/
var secretNumber;     
function newGame() { 
    $("#userGuess").val("");
    $("span#count").text("0");
    $("#guessList").empty();
    $("h2#feedback").text("Make your Guess!");
    /*--when new game starts, generate a secret number between 1 and 100 that user will guess--*/
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    secretNumber = getRandomIntInclusive(1, 100);
    //alert(secretNumber);
};

/*--- function (counter) that tracks how many guesses have been made and display in span#count ---*/
var count = 0;
function counter(){
    return count += 1;
}
    
    
/*--- function that adds each guessed number as <li> to ul#guesslist on clicking "Guess" ---*/
function addGuessToList(guessToAdd) {
    $("#guessList").append("<li>" + guessToAdd + "</li>");
}


/*--- function to give user feedback on each guess -- if it was too low/too high/just right.  Use absolute values for now.  Have feedback appear in h2#feedback. ---*/
var userGuess; 
function guessFeedback(secretNumberNow, userGuessNow) {
    var theDifference = Math.abs(secretNumberNow - userGuessNow);
    //alert(theDifference);
    if (theDifference >= 50) {
        $("h2#feedback").text("Ice cold!");
    }
    else if (theDifference > 30 && theDifference < 50) {
        $("h2#feedback").text("Coooooold.");
    }
    else if (theDifference > 20 && theDifference < 30) {
        $("h2#feedback").text("Warm...");
    }
    else if (theDifference > 10 && theDifference < 20) {
        $("h2#feedback").text("Hawt!");
    }
    else if (theDifference >= 1 && theDifference < 10) {
        $("h2#feedback").text("Very hot!!!");
    }
    else {
        $("h2#feedback").text("You guessed right!  Congratulations!");
    }
    addGuessToList(userGuessNow);
    $("#userGuess").val("");
}

/*--- function that ensures that user supplies numeric input between 1 and 100 (refer back to FizzBuzz refactor) ---*/
function verifyInput(valueToVerify) {
    if (valueToVerify === NaN || (valueToVerify % 1 !== 0)) {
        alert("You must enter in an integer!");
        $("#userGuess").val("");
    }
    else if (valueToVerify < 1 || valueToVerify > 100) {
        alert("You must enter in a value between 1 and 100!");
        $("#userGuess").val("");
    }
    else {                  
        guessFeedback(secretNumber,userGuess);
        counter();
        $("span#count").text(count);
    }
}

window.onload = newGame();

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    /*--- Initialize calculations for guess feedback ---*/
    $("#guessButton").click(function(){
        event.preventDefault();
        userGuess = Number($("#userGuess").val());
        verifyInput(userGuess);
    });
});
