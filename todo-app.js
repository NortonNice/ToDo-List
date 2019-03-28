const todos = [
    {
        text: 'Order Cat Food',
        completed: true
    },
    {
        text: 'Apply for Jobs',
        completed: true
    },
    {
        text: 'Attend JS Meetups',
        completed: false
    },
    {
        text: 'Request Time Off',
        completed: false
    }
]

// const ps = document.querySelectorAll('p')
// ps.forEach((p) => {
//    if (p.textContent.includes('the')) {
//        p.remove()
//    }
// })

// Setup a DIV container for ToDos
// Setup filters (searchText) and write a new filter input to change it
// Create a renderToDos function to render and rerender the latest data

const filters = {
    searchText: ''
}

const renderToDos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const stillTodo = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${stillTodo.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach((todo) => {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })

    

    // filteredTodos.forEach((todo) => {
    //     const todoEl = document.createElement('p')
    //     todoEl.textContent = todo.text
    //     document.querySelector('#todos').appendChild(todoEl)
    // })
}

renderToDos(todos, filters)

// Listening for new todoss
document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log('I be addin\' dem new ToDos!')
})

document.querySelector('#search-todos').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderToDos(todos, filters)
})

















