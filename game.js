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

    //function to pick a random word from foods array
    function randomWord(){
        targetWord = foods[Math.floor(Math.random() * foods.length)];
        console.log(targetWord);
    };

    randomWord();

    //function to replace the letters of the word with underscores
    function hideWord(){
        for (var letter = 0; letter < targetWord.length; letter++){    
            displayWord.push(targetWord[letter]);
            console.log(displayWord);
            for (var i=0; i < displayWord.length; i++){
                displayWord[i] = "_ ";
            }
            var newWord = displayWord.join("");
            newWord = newWord.split(",");
            $("#random-word").text(newWord);
        }
    };

    hideWord();

    



});



//TODO: keep track of guesses

//listen for when they press a key that is a letter
//check to make sure it is a letter

//is this letter in the word that we randomly guessed?
//yes, update the displayWord to have the guessed letter in the right slot
//no, decrement their remaining tries

//update the display on the screen 


//did they win?
//yes, then show that they are a winner
//else if, did they lose?
//then show they lost
//else, the game continues