### Nomad Coders - vanilla JS challenge

👩🏻‍💻 자바스크립트 정복하기 프로젝트
***

###### Day 1
- **object**<br>
object 안에서 변수와 함수를 만들어 줄 때의 양식! (까먹지 말자)
key: value;
function name: function(){}<br>


- **event 찾기**<br>
listen할 event를 찾으려면? 그 대상을 console.dir()로 출력해서 on이 붙은 것들이 event!
event를 발생시킬 대상을 찾기 힘들다면 일단 무조건 console.dir()를 출력해서 어디에 내용이 들어가있는지 확인해야 함.<br>
*내가 했던 실수: event.innerText 혹은 event.style.color 이렇게 내용을 바꾸어 주려고 했는데 계속 error가 발생했었음. console.dir()로 출력해서 확인해보니 innerText와 style에 접근하기 위해서는 우선 target에 먼저 접근해야 했었다. event.target.innerText로 수정하니 error 해결*