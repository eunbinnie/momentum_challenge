const maxNumber = document.querySelector("#maxNumber");
const myNumber = document.querySelector("#myNumber");
const button = document.querySelector("button");

let chose = document.createElement('p');
document.body.appendChild(chose);

let result = document.createElement('p');
result.classList.add('bold');
document.body.appendChild(result);

function inputLimitEvent() {
  let limit;
  limit = maxNumber.value;
  myNumber.max = limit;
}

function inputGuessNumber() {
  if (maxNumber.value === "") {
    alert("숫자 범위를 먼저 설정해주세요.");
  }
}

function clickEvent() {

  if (maxNumber.value != "" && myNumber.value != "") {

    const random = Math.floor(Math.random() * maxNumber.value);
    chose.innerText = (`You chose: ${myNumber.value}, the machine chose: ${random}.`);

    if (myNumber.value == random) {
      result.innerText = 'You won!';
    } else {
      result.innerText = 'You lost!';
    }

  } else {
    alert("먼저 숫자 범위와 찾을 숫자를 모두 입력해주세요.")
  }
}

maxNumber.addEventListener('input', inputLimitEvent);
myNumber.addEventListener('input', inputGuessNumber);
button.addEventListener('click', clickEvent);