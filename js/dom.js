const { addToDo, LIST, updateStorage } = require('./app.js');

// Elementos del DOM
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Configuración inicial
if (dateElement) {
  const options = { weekday: "long", month: "short", day: "numeric" };
  dateElement.innerHTML = new Date().toLocaleDateString("en-US", options);
}

// Manejadores de eventos
if (clear) {
  clear.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

if (input) {
  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      const toDo = input.value.trim();
      if (toDo) {
        const newTask = addToDo(toDo, LIST.length, false, false);
        list.insertAdjacentHTML(newTask.position, newTask.html);
        LIST.push({ name: toDo, id: LIST.length, done: false, trash: false });
        updateStorage();
        input.value = "";
      }
    }
  });
}

if (list) {
  list.addEventListener("click", function(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    
    if (elementJob === "complete") {
      element.classList.toggle("fa-check-circle");
      element.classList.toggle("fa-circle-thin");
      element.parentNode.querySelector(".text").classList.toggle("lineThrough");
      LIST[element.id].done = !LIST[element.id].done;
    } else if (elementJob === "delete") {
      element.parentNode.parentNode.removeChild(element.parentNode);
      LIST[element.id].trash = true;
    }
    
    updateStorage();
  });
}