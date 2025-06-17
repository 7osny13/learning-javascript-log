import { addTask } from "./todo.js";
import { displayTask } from "./ui.js";
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const add = () => {
    const value = addTask(taskInput);
    displayTask(value , taskList);
}




addTaskBtn.addEventListener('click' , add);