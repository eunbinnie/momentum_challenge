const h2 = document.querySelector("h2");
const width = window.innerWidth;

if (width > 1200) {
  h2.classList.add("computer");
} else if (width > 400) {
  h2.classList.add("pad");
} else {
  h2.classList.add("phone");
}