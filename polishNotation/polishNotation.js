const evalRPN = function (tokens) {
  let stack = [];

  function compute(num1, num2, operation) {
    switch (operation) {
      case "+": {
        return num1 + num2;
        break;
      }
      case "-": {
        return num2 - num1;
        break;
      }
      case "*": {
        return num1 * num2;
        break;
      }
      case "/": {
        return parseInt(num2 / num1);
        break;
      }
    }
  }

  for (token of tokens) {
    let num = Number(token);
    if (!isNaN(num)) {
      stack.push(num);
    } else {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let ans = compute(num1, num2, token);
      stack.push(ans);
    }
  }

  return stack.pop();
};

console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
