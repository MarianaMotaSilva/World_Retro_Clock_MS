function updateTime() {}
// Barcelona

let BarcelonaElement = document.querySelector("#Barcelona");
let BarcelonaDateElement = BarcelonaElement.querySelector(".date");
let BarcelonaTimeElement = BarcelonaElement.querySelector(".time");
let BarcelonaTime = moment().tz("Europe/Madrid");

BarcelonaDateElement.innerHTML = BarcelonaTime.format("MMM Do YYYY");
BarcelonaTimeElement.innerHTML = `${BarcelonaTime.format(
  "h:mm:ss"
)} <small>${BarcelonaTime.format("A")}</small>`;

// Lisbon

let LisbonElement = document.querySelector("#Lisbon");
let LisbonDateElement = LisbonElement.querySelector(".date");
let LisbonTimeElement = LisbonElement.querySelector(".time");
let LisbonTime = moment().tz("Europe/Lisbon");

LisbonDateElement.innerHTML = LisbonTime.format("MMM Do YYYY");
LisbonTimeElement.innerHTML = `${LisbonTime.format(
  "h:mm:ss"
)} <small>${LisbonTime.format("A")}</small>`;

updateTime();
setInterval(updateTime, 1000);
