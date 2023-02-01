### Nomad Coders - vanilla JS challenge

👩🏻‍💻 자바스크립트 정복하기 프로젝트
***

###### Day 1
- **object**<br>
object 안에서 변수와 함수를 만들어 줄 때의 양식! (까먹지 말자)<br>
key: value;<br>
function name: function(){}<br>


- **event 찾기**<br>
listen할 event를 찾으려면? 그 대상을 console.dir()로 출력해서 on이 붙은 것들이 event!
event를 발생시킬 대상을 찾기 힘들다면 일단 무조건 console.dir()를 출력해서 어디에 내용이 들어가있는지 확인해야 함.<br><br>
*내가 했던 실수: event.innerText 혹은 event.style.color 이렇게 내용을 바꾸어 주려고 했는데 계속 error가 발생했었음. console.dir()로 출력해서 확인해보니 innerText와 style에 접근하기 위해서는 우선 target에 먼저 접근해야 했었다. event.target.innerText로 수정하니 error 해결<br>내가 너무 어렵게 했었다. document에서 h2를 불러왔으면 이걸 활용해야지. 왜 event에서 h2를 찾으려고 했을까 코드만 더 길어졌다. 수정완료*

***
##### Day 2
- **classList(add, remove)**<br>
size별로 세 가지로 나누어서 css에 미리 background color를 설정해두었다. width에 맞는 color class를 add하고, 나머지 class는 remove해주면 됨. remove 필수! element를 확인하면서 코딩하자<br>
- **function**<br>
중복된 내용이 있으면 function을 만들어서 코드 길이를 줄이자. string도 ""와 문자를 계속 작성하기 번거롭기 때문에 const로 상수를 설정해두자.<br><br>
*내가 했던 실수: 사실 classList를 아예 생각도 못함.. body의 background-color에 접근해서 수정하려고 했다. 유혹을 뿌리치지 못하고 hint를 확인했다가 아하.. 하고 classList로 수정. js에서 작성하기 전에 이게 맞나 헷갈리면 무조건 출력해보고 css에 임의적으로 작성하여 확인해보기! 그럼 쉽게 알 수 있다.*<br>

***
##### Random Number Game
- **JS에서 html new element 만들기**<br>
**1. document.createElement('element tag')**<br>
우선 새로 만들 tag명을 document.createElement('') 안에 적어준다. 만약 h1 태그를 새로 생성하고 싶다면 let h1 = document.createElement('h1'); 이렇게!<br><br>
**2. appendChild vs prependChild**<br>
tag를 생성했으면 이제 html 내부에 삽입을 해주어야 하는데, 이때 사용하는 두 가지 방법이다. appendChild는 부모 요소의 제일 하단에 해당 태그를 삽입하고, prependChild는 부모 요소의 제일 상단에 해당 태그를 삽입해준다.<br><br>
만약 body 제일 하단에 삽입하고 싶다면, document.body.appendChild(h1) 이렇게 하면 됨.<br>(여기에서 h1은 document.createElement('h1')을 뜻 함. 1번에 적었음)<br><br>
**3. 반올림 vs 올림 vs 내림**<br>
*Math.round():* 반올림<br>
*Math.ceil():* 올림<br>
*Math.floor():* 내림<br>

***
##### Until Christmas
- **목표 날짜 설정**<br>
d-day를 계산할 날짜는 새로운 변수에 new Date("") 안에 날짜를 작성하면 된다. 만약 2023년 크리스마스까지의 디데이를 계산하고자 한다면, new Date("2023-12-25 00:00:00") 이렇게 작성하면 됨!<br><br>
그 후 오늘 날짜를 빼주고, 저렇게 나눠주면 됨<br><br>
```js
const christmas = new Date("2023-12-25 00:00:00")
  const today = new Date();
  const dDay = christmas - today;

  const date = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(3, "00");
  const hours = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor(dDay / 1000 % 60)).padStart(2, "0");
```
<br><br>

- **숫자 빈 공간 채우기**<br>
4d 3m이 아닌 004d 03m으로 빈 공간을 0으로 채우고 싶다면 padStart()를 사용하면 된다. padStart()를 사용하려면 자료형을 string으로 바꿔주어야 한다. 따라서 String()으로 감싼 후 사용하기! padStart()는 매개변수를 2개 받는데, 첫 번째 매개변수는 문자열의 크기 즉 몇 글자가 되도록 빈 공간을 채울 것인지 작성하면 된다. 예를 들어, 시간의 경우 가장 큰 숫자가 24이므로 두 자리수로 채울 것이므로 첫번째 매개변수를 2로 작성하면 된다. 두 번째 매개변수는 빈 공간을 무슨 문자열로 채울 것인지 작성하면 된다. 이 예제에서는 빈 공간을 0으로 채울 것이기 때문에 시간의 경우 "0"으로 작성, 며칠 남았는지에 경우는 "00"으로 작성하면 된다.<br><br>
만약 첫 시작에 빈공간을 채우는 것이 아닌, 마지막 부분에 빈 공간을 채우고 싶다면 padEnd()를 사용하면 된다.<br><br>

- **setInterval()**
setInterval()은 어떤 함수를 몇ms 간격으로 출력할 지 정하는 함수이다. 이 함수 또한 2개의 매개변수를 갖는데, 첫번째 매개변수는 실행할 함수이고 두 번째 매개변수는 ms이다. 시간을 초 단위로 출력해야 하므로 두번째 매개변수는 1000으로 작성하면 된다.(ms단위로 작성한다. 1초 === 1000ms) 페이지를 새로고침한 후 1초 후에 함수가 실행되므로 임의적으로 함수를 한 번 실행한 후 setInterval() 함수를 실행하면 된다.<br><br>