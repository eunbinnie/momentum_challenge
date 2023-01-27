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
