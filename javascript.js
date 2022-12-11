const left_all = document.querySelectorAll(".valutes_left");
const right_all = document.querySelectorAll(".valutes_right");
var selected_left = "AZN";
var selected_right = "USD";
function left(selected) {
  const right_innerText = document.querySelector(
    ".right .valutes_right .active"
  ).innerText;
  fetch(
    `https://api.exchangerate.host/latest?base=${selected}&symbols=${right_innerText}`
  )
    .then((link) => link.json())
    .then((link) => {
      let left_Input_p = document.querySelector(".left .left_input_div p");
      const left_Input_Value = document.querySelector(
        ".left .left_input_div .left_input"
      ).value;
      const right_Input_Value = document.querySelector(
        ".right .right_input_div .right_input"
      );
      right_Input_Value.value = (
        +left_Input_Value * link.rates[right_innerText]
      ).toFixed(2);
      left_Input_p.innerText = `1 ${selected} = ${link.rates[right_innerText]} ${right_innerText}`;
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
      const rate = link.rates[left_innerText];
      let right_Input_p = document.querySelector(".right .right_input_div p");
      let right_Input_Value = document.querySelector(
        ".right .right_input_div .right_input"
      );
      let left_Input_Value = document.querySelector(
        ".left .left_input_div .left_input"
      );
      left_Input_Value.value = (+right_Input_Value.value * rate).toFixed(2);
      right_Input_p.innerText = `1 ${selected} = ${link.rates[left_innerText]} ${left_innerText}`;
    });
}
left_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(".show_valuta_place .left .active")
      .classList.remove("active");
    e.target.classList.add("active");
    selected_left = e.target.innerText;
    left(selected_left);
  });
});
right_all.forEach((item) => {
  item.addEventListener("click", (e) => {
    document
      .querySelector(".show_valuta_place .right .active")
      .classList.remove("active");
    e.target.classList.add("active");
    selected_right = e.target.innerText;
    right(selected_right);
  });
});
left(selected_left);
right(selected_right);
const left_input = document.querySelector(".left .left_input_div .left_input");
left_input.addEventListener("keyup", (event) => {
  left(selected_left);
  console.log(selected_left);
});

const right_input = document.querySelector(
  ".right .right_input_div .right_input"
);
right_input.addEventListener("keyup", (event) => {
  right(selected_right);
  console.log(selected_right);
});
