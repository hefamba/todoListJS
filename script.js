const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos){
    todos.forEach(todo => addToDo(todo))
}

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    addToDo()
})

function addToDo(todo){
    let todoText = input.value

    if (todo){
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
       todoEl.innerText = todoText
       todosUl.appendChild(todoEl)

       todoEl.addEventListener('click' , ()=>{
        todoEl.classList.toggle('completed')
        updateLS()
       })

       todoEl.addEventListener('contextmenu', (event) =>{
        event.preventDefault()
        todoEl.remove()
        updateLS()
       })
    }
    input.value = ''
    updateLS()
}

function updateLS(){
    const todosEl = document.querySelectorAll('li')

    const todosArr = []

    todosEl.forEach(todo => todosArr.push({
        text: todo.innerText,
        completed: todo.classList.contains('completed') 
    }))

    localStorage.setItem('todos', JSON.stringify(todosArr))
}