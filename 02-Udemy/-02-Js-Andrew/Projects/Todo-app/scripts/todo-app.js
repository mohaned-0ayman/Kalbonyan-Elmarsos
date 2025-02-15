'use strict'

let todos = getSavedTodos()

    const filters ={
        searchText: '',
        hideCompleted: false
    }

  
    renderTodos(todos , filters)
    
    document.querySelector('#search-text').addEventListener('input' , (e) => {
        filters.searchText = e.target.value
        renderTodos(todos , filters)
    })
    
    document.querySelector('#new-todo').addEventListener('submit' , (e) => {
        const text = e.target.elements.text.value.trim()
        e.preventDefault()

        if(text.length > 0){
            todos.push({
                id: uuidv4(),
                text,
                completed: false
            })
        }

        saveTodos(todos)
        renderTodos(todos , filters)
        e.target.elements.text.value = ''
    })

    document.querySelector('#hide-completed').addEventListener('change' , (e) => {
        filters.hideCompleted = e.target.checked
        renderTodos(todos , filters)
    })

// // Listen for new todo creation
// document.querySelector('#todo').addEventListener('click' , function(){
//     console.log('Did you do all tasks?')
// })

// Listen for todo next change
// document.querySelector('#new-todos').addEventListener('input' , function(e){
//     console.log(e.target.value)
// })







