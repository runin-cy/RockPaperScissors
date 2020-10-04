var text;
var person = prompt("Welcome to Rock, Paper, Scissors game. How many rounds would you like to play? Choose up to 10.");
var playagain = "Y";

function myfunction() {
var a = parseInt("0", 1) + "<br>";
var b = parseInt("1", 2) + "<br>";
var c = parseInt("2", 3) + "<br>";
var d = parseInt("3", 4) + "<br>";
var e = parseInt("4", 5) + "<br>";
var f = parseInt("5", 6) + "<br>";
var g = parseInt("6", 7) + "<br>";
var h = parseInt("7", 8)+ "<br>";
var i = parseInt("8", 9)+ "<br>";
var j = parseInt("9", 10)+ "<br>";

var n = a + b + c + d + e + f + g + "<br>" + h + i + j;

document.getElementById("demo").innerHTML = n;
}

var user = prompt("r, p, or s")

Math.floor(Math.random() * 3)

var userChoice = user
var computerChoice = Math.random();

while (playagain == "Y") {
    var compare = function(choice1,choice2){
    if(choice1===choice2){
        alert("The result is a tie!");
    }
    if(choice1==="r"){
        if(choice2==="s"){
            alert("rock wins");
        }
        else{
            alert("paper wins");
        }
    }
    if(choice1==="p"){
        if(choice2==="r"){
            alert("paper wins");
        }
        else{
            alert("scissors wins");
        }
    }
    if(choice1==="s"){
        if(choice2==="r"){
            alert("rock wins");
        }
        else{
            alert("scissors wins");
        }
    }
};
compare(userChoice,computerChoice);
document.write("<br>");
playagain = prompt("Do you want to play again, Y or N");
userChoice = prompt("Choose rock, paper, or scissors");
}


let count = 1;
while(count < 11) {
    console.log(count);
    count++;
}
console.log("score");