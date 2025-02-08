let newTask = document.querySelector('#taskInput');
let ul = document.querySelector('#taskList');
let addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener("click", function() {
    if (newTask.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let item = document.createElement('li');

    item.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${newTask.value}</span>
        <button class="delete">🗑️</button>
    `;

    ul.appendChild(item);
    newTask.value = "";
});

// Task Deletion & Completion
ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});
