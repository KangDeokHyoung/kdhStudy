const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteTodo = (e) => {
  e.preventDefault();
  const li = e.target.parentElement;
  li.remove();

  toDos = toDos.filter((el) => {
    return el.id !== parseInt(li.id);
  });
  saveToDos();

  //   localStorage.removeItem(TODOS_KEY);
};

const padintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "삭제";

  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo.text;
  toDoList.appendChild(li);
};

function handleToDosubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //   console.log(newTodo, toDoInput.value);
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  padintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

function sayHello(item) {
  //   console.log("하이", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;

  parsedToDos.forEach(padintTodo);
}

//newTodoObj.id 와 비교를 하면 될듯
