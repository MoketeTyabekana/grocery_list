const container = document.getElementsByClassName("container");
const pencil = document.getElementsByClassName(".material-icons");
const userInput = document.getElementById("userInput");
const items = document.getElementById("list-items");

pencil.addEventListener("click", function () {
  items.innerHTML = "";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addItem();
  }
});

function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = "-" + userInput.ariaValueMax.trim();

  h2.addEventListener('click', function () {
    h2.style.textDecoration = "line-through";
  });

  
}
