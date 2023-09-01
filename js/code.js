const todo_form = document.querySelector('#todo-form');
const todo_list = document.querySelector('#todos');
const total_tasks = document.querySelector('#total-tasks');
const remaining_tasks = document.querySelector('#remaining-tasks');
const completed_tasks = document.querySelector('#completed-tasks');
const main_input = document.querySelector('#task_input');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (localStorage.getItem('tasks')) {
    tasks.map((task) => {
        create_task(task)
    })
}

function create_task(task) {
    const task_element = document.createElement('li');

    task_element.setAttribute('id', task.id);
    if (task.isCompleted) {
        task_element.classList.add('complete');
    }

    let task_element_html = `
    <div class="tasks_container">
     <input class="tick_input" name="tasks" type="checkbox" id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
        <span ${!task.isCompleted ? 'contenteditable' : ''}>${task.name}</span>
         <button class="remove_task" >
         <p class="remove_task_icon" >x</p>
         </button>
    </div>
    `
    task_element.innerHTML = task_element_html;
    todo_list.appendChild(task_element);
    // count_tasks();
}

function remove_task(_task_id) {
    tasks = tasks.filter((task) =>
        task.id !== parseInt(_task_id));


    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById(_task_id).remove();

    // count_tasks();
}

function count_tasks() {
    const completed_tasks_array = tasks.filter((task) => {
        task.isCompleted = true;
    })
    total_tasks.textContent = tasks.length;
    completed_tasks.textContent = completed_tasks_array.length;
    remaining_tasks.textContent = tasks.length - completed_tasks_array.length;
}

function update_task(task_id, event_target) {
    const task = tasks.find((task) => task.id === parseInt(task_id));

    if (event_target.hasAttribute('contenteditable')) {
        task.name = event_target.textContent;
    } else {
        const span = event_target.nextElementSibling;
        const parent = event_target.closest('li');

        task.isCompleted = !task.isCompleted;
        if (task.isCompleted) {
            span.removeAttribute('contenteditable');
            parent.classList.add('complete');
        } else {
            span.setAttribute('contenteditable', 'true');
            parent.classList.remove('complete');
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));

        // count_tasks();
    }


    localStorage.setItem('tasks', JSON.stringify(tasks));

    // count_tasks();
    //works in wrong way plus with prikols
}


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

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    create_task(task);
    todo_form.reset();
    main_input.focus();
    // count_tasks();
})

todo_list.addEventListener('click', (event) => {
    if (event.target.classList.contains("remove_task") || event.target.classList.contains('remove_task_icon')) {
        const task_id = event.target.closest('li').id;

        remove_task(task_id);
    }
})

todo_list.addEventListener('input', (event) => {
    const task_id = event.target.closest('li').id;
    update_task(task_id, event.target);
})