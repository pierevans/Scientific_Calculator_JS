let btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

let toDisplay = (input) => {
  if (input === "x") {
    screen.value += "x";
  } else if (input === "÷") {
    screen.value += "÷";
  } else {
    screen.value += input;
  }
};

// Delete function
let toDelete = () => {
  screen.value = screen.value.slice(0, screen.value.length - 1);
};

// Clear display function
let clearDisplay = () => {
  screen.value = "";
};

// Calculate function
let calculate = () => {
  try {
    let expression = screen.value.replace(/x/g, "*").replace(/÷/g, "/");

    screen.value = eval(expression);
  } catch (error) {
    screen.value = "Error";
  }
};

// Trigonometric functions
function sinus() {
  screen.value = Math.sin(screen.value);
}

function cosine() {
  screen.value = Math.cos(screen.value);
}

function tangent() {
  screen.value = Math.tan(screen.value);
}

// Pi function
function pi() {
  screen.value = 3.1415;
}

// Square root function
function squareRoot() {
  screen.value = Math.sqrt(screen.value);
}

// Factorial function
function factorial(n) {
  if (n < 0) return "Error";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function toFactorial() {
  let num = parseInt(screen.value);
  if (isNaN(num) || num < 0) {
    screen.value = "Error";
  } else {
    screen.value = factorial(num);
  }
}

// Natural logarithm function
function log() {
  screen.value = Math.log(screen.value);
}

// Exponentiation function
function exponentX() {
  screen.value = Math.exp(screen.value);
}

// Modulo function
function modulo() {
  let values = screen.value.split("%");
  if (values.length === 2) {
    let a = parseFloat(values[0]);
    let b = parseFloat(values[1]);
    if (!isNaN(a) && !isNaN(b)) {
      screen.value = a % b;
    } else {
      screen.value = "Error";
    }
  } else {
    screen.value = "Error";
  }
}

// 1/x function
function oneOverX() {
  let num = parseFloat(screen.value);
  if (num === 0) {
    screen.value = "Error";
  } else {
    screen.value = 1 / num;
  }
}
