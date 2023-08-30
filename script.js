const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

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
       })

       todoEl.addEventListener('contextmenu', (event) =>{
        event.preventDefault()
        todoEl.remove()
       })
    }


    input.value = ''


}