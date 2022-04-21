let taskInput = document.querySelector('#task-input');
let addButton = document.querySelector('#add-button');
let list = document.querySelector('#list');
let toast = document.querySelector('#liveToast');

let taskList = [];

window.addEventListener('DOMContentLoaded', () => {
    taskList = JSON.parse(localStorage.getItem('tasklist')) || [];
    updateTasks(taskList);
})

addButton.addEventListener('click', () => {
    let value = taskInput.value.replace(/\s+/, "");
    if (value.length > 0) {
        taskList.push({desc: value, done: false})
        updateTasks(taskList);
        taskInput.value = "";
        toast.children[1].innerHTML = "Task added successfully";
        new bootstrap.Toast(toast).show();
    } else {
        toast.children[1].innerHTML = "Please enter a task";
        new bootstrap.Toast(toast).show();
    }
})

list.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains("btn-close")) {
        deleteTask(target.parentElement);
        target.parentElement.remove();
    } else {
        let index = elementIndex(target);
        console.log(index);
        taskList[index].done = !taskList[index].done;
        updateTasks(taskList);
    }

})

function updateTasks(tasklist) {
    list.innerHTML = "";
    tasklist.forEach(task => {
        let isDone = task.done ? "✔" : "❌";
        let bgColor = task.done ? "bg-warning" : "bg-light";
        list.innerHTML +=
            `<li class="list-group-item ${bgColor}">
                <span>${isDone}</span>
                <span>${task.desc}</span>
                <button type="button" class="btn-close float-end"></button>
        </li>`
    })
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
}

function deleteTask(el) {
    let index = elementIndex(el);
    taskList.splice(index, 1);
    updateTasks(taskList);
}

function elementIndex(el) {
    let i = 0;
    while (el.previousElementSibling) {
        el = el.previousElementSibling;
        i++;
    }
    return i;
}

