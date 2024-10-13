const container = document.getElementsByClassName("container")[0];
const pencil = document.getElementsByClassName("material-icons")[0];
const userInput = document.getElementById("userInput");
const items = document.getElementById("list-items");

pencil.addEventListener('click', function () {
  items.innerHTML = ''; 
});

userInput.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    addItem(); 
  }
});

function addItem() {
  const taskText = userInput.value.trim();

  
  if (taskText === "") {
    return;
  }

  let h2 = document.createElement("h2");
  h2.innerHTML = " ✅ " + taskText; 

  h2.addEventListener('click', function () {
    h2.style.textDecoration = "line-through"; 
  });

  items.insertAdjacentElement('beforeend', h2); 
  userInput.value = "";
}
