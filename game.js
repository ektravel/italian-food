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



    //function to pick a random word from foods array
    function randomWord(){
        targetWord = foods[Math.floor(Math.random() * foods.length)];
        $("#random-word").text(targetWord);
    };

    randomWord();



});



//i need a random word from the word bank

//i need a way to represent how many letters are in the word
//displayword = ["_"];
//will start with a bunch of "_";

//i need to display this to the user

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