const toDoForm  = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input")
const toDoList  = document.getElementById("todo_list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 자바스크립트에서 어떠한 것이든 string으로 바꿔줌
}

function deleteToDo(event){
  const li = event.target.parentElement; // 해당 button의 부모인 li
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos(); // 불필요한 요소를 삭제한다기 보다는 새로운 배열을 만들어서 localStorage에 덮어 씌우는 느낌

}


function paintToDo(newTodo){
  const li     = document.createElement("li");
  li.id = newTodo.id;
  const span   = document.createElement("span");
  span.innerText   = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//   console.log("this is the turn of " + item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); // object형식으로 바꿔줌
  toDos = parsedToDos;
  parsedToDos.forEach((item) => paintToDo(item));
}

