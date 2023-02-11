const display = document.getElementsByClassName("display")[0];

/*
 * Special Operators
 */
const clean = document.getElementById("clean");
const posNeg = document.getElementById("posNeg");
const percentage = document.getElementById("percentage");

/*
 * Operators
 */
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const sum = document.getElementById("sum");
const result = document.getElementById("result");

/*
 * Numbers
 */
const numZero = document.getElementById("numZero");
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const numThree = document.getElementById("numThree");
const numFour = document.getElementById("numFour");
const numFive = document.getElementById("numFive");
const numSix = document.getElementById("numSix");
const numSeven = document.getElementById("numSeven");
const numEight = document.getElementById("numEight");
const numNine = document.getElementById("numNine");
const comma = document.getElementById("comma");

let nums = [""];
let operators = [""];
let isInt = true;

const addNumber = (number) => {
  if (operators[0].length === 0) {
    if (nums[0].length < 11) {
      nums[0] += number;
      display.innerHTML = nums[0];
    }
    return;
  }
  for (let i = 1; i < operators.length; i++) {
    if (operators[i].length === 0) {
      if (nums[i]) {
        if (nums[i].length < 11) {
          nums[i] += number;
          display.innerHTML = nums[i];
        }
        return;
      }
      nums.push(number);
      display.innerHTML = nums[i];
    }
  }
};

const addOpetaror = (operator) => {
  if (operators.length === 1) {
    if (nums[0].length > 0) {
      isInt = true;
      operators[0] = operator;
      operators.push("");
    }
    return;
  }
  for (let i = 0; i < operators.length; i++) {
    if (nums.length === operators.length) {
      if (operators[i].length === 0) {
        isInt = true;
        operators[i] = operator;
        operators.push("");
        return;
      }
    }
  }
};

/*
 * Special Operators Events
 */
clean.addEventListener("click", () => {
  nums = [""];
  operators = [""];
  isInt = true;
  display.innerHTML = "";
});

posNeg.addEventListener("click", () => {
  if (nums[0].length === 0) {
    return;
  }
  if (nums[nums.length - 1][0] != "-") {
    const negNumber = "-" + nums[nums.length - 1];
    nums[nums.length - 1] = negNumber;
    display.innerHTML = nums[nums.length - 1];
    return;
  }
  let posNumber = "";
  for (let i = 1; i < nums[nums.length - 1].length; i++) {
    posNumber += nums[nums.length - 1][i];
  }
  nums[nums.length - 1] = posNumber;
  display.innerHTML = nums[nums.length - 1];
});

percentage.addEventListener("click", () => {
  if (nums[0].length > 0) {
    const lastNumber = nums[nums.length - 1];
    const result = lastNumber / 100;

    nums = [result.toString()];
    operators = [""];
    isInt = false;
    display.innerHTML = result;
    return;
  }
});

/*
 * Numbers Events
 */
comma.addEventListener("click", () => {
  if (isInt) {
    addNumber(".");
    isInt = false;
  }
});

numZero.addEventListener("click", () => {
  addNumber("0");
});

numOne.addEventListener("click", () => {
  addNumber("1");
});

numTwo.addEventListener("click", () => {
  addNumber("2");
});

numThree.addEventListener("click", () => {
  addNumber("3");
});

numFour.addEventListener("click", () => {
  addNumber("4");
});

numFive.addEventListener("click", () => {
  addNumber("5");
});

numSix.addEventListener("click", () => {
  addNumber("6");
});

numSeven.addEventListener("click", () => {
  addNumber("7");
});

numEight.addEventListener("click", () => {
  addNumber("8");
});

numNine.addEventListener("click", () => {
  addNumber("9");
});

/*
 * Operators Events
 */
division.addEventListener("click", () => {
  addOpetaror("/");
});

multiplication.addEventListener("click", () => {
  addOpetaror("*");
});

subtraction.addEventListener("click", () => {
  addOpetaror("-");
});

sum.addEventListener("click", () => {
  addOpetaror("+");
});

/*
 * Result Event
 */
result.addEventListener("click", () => {
  let result = +nums[0];

  for (let i = 1; i < nums.length; i++) {
    switch (operators[i - 1]) {
      case "+":
        result += +nums[i];
        break;
      case "-":
        result -= +nums[i];
        break;
      case "*":
        result *= +nums[i];
        break;
      case "/":
        result /= +nums[i];
        break;
    }
  }

  nums = [result.toString()];
  operators = [""];
  if (Number.isInteger(result)) {
    isInt = true;
  }else{
    isInt = false;
  }
  display.innerHTML = result;
});
