// Script.js
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      // Clear the display and rest variables
      currentInput = "";
      operator = "";
      firstOperand = "";
      secondOperand = "";
      display.value = "";
    } else if (value === "=") {
      // Perform Calculation
      if (operator && firstOperand && currentInput) {
        secondOperand = currentInput;
        display.value = calculate(firstOperand, secondOperand, operator);
        currentInput = display.value;
        operator = "";
        firstOperand = "";
      }
    } else if (["+", "-", "*", "/", "%"].includes(value)) {
      // Handle operator input
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = "";
      }
    } else {
      // Handle number and Decimal Number input
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return (num1 / num2) * 100;
    default:
      return 0;
  }
}
