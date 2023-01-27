const body = document.body;

const COMPUTER = "computer";
const PAD = "pad";
const PHONE = "phone";

function addClassList(name) {
  body.classList.add(name);
}

function removeClassList(name1, name2) {
  body.classList.remove(name1, name2);
}

function resizeEvent() {
  const size = window.innerWidth;

  if (size > 1000) {
    addClassList(COMPUTER);
    removeClassList(PHONE, PAD);
  }
  else if (size > 600) {
    addClassList(PAD);
    removeClassList(PHONE, COMPUTER);
  }
  else {
    addClassList(PHONE);
    removeClassList(PAD, COMPUTER);
  }
}

resizeEvent();
window.addEventListener('resize', resizeEvent);