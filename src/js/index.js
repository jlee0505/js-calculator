const $total = document.getElementById("total");
const $digits = document.querySelector(".digits");
const $operations = document.querySelector(".operations");
const $allClear = document.querySelector(".modifiers");

let display = "";
let buttons = [];
let total = 0;

const changeDisplay = (value) => {
  display += value;
  $total.textContent = display;
};

const calculate = () => {
  for (let i = 0; i < 3; i++) {
    if (i % 2 === 0) {
      if (i === 0) {
        total = parseInt(buttons[i], 10);
      } else {
        switch (buttons[i - 1]) {
          case "+": {
            total += parseInt(buttons[i], 10);
            break;
          }
          case "-": {
            total -= parseInt(buttons[i], 10);
            break;
          }
          case "X": {
            total *= parseInt(buttons[i], 10);
            break;
          }
          default: {
            total /= parseInt(buttons[i], 10);
            total = ~~total;
          }
        }
      }
    }
  }
  $total.innerHTML = total.toString();
  if (total !== 0) {
    display = total.toString();
    buttons = [total.toString()];
  } else {
    display = "";
    buttons = [];
  }
};

const clickDigit = (event) => {
  const value = event.target.textContent;
  if (buttons.length) {
    if (buttons[buttons.length - 1].length >= 3) {
      alert("숫자는 세 자리까지만 입력 가능합니다");
      return;
    } else {
      buttons[buttons.length - 1] += value;
    }
  } else {
    if (value !== "0") {
      buttons.push(value);
    } else {
      return;
    }
  }
  changeDisplay(value);
};

const clickOperation = (event) => {
  const value = event.target.textContent;
  if (buttons.length) {
    if (!buttons[buttons.length - 1]) {
      alert("숫자를 먼저 입력하세요!");
      return;
    } else if (value === "=") {
      calculate();
    } else {
      changeDisplay(value);
      buttons.push(value);
      buttons.push("");
    }
  } else {
    alert("숫자를 먼저 입력하세요!");
    return;
  }
};

const clickAllClear = (event) => {
  display = "";
  buttons = [];
  total = 0;
  $total.textContent = display;
};

$digits.addEventListener("click", clickDigit);
$operations.addEventListener("click", clickOperation);
$allClear.addEventListener("click", clickAllClear);

console.log(buttons.length);
console.log("test");
