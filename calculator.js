function main() {
  // Add event listeners for number and operator buttons
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      console.log(value);
      if ("+-*/^=".includes(value)) {
        // Handle operator input
        // Update firstNum, secondNum, and result as needed
      } else {
        // Handle number input
        // Update firstNum and secondNum as needed
      }
    });
  });
}

function getResult(firstNum, secondNum, operator) {
  let result;
  if (operator == "+") {
    result = firstNum + secondNum;
  } else if (operator == "-") {
    result = firstNum - secondNum;
  } else if (operator == "/") {
    result = firstNum / secondNum;
  } else if (operator == "*") {
    result = firstNum * secondNum;
  } else if (operator == "^") {
    result = firstNum ** secondNum;
  }
  return result;
}

main();
