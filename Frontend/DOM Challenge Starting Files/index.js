const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

const list = document.querySelectorAll("li");

btn.addEventListener("click", () => {
  h1.classList.toggle("huge");
  list.forEach((item) => {
    item.classList.toggle("huge");
  });
});
