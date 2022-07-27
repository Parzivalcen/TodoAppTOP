import { store } from "../StoreTask/store";

import format from "date-fns/format";

class Task {
  constructor(title, tag, dateCreated){
    this.title = title;
    this.tag = tag;
    this.done = 'undone';
    this.dueDate = null;
    this.dateCreated = dateCreated;
    this.notes = 'Add notes here';
    // add date created, storing the date the task is created. 
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
    <button class="TaskItemDelete"></button>
    `;
    
    taskPanel.appendChild(taskDiv);
    
  }
  
  // Take input
  static takeInput (tag) {
    const addBtn = document.querySelector('.add-task-btn');
    addBtn.addEventListener('click', () => {
      const title = document.querySelector('#add-task-text').value;
      if(title.length < 3){
        alert("Please enter more than three characters")
      }else{
        // get Today's date 
        // let date = new Date().toJSON().slice(0,10);
        const date = new Date();
        let newTask = new Task(title, tag, date);
        // add task to DOM
        Task.addTaskPanel(newTask);
        // Store task on Local storage
        store.addTaskToLS(newTask);
      }
      Task.clearInputField('#add-task-text');
    })
  }
  // Clear Input fields
  static clearInputField(element) {
    document.querySelector(element).value = '';
  }
  
  //Task Done
  static taskDone(e) {
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

  // Delete Task
  static deleteTask(e){
    if (e.target.classList.contains('TaskItemDelete')){
      e.target.parentElement.remove();
    }
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

export{Task};