/** @format */
const form = document.getElementById('form');
const todoUL = document.getElementById('todos');
const input = document.getElementById('input');

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
  todos.forEach((todo) => {
    addToDO(todo);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addToDO();
});

function addToDO(todo) {
  let todoText = input.value;

  // checking to see if a todo is already passed in.
  if (todo) {
    todoText = todo.text;
  }

  //constructing a list item
  if (todoText) {
    const todoEl = document.createElement('li');
    // now check to see if the todo is marked as completed
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    // adding the completed class element
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    // removing the todoEl
    todoEl.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      todoEl.remove();
      updateLS();
    });

    // adding to the DOM
    todoEl.innerText = todoText;
    todoUL.appendChild(todoEl);
    // reseting the value of the input
    input.value = '';
  }
  updateLS();
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');

  let todos = [];

  todosEl.forEach((todo) =>
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed'),
    })
  );
  localStorage.setItem('todos', JSON.stringify(todos));
}
