const button = document.querySelector("button");
const input = document.querySelector(".inputText");
const list = document.querySelector("ul");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const value = input.value;
  const item = document.createElement("li");
  item.textContent = value;
  item.addEventListener("click", () => {
    if (item.style.textDecoration === "line-through") {
      item.style.textDecoration = "none";
    } else {
      item.style.textDecoration = "line-through";
    }
  });
  list.appendChild(item);
  input.value = "";
});
