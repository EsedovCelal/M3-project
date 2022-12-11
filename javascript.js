const left_all = document.querySelectorAll(".valutes_left");
const right_all = document.querySelectorAll(".valutes_right");
const left_input = document.querySelector(".left_input");
const right_input = document.querySelector(".right_input");
function left(selected) {
  const right_innerText = document.querySelector(
    ".right .valutes_right .active"
  ).innerText;
  fetch(
    `https://api.exchangerate.host/latest?base=${selected}&symbols=${right_innerText}`
  )
    .then((link) => link.json())
    .then((link) => {
      const left_Input_Value = document.querySelector(
        ".left .left_input_div .left_input"
      ).value;
      const right_Input_Value = document.querySelector(
        ".right .right_input_div .right_input"
      );
      right_Input_Value.value = (
        +left_Input_Value * link.rates[right_innerText]
      ).toFixed(2);
    });
}
function right(selected) {
  const left_innerText = document.querySelector(
    ".left .valutes_left .active"
  ).innerText;
  fetch(
    `https://api.exchangerate.host/latest?base=${selected}&symbols=${left_innerText}`
  )
    .then((link) => link.json())
    .then((link) => {
      const right_Input_Value = document.querySelector(
        ".right .right_input_div .right_input"
      ).value;
      const left_Input_Value = document.querySelector(
        ".left .left_input_div .left_input"
      );
      right_Input_Value = (
        +left_Input_Value / link.rates[left_innerText]
      ).toFixed(2);
    });
}
left_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(".show_valuta_place .left .active")
      .classList.remove("active");
    e.target.classList.add("active");
    const selected = e.target.innerText;
    left(selected);
  });
});
right_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(".show_valuta_place .right .active")
      .classList.remove("active");
    e.target.classList.add("active");
    const selected = e.target.innerText;
    right(selected);
  });
});
