let body = document.querySelector("body");
let nameSpan = document.getElementById("name");
let timeSpan = document.getElementById("time");

body.style.display = "none";

let name = prompt("Adın ne ?");
if (name) {
    body.style.display = "flex";
    nameSpan.innerText = name;
}
let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
let date;
setInterval(() => {
    date = new Date();
    timeSpan.innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + days[date.getDay()];
}, 1000);
