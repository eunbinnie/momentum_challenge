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