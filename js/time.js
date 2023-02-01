const h2 = document.getElementById("date");

function printDate() {
  const christmas = new Date("2023-12-25 00:00:00")
  const today = new Date();
  const dDay = christmas - today;

  const date = Math.floor(String(dDay / (1000 * 60 * 60 * 24)).padStart(3, "00"));
  const hours = Math.floor(String((dDay / (1000 * 60 * 60)) % 24).padStart(2, "0"));
  const minutes = Math.floor(String((dDay / (1000 * 60)) % 60).padStart(2, "0"));
  const seconds = Math.floor(String(dDay / 1000 % 60).padStart(2, "0"));

  h2.innerText = `${date}d ${hours}h ${minutes}m ${seconds}s`;
}

printDate();
setInterval(printDate, 1000);