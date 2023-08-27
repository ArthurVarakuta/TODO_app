import {create_tasks_map, tasks_array} from "./utils/create_tasks_map.js";
import {create_task_buttons_map, delete_task_buttons_array} from "./utils/create_delete_buttons_map.js";

let task_input = document.getElementById('task_text');
let delete_task_button = document.getElementById('delete_task_button');
let add_task_button = document.getElementById('task_add_button');
let edit_task_button = document.getElementById('edit_task_button');





add_task_button.addEventListener('click', function () {
    let task = document.createElement('p');
    task.setAttribute('id', 'task_element');
    let text = document.createTextNode(task_input.value);
    task.appendChild(text);
    document.body.appendChild(task); // Append the task <p> element to the document
    create_tasks_map(task);
    tasks_array.push(task);
    console.log(tasks_array);
});


edit_task_button.addEventListener('click', function () {
    let delete_task_button = document.createElement('button');
    delete_task_button.setAttribute('id', 'delete_task_button');
    let text = document.createTextNode('x');
    delete_task_button.appendChild(text);
    document.body.appendChild(delete_task_button);
    create_task_buttons_map(delete_task_button);
    delete_task_buttons_array.push(delete_task_button);
    console.log(delete_task_buttons_array);
})


// delete_task_button.addEventListener('click', function () {
//     // task deletion logic
// // .removeChild()
//     if (){
//         task_element.remove()
//     }
// })
