// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ 마우스가 title 위로 올라가면 텍스트가 변경되어야 합니다.
✅ 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
✅ 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
✅ 마우스를 우 클릭하면 title이 바뀌어야 합니다.
✅ title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");

const superEventHandler = {

  mouseEnterEvent: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },

  mouseLeaveEvent: function () {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },

  resizeEvent: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },

  contextMenuEvent: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[4];
  },

};

h2.addEventListener('mouseenter', superEventHandler.mouseEnterEvent);
h2.addEventListener('mouseleave', superEventHandler.mouseLeaveEvent);
window.addEventListener('resize', superEventHandler.resizeEvent);
window.addEventListener('contextmenu', superEventHandler.contextMenuEvent);