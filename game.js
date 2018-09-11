$(document).ready(function(){
 
    //word bank
    var foods = [
        "mozzarella",
        "ricotta",
        "pizza",
        "polenta",
        "tortellini",
        "lasagna",
        "gnocchi",
        "ravioli",
        "pesto",
        "risotto",
        "panettone",
        "gelato",
        "tiramisu"
    ];

    //target word
    var targetWord;

    //target word array
    var displayWord = [];

    //valiable to hold pressed letter
    var pressedKey;

    //variable to hold remaining guesses
    var remainingGuesses = 12;

    //variable to hold wins
    var wins = 0;

    //variable to hold losses
    var losses;

    $("#remainingGuesses").text(remainingGuesses);

    //function to pick a random word from foods array
    function pickRandomWord(){
        targetWord = foods[Math.floor(Math.random() * foods.length)];
        console.log(targetWord);

        targetWord = targetWord.split("");
    };

    pickRandomWord();

    function updateTargetWord() {
        $("#random-word").text(displayWord.join(''));
    } 

    //function to replace the letters of the word with underscores
    function hideWord(){
        displayWord = targetWord.slice();
        for (var i=0; i < displayWord.length; i++){
                displayWord[i] = "_ ";
        }
        updateTargetWord();
        // $("#random-word").text(displayWord.join(''));
        // $("#random-word").text(displayWord.join('').split(','));
    };

    hideWord();

    //function to update remaining guesses
    function updateGuessCount(){
        remainingGuesses--;
        $("#remainingGuesses").text(remainingGuesses);
    };

    $("body").keypress(function(event){
        console.log(event.key);
        pressedKey = event.key;

        //user input validation (must be lowecase letter)
        if (event.which < 97 || event.which > 122){
            alert("Please use only lowercase letters.");
            return false;
        }

        var correctGuess = false;
        for(i = 0; i < targetWord.length; i++){
            if(targetWord[i] === pressedKey){
                displayWord[i] = pressedKey;
                correctGuess = true;
            }
        }

        if(correctGuess)
            updateTargetWord();
        else
            updateGuessCount();

        //check if the user won the game and update wins
        if (displayWord.indexOf("_ ") === -1){
            wins++;
            $("#wins").text(wins);
            setTimeout (function() {
                alert("Congratulations! You won!");
            }, 300);
        }

        //check if the user lost the game and update losses
        if (remainingGuesses === 0){
            alert("You lost!");
            losses++;
        }


    })
});





//did they win?
//yes, then show that they are a winner
//else if, did they lose?
//then show they lost
//else, the game continues