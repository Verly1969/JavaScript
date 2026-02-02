window.addEventListener("DOMContentLoaded", () => {

const text = document.getElementById("text");
const btnAdd = document.getElementById("btnAdd");
const ul = document.getElementById("ul");

function addTodo(){
    const btnTrash = document.createElement("button");
    const checkbox = document.createElement("input", );
    checkbox.type = "checkbox";
    const li = ul.appendChild(document.createElement("li"));
    li.style.textTransform = "capitalize";

    

    btnTrash.textContent = "❌";
    btnTrash.style.cursor = "pointer";
    btnTrash.addEventListener("click", removeTodo);
    
    li.textContent = " " + text.value + " ";
    li.insertAdjacentElement("afterbegin", checkbox);
    li.insertAdjacentElement("beforeend", btnTrash);
    text.value = "";
}

function removeTodo(event){
    event.target.parentElement.remove();
}

text.addEventListener("keyup", (event) => {
    if (event.key === "Enter") addTodo();
})

btnAdd.addEventListener("click", () => {
    const clearValue = text.value.trim();
    if (clearValue != ""){
        addTodo();
        text.focus();
    } else {
        text.value = "";
        text.focus();
    }
})


});
