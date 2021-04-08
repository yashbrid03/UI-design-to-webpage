//Code By :- Yash Brid

new CircleType(document.getElementById("circle"));
new CircleType(document.getElementById("circle2"));

const circle1 = document.getElementById("circle");
const circle2 = document.getElementById("circle2");
window.addEventListener("scroll", function () {
  circle1.style.transform = "rotate(" + window.pageYOffset + "deg)";
  circle2.style.transform = "rotate(" + window.pageYOffset + "deg)";
});

const home = document.getElementById("home");
const explore = document.getElementById("explore");
const contact = document.getElementById("contact");

const indicator = document.getElementById("indicator");

home.addEventListener("click", () => {
  indicator.classList.remove("explore");
  indicator.classList.remove("contact");
  indicator.classList.add("home");
});

explore.addEventListener("click", () => {
  indicator.classList.remove("home");
  indicator.classList.remove("contact");
  indicator.classList.add("explore");
});

contact.addEventListener("click", () => {
  indicator.classList.remove("explore");
  indicator.classList.remove("home");
  indicator.classList.add("contact");
});
