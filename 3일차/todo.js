  
const list = document.querySelector("#list");
const listForm = document.querySelector("#listForm");

function show_list(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const div = document.createElement("div");
  div.innerText = text;
  delbtn.innerText = "지우기";

  delbtn.addEventListener("click", (e) => { //클릭시 li태그를 삭제하는 이벤트리스너
    list.removeChild(e.target.parentElement);
  });
  
  li.appendChild(div);      // li태그에 div 자식추가
  li.appendChild(delbtn);   // li태그에 belbtn 자식추가
  list.appendChild(li);     // list(ul태그)에 li태그 추가
}

listForm.addEventListener("submit", (e) => {
  e.preventDefault();     // 기존에 존재하는 이벤트를 사용하지 말라는 함수
  const input = e.target.querySelector("input");
  show_list(input.value);
  input.value = "";
});