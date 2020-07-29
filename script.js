const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["red", "yellow", "blue", "purple", "silver", "gold", "indigo"];
colorBtn.addEventListener("click", changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    // bodyBcg.style.backgroundColor = colors[random];
    bodyBcg.style.backgroundColor = colors[random];
}