/**
 * Created by anuroop on 2016-09-29.
 */
// User Choice
var userChoice = prompt("User choice: rock, paper or scissors?");
console.log("User choice is: " + userChoice);

//Computer Choice
var computerChoice = Math.random()
if (computerChoice <= 0.33){
    computerChoice = "rock";
}
else if (computerChoice > 0.33 && computerChoice <= 0.67){
    computerChoice = "scissors";
}
else{
    computerChoice = "paper";
}
console.log("Computer choice is: " + computerChoice);

var rockScissors = function(){
    if(computerChoice === "scissors"){
        console.log("User wins");
        console.log("Rock destroys Scissors")
    }
    else{
        console.log("Computer wins");
        console.log("Paper covers rock");
    }
};

var scissorsPaper = function(){
    if(computerChoice === "paper"){
        console.log("User wins");
        console.log("Scissors cut Paper");
    }
    else{
        console.log("Computer wins");
        console.log("Rock destroys Scissors")
    }
};

var paperRock = function(){
    if(computerChoice === "rock"){
        console.log("User wins");0
        console.log("Paper covers rock");
    }
    else{
        console.log("Computer wins");
        console.log("Scissors cut Paper");
    }
};

if (userChoice === computerChoice){
    console.log("It's a tie: No-one Wins");
}
else if (userChoice === "rock"){
    rockScissors();
}
else if (userChoice === "scissors"){
    scissorsPaper();
}
else if (userChoice === "paper"){
    paperRock();

}
