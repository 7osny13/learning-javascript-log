// --- DOM Element Selection (This part is fine) ---
const taskInput = document.getElementById("todoInput");
const addTAsk = document.getElementById("addBtn");
const removeLastTask = document.getElementById("removeLastBtn");
const searchInput = document.getElementById('searchInput');
const searchTask = document.getElementById("searchBtn");
const tasksContainer = document.getElementById("todoList");


const addTaskToDOM = (taskText) => {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    tasksContainer.appendChild(newTask);
};

// --- Main application logic using closure ---
function tasks() {
    // This private 'list' array is the single source of truth.
    const list = [];

    return {
        add: () => {
            // Get the trimmed value from the input
            const value = taskInput.value.trim();

            // 1. Validate the input
            if (value === "") {
                alert("Please enter a task.");
                return; // Exit the function if input is empty
            }

            // 2. Check for existence ONLY in our reliable JS array
            if (list.includes(value)) {
                alert("This task already exists.");
            } else {
                // 3. If it's new, update the state and the DOM
                
                // Update the state (the array)
                list.push(value);
                
                // Update the view (the DOM) by calling our simple function
                addTaskToDOM(value);
                
                // Clear the input field for the next task
                taskInput.value = "";
            }
        },

        removeLast: () => {
          if (list.length > 0) {
            list.pop(); // Remove from the array
            if (tasksContainer.lastChild) {
              tasksContainer.removeChild(tasksContainer.lastChild); // Remove from DOM
            }
          }
        },

        search: () => {
            const searchValue = searchInput.value.trim();
            if(list.includes(searchValue)){
                alert('search value is exist')
            } else {
                alert('search value is not exist')
            }
        }


}}

// --- Event Listeners ---
const task = tasks();

addTAsk.addEventListener("click", task.add);
removeLastTask.addEventListener('click' , task.removeLast);
searchTask.addEventListener('click' , task.search);
