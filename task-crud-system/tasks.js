// Array to store tasks
let tasks = [];

// Task model
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// Function to add a new task
function addTask(name, description) {
    const id = tasks.length + 1; // Generate a unique ID
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    console.log(`Task added: ${name}`);
}

// Function to view all tasks
function viewAllTasks() {
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        console.log("Tasks:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

// Function to update a task
function updateTask(id, name, description) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        console.log(`Task updated: ${name}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1)[0];
        console.log(`Task deleted: ${deletedTask.name}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Example usage
addTask("Learn JavaScript", "Complete JavaScript basics");
addTask("Build a CRUD system", "Implement CRUD operations for tasks");
viewAllTasks();

updateTask(1, "Learn JavaScript Basics", "Complete JavaScript fundamentals");
viewAllTasks();

deleteTask(2);
viewAllTasks();