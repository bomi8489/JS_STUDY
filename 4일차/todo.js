  
const containerBox = document.querySelector("#containerBox"),
      contents = containerBox.querySelector("#contents"),
      list = contents.querySelector("#list"),
      inputList = document.querySelector(".inputlist"),
      listForm = inputList.querySelector("#listForm"),
      newbtn = document.querySelector("#newbtn"),
      input = listForm.querySelector("input");

let todos = [];

function createList(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const div = document.createElement("div");
  div.innerText = text;
  delbtn.innerText = "삭제";

  const index = todos.length+1;

  delbtn.addEventListener("click", deleteList);
  
  li.appendChild(div);      // li태그에 div 자식추가
  li.appendChild(delbtn);   // li태그에 belbtn 자식추가
  list.appendChild(li);     // list(ul태그)에 li태그 추가

  
  li.id = index;

  const todoList = {
    item: text,
    id: index
  }

  todos.push(todoList);
  saveList();
}

function loadList() {
  const loadedList = localStorage.getItem("todos"); //로컬 스토리지에 있는 key가 toto인 요소들을 가져옴(문자열)
  if(loadedList !== null){
      const parsedData = JSON.parse(loadedList); //문자열로 가져온 요소들을 객체로 변환
      parsedData.forEach(function(toDo){ //객체의 text들을 edittodolist 함수에 넣어 리스트를 가져옴
        createList(toDo.text);
      });
  }
}

function saveList() {     // 로컬스토리지에 "todos" 키로 객체를 value로 저장
  localStorage.setItem("todos", JSON.stringify(todos));
}

function submitList(e) {  
  e.preventDefault();     // 기존에 존재하는 이벤트(새로고침) 중지
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