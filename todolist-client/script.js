// Get elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const errorMessage = document.getElementById('error-message'); // Error message element

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="removeTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Add task to the list
addButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = ''; // Clear input field
        errorMessage.textContent = ''; // Clear error message
        loadTasks(); // Reload tasks
    } else {
        errorMessage.textContent = 'Please enter a task before adding.'; // Display error message
    }
});

// Remove task from the list
function removeTask(index) {
    const confirmation = confirm('Are you sure you want to delete this task?'); // Confirm deletion
    if (confirmation) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks(); // Reload tasks
    }
}

// Initial load
loadTasks();