const todo_form = document.querySelector('#todo-form');
const todo_list = document.querySelector('#todos');
const total_tasks = document.querySelector('#total-tasks');
const remaining_tasks = document.querySelector('#remaining-tasks');
const completed_tasks = document.querySelector('#completed-tasks');
const main_input = document.querySelector('#todo-form input');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

todo_form.addEventListener('submit', function (event) {
    event.preventDefault();

    let input_value = main_input.value;
    if (input_value === '') {
        return;
    }

    const task = {
        id: new Date().getTime(),
        name: input_value,
        isCompleted: false,
    }


})

