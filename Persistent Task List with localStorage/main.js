
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');


const addTask = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const liEl = document.createElement('li');
    liEl.textContent = taskInput.value;
    taskList.append(liEl); 
}


const clearAllTask = () => {
    const el = document.querySelectorAll('li');
    el.forEach(element => {
       element.remove();
       localStorage.removeItem('tasks')
    });
}

const loadTasks = () => {
    let tasks = localStorage.getItem('tasks')
    
}


addTaskBtn.addEventListener('click' , addTask);
clearAllBtn.addEventListener('click' , clearAllTask);

loadTasks()