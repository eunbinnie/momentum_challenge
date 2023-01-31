const limitNumber = document.querySelector("#limitNumber");
const myNumber = document.querySelector("#myNumber");
const button = document.querySelector("button");

let chose = document.createElement('p');
document.body.appendChild(chose);

let result = document.createElement('p');
result.classList.add('bold');
document.body.appendChild(result);

// 숫자 범위 저장 함수
function inputLimitEvent() {
  let limit;
  limit = limitNumber.value;
  myNumber.max = limit;
}

// 숫자 범위 먼저 설정하도록
function inputGuessNumber() {
  if (limitNumber.value === "") {
    alert("숫자 범위를 먼저 설정해주세요.");
  }
}

// 버튼 클릭 이벤트(결과 출력)
function clickEvent() {

  if (limitNumber.value != "" && myNumber.value != "") {

    const random = Math.round(Math.random() * limitNumber.value);
    chose.innerText = (`You chose: ${myNumber.value}, the machine chose: ${random}.`);

    if (parseInt(myNumber.value) === random) {
      result.innerText = 'You won!';
    } else {
      result.innerText = 'You lost!';
    }

  } else {
    alert("먼저 숫자 범위와 찾을 숫자를 모두 입력해주세요.");
  }

}

limitNumber.addEventListener('input', inputLimitEvent);
myNumber.addEventListener('input', inputGuessNumber);
button.addEventListener('click', clickEvent);