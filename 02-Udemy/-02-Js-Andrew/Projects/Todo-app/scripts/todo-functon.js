'use strict'

//  Fetch extisting todos from localStorage
let getSavedTodos = () => {
    const todoJONS = localStorage.getItem('todos')

    try {
        return todoJONS ? JSON.parse(todoJONS) : []
    } catch (e) {
        return []
    }
}

// Save the todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos' , JSON.stringify(todos))
}


// Remove by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1){
        todos.splice(todoIndex , 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    
    if (todo) {
        todo.completed = !todo.completed
    }
}
// render application todos
const renderTodos = (todos , filters) => {
    const todoEl = document.querySelector('#todos')
    let filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
    
    const incompletedTodo = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generatesummaryDOM(incompletedTodo))
    
    if(filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
            })
        } else {
            const messageEl = document.createElement('p')
            messageEl.classList.add('empty-message')
            messageEl.textContent = 'No to-dos to show'
            todoEl.appendChild(messageEl)
        }

}

// Get the dom elements for an andividaul note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // setup todo checkbox
    checkbox.setAttribute('type' , 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change' , () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos , filters)
    })
    // setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

     // setup container
     todoEl.classList.add('list-item')
     containerEl.classList.add('list-item__container')
     todoEl.appendChild(containerEl)
    
    //  setup the remvebutton
    removeButton.textContent = 'remove'
    removeButton.classList.add('button' , 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click' , () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos , filters)
    })
    return todoEl
}

// Get the DOM element for list summar 
const generatesummaryDOM = (incompletedTodo) => {
    const summary = document.createElement('h2')
    const plural = incompletedTodo.length === 1 ? '' : 's'
    summary.textContent = `You have ${incompletedTodo.length} todo${plural} left`
    return summary
}
