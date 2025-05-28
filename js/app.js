// Variables globales
let LIST = [];
let id = 0;

// Función addToDo CORREGIDA
function addToDo(toDo, id, done, trash) {
    if (trash || !toDo.trim()) return null;
    
    const newItem = {
        name: toDo,
        id: id,
        done: done,
        trash: trash
    };
    
    LIST.push(newItem); // <- Ahora sí actualiza LIST
    
    return {
        html: `<li class="item">
                <i class="fa ${done ? "fa-check-circle" : "fa-circle-thin"} co" job="complete" id="${id}"></i>
                <p class="text ${done ? "lineThrough" : ""}">${toDo}</p>
                <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
              </li>`,
        position: "beforeend"
    };
}

// Función para pruebas
function resetList() {
    LIST = [];
    id = 0;
}

module.exports = {
    addToDo,
    LIST,
    resetList
};