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
    var wins;

    //variable to hold losses
    var losses;

    $("#remainingGuesses").text(remainingGuesses);

    //function to pick a random word from foods array
    function randomWord(){
        targetWord = foods[Math.floor(Math.random() * foods.length)];
        console.log(targetWord);
    };

    randomWord();

    //function to replace the letters of the word with underscores
    function hideWord(){
        // for (var letter = 0; letter < targetWord.length; letter++){    
            // displayWord.push(targetWord[letter]);
            // console.log(displayWord);
            // for (var i=0; i < displayWord.length; i++){
            //     displayWord[i] = "_ ";
            // }
            // var newWord = displayWord.join("");
            // newWord = newWord.split(",");
            // $("#random-word").text(newWord);


        // }

        displayWord = targetWord.split("");
        console.log(displayWord);
        for (var i=0; i < displayWord.length; i++){
                displayWord[i] = "_ ";
        }
        displayWord = displayWord.join("").split(","); 
        $("#random-word").text(displayWord);

    };

    hideWord();

    //function to update remaining guesses
    function updateGuessCount(){
        remainingGuesses--;
        $("#remainingGuesses").text(remainingGuesses);
    }


    $("body").keypress(function(event){
        console.log(event.key);
        pressedKey = event.key;

        //user input validation (must be lowecase letter)
        if (event.which < 97 || event.which > 122){
            alert("Please use only lowercase letters.");
            return false;
        }

        //check if the user guessed correctly
        //incorrect guess
        if (targetWord.indexOf(pressedKey) === -1){
            alert("This letter is not in the word!");
            updateGuessCount();
        //correct guess
        }else{
            alert("That is correct");
            var guessedLetter = targetWord.indexOf(pressedKey);
            $("#random-word").text(displayWord[guessedLetter]);
        }
    })



});


//yes, update the displayWord to have the guessed letter in the right slot



//did they win?
//yes, then show that they are a winner
//else if, did they lose?
//then show they lost
//else, the game continues