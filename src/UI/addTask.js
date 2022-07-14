import { store } from "../StoreTask/store";

class Task {
  constructor(title, tag){
    this.title = title;
    this.tag = tag;
    this.done = 'undone';
    // add properties like done 
  }
  // Add Task TO Panel
  static addTaskPanel (task) {
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    
    // Display task done or undone
    if (task.done == 'undone') {
      taskDiv.setAttribute('aria-disabled', false)
    }else{
      taskDiv.setAttribute('aria-disabled', true)
    }
    taskDiv.innerHTML = `
    <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
    <div class="task-content">
    <p class="task-title">${task.title}</p>
    <p class="task-tag">${task.tag}</p>
    </div>
    <button class="TaskItemDelete">X</button>
    `;
    
    taskPanel.appendChild(taskDiv);
  }

  // Take input
  static takeInput (tag) {
    const addBtn = document.querySelector('.add-task-btn');
    addBtn.addEventListener('click', () => {
      const title = document.querySelector('#add-task-text').value;
      let newTask = new Task(title, tag);
      // add task to DOM
      Task.addTaskPanel(newTask);
      // Store task on Local storage
      store.addTaskToLS(newTask);
    })
  }

  // Display tasks
  static displayTasks = () => {
    let tasks = store.getTasks();
    tasks.forEach((task) => {
      Task.addTaskPanel(task)
      
    });
  }
  
  static displayTasksCategorically = (category) => {
    let tasks = store.getTasks();
    tasks.map((task) => {
      if(task.tag == category) {
        Task.addTaskPanel(task);
      }
    })
  }
  
}
////////////////////



const deleteTask = (e) => {
  if (e.target.classList.contains('TaskItemDelete')){
    e.target.parentElement.remove();
  }
}

const taskDone = (e) => {
  if (e.target.classList.contains('TaskItemCheckbox')){
    const task = e.target.parentElement;

    let title = e.target.nextElementSibling.firstElementChild.innerHTML;
    const tasks = store.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == title )
    if (tasks[taskIndex].done == 'undone'){
      task.setAttribute('aria-disabled', true);
      
    }else{
      task.setAttribute('aria-disabled', false);
    }
    
  }
}


export{ 
  deleteTask, 
  taskDone,
  Task};