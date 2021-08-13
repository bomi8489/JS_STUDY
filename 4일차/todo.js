const containerBox = document.querySelector("#containerBox"),
    contents = containerBox.querySelector("#contents"),
    list = contents.querySelector("#list"),
    inputList = document.querySelector(".inputlist"),
    listForm = inputList.querySelector("#listForm"),
    input = listForm.querySelector("input");


let todos = [];

function createList(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const div = document.createElement("div");
  div.innerText = text;
  delbtn.innerText = "삭제";

  const index = todos.length+1;


  
  li.appendChild(div);      // li태그에 div 자식추가
  li.appendChild(delbtn);   // li태그에 belbtn 자식추가
  list.appendChild(li);     // list(ul태그)에 li태그 추가
  delbtn.addEventListener("click", deleteList);
  
  li.id = index;

  const todoList={
    item : text,
    id : index
  }

  todos.push(todoList);
  saveList();
}

function loadList() {
  const loadedList = localStorage.getItem("todos"); 
  if(loadedList !== null){
      const parsedData = JSON.parse(loadedList); 
      parsedData.forEach(function(toDo){
        createList(toDo.text);
      });
  }
}

function saveList() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function submitList(e) {  
  e.preventDefault();
  const inpuvalue = input.value;
  createList(inpuvalue);
  input.value = "";
}

function deleteList(event) {
  list.removeChild(event.target.parentNode);
  todos = todos.filter((todos) => {
    return todos.id !== parseInt(event.target.parentNode.id);
  });
  saveList();
}

function init() {
  loadList();
  listForm.addEventListener("submit", submitList);
}

init();