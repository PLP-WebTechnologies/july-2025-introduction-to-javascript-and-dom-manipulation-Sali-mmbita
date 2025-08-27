// -------------------------
// PART 1: Variables & Conditionals
// -------------------------
let userName = "Salim";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// -------------------------
// PART 2: Custom Functions
// -------------------------

// Function 1: Greet user
function greetUser() {
  document.getElementById("output").innerText = "Hello, " + userName + "! 👋";
}

// Function 2: Change background color randomly
function changeBackgroundColor() {
  let colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// -------------------------
// PART 3: Loops
// -------------------------

// Example 1: For loop to print numbers 1–5
function showNumbers() {
  let result = "Numbers: ";
  for (let i = 1; i <= 5; i++) {
    result += i + " ";
  }
  document.getElementById("output").innerText = result;
}

// Example 2: While loop to count down from 5
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// -------------------------
// PART 4: DOM Interactions
// -------------------------

// 1. Button click → greet user
document.getElementById("greetBtn").addEventListener("click", greetUser);

// 2. Button click → show numbers
document.getElementById("showNumbersBtn").addEventListener("click", showNumbers);

// 3. Button click → change background color
document.getElementById("changeColorBtn").addEventListener("click", changeBackgroundColor);
