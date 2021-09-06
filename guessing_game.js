alert("Guess a number between 1 to 10");

let min = 1;
let max = 10;

let counter = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

var correct_ans = getRandomIntInclusive(min, max);

var guessed_number = prompt("Enter a number between 1 to 10");

while (counter !== 3) {

 for (var i = 0; i <= 2; i++) {
     if (guessed_number < correct_ans) {
        guessed_number = prompt("Correct answer is higher" + " | chances remaining: " + (counter + 1));
        counter++
    } else if (guessed_number > correct_ans) {
        guessed_number = prompt("Correct answer is lower" + " | chances remaining: " + (counter + 1));
        counter++
    } else if (guessed_number == correct_ans) {
        guessed_number = prompt("Winner!!! Enter 1 to restart or 0 to quit" + " | chances remaining: " + (counter + 1));
        counter++
        if (guessed_number == 1) {
            counter = 0;
        } else {
            break;
        }
    }
    if (counter == 3) {
        guessed_number = prompt("Sorry you lost!!! Enter 1 to restart or 0 to quit");

        if (guessed_number == 1) {
            counter = 0;
        } else {
            break;
        }
    }
 }

}
