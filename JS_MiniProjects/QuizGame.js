const prompt = require("prompt-sync")();

console.log("Welcome to the GK Quiz!");

let correctAnswers = 0;
const totalQuestions = 3;

const ques1 = prompt("Which animal is known as the 'Ship of the Desert'?");
const correctAnswer1 = "camel";

if (ques1.toLowerCase() === correctAnswer1) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const ques2 = prompt("Baby frog is known as... ");
const correctAnswer2 = "tadpole";

if (ques2.toLowerCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const ques3 = prompt("Missile man of India? ");
const correctAnswer3 = "abdul kalam";

if (ques3.toLowerCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", percent.toString() + "%");
