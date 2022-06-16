document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let task = document.getElementById('new-task-description').value;
    let newTask  = document.createElement('li');
    newTask.appendChild(document.createTextNode(task))
    document.getElementById('tasks').appendChild(newTask);
  })
});
