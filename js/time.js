const h2 = document.getElementById("date");

function printDate() {
  const christmas = new Date("2023-12-25 00:00:00")
  const today = new Date();
  const dDay = christmas - today;

  const date = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(3, "00");
  const hours = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor(dDay / 1000 % 60)).padStart(2, "0");

  h2.innerText = `${date}d ${hours}h ${minutes}m ${seconds}s`;
}

printDate();
setInterval(printDate, 1000);