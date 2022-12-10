const left_all = document.querySelectorAll(".valutes_left");
const right_all = document.querySelectorAll(".valutes_right");
const left_AZN = document.querySelector(".left_AZN");
const left_USD = document.querySelector(".left_USD");
const left_EUR = document.querySelector(".left_EUR");
const left_GBP = document.querySelector(".left_GBP");
const right_AZN = document.querySelector(".right_AZN");
const right_USD = document.querySelector("right_USD");
const right_EUR = document.querySelector(".right_EUR");
const right_GBP = document.querySelector(".right_GBP");
const left_input = document.querySelector(".left_input");
const right_input = document.querySelector(".right_input");

left_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(".show_valuta_place .left .active")
      .classList.remove("active");
    e.target.classList.add("active");
    const selectedcurr = e.target;
    fetch(``);
    // if (e.target.innerText === "AZN") {
    // }
  });
});
right_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(".show_valuta_place .right .active")
      .classList.remove("active");
    e.target.classList.add("active");
  });
});
