import { getTasks, localStoraddTask } from "../StoreTask/store";

class Task {
  constructor(title, tag){
    this.title = title;
    this.tag = tag;
    this.done = 'undone';
    // add properties like done 
  }
}
const displayTasks = () => {
  let tasks = getTasks();
  tasks.forEach((task) => {
    addTaskPanel(task)
    
  });
}
const addTaskPanel = (task) => {
  const taskPanel = document.querySelector('.tasks');
  let taskDiv = document.createElement('div');
  taskDiv.classList.add('task', 'grid');
  taskDiv.innerHTML = `
  <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
  <div class="task-content">
    <p class="task-title">${task.title}</p>
    <p class="task-tag">${task.tag}</p>
  </div>
  <button class="TaskItemDelete">X</button>
  `;
  console.log(taskDiv);
  taskPanel.appendChild(taskDiv);
}

const takeInput = (tag) => {
  const addBtn = document.querySelector('.add-task-btn');
  addBtn.addEventListener('click', () => {
    const title = document.querySelector('#add-task-text').value;
    let newTask = new Task(title, tag);
    // add task to DOM
    addTaskPanel(newTask);
    // Store task on Local storage
    localStoraddTask(newTask);
  })
}

const deleteTask = (e) => {
  if (e.target.classList.contains('TaskItemDelete')){
    e.target.parentElement.remove();
  }
}

const taskDone = (e) => {
  if (e.target.classList.contains('TaskItemCheckbox')){
    const task = e.target.parentElement;
    
    if(task.getAttribute('aria-disabled')=='false'){
      task.setAttribute('aria-disabled', true);
      
    }else{
      task.setAttribute('aria-disabled', false);
    }
    
  }
}


export{
  addTaskPanel, 
  takeInput, 
  deleteTask, 
  taskDone,
  displayTasks};