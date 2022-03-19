
const deleteObject = (tasks, id) => {
    return tasks.map((task, index, tasks) => {
        if (task.id == id) {
            tasks.splice(index, 1);
        }
        return task;
    })
}

const tasks = [
    { id: 1, description: "Go to grocery store" },
    { id: 2, description: "Create blog project" },
    { id: 3, description: "Update css grid guide" },
    { id: 4, description: "Make Graphic Designs" },
];


deleteObject(tasks, 3)

const updatedTasks = deleteObject(tasks, 3)

console.log(updatedTasks)