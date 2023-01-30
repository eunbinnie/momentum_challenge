const maxNumber = document.querySelector("#maxNumber");
const myNumber = document.querySelector("#myNumber");
const button = document.querySelector("button");

let limit;

function inputLimitEvent() {
  limit = maxNumber.value;
  console.log(limit);

  myNumber.max = limit;
}

function inputGuessNumber() {

}

function clickEvent() {
  if (maxNumber.value != "" && myNumber.value != "") {

  } else {
    console.log("먼저 숫자 범위와 찾을 숫자를 모두 입력해주세요.")
  }
}

maxNumber.addEventListener('input', inputLimitEvent);
myNumber.addEventListener('input', inputGuessNumber);
button.addEventListener('click', clickEvent);