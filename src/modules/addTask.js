import { store } from '../StoreTask/store';

class Task {
  constructor(title, category, dateCreated){
    this.title = title;
    this.category = category;
    this.done = false;
    this.dueDate = null;
    this.dateCreated = dateCreated;
    this.notes = undefined;
    // add date created, storing the date the task is created. 
  }

  // Add task with description BTN
  static showAddTaskForm (){
    const addTaskbtn = document.querySelector('.btn-panel-task');
    addTaskbtn.addEventListener('mouseup', ()=>{
      const addTaskContainer = document.querySelector('.add-task-container');
      const visibility = addTaskContainer.getAttribute('data-visible');
      visibility === 'false' ? addTaskContainer.setAttribute('data-visible', true) : addTaskContainer.setAttribute('data-visible', false);
      
      
    });
  }

  // Add Task TO Panel
  static addTaskPanel (task) {
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    
    // Display task done or undone
    if (task.done) {
      taskDiv.setAttribute('aria-disabled', true);
    }else{
      taskDiv.setAttribute('aria-disabled', false);
    }
    taskDiv.innerHTML = `
    <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
    <div class="task-content">
      <p class="task-title">${task.title}</p>
      <p class="task-category">${task.category}</p>
    </div>
    <button class="TaskItemDelete"></button>
    `;
    
    taskPanel.appendChild(taskDiv);
    
  }
  
  

  // Take input
  static takeInputEvent (category) {
    // Funtion to take input on enter key pressed or click
    const takeInput = (category) => {
      const title = document.querySelector('#add-task-text').value;
      if(title.length > 0){
        // get Today's date 
        const date = new Date();
        let newTask = new Task(title, category, date);
        // add task to DOM
        Task.addTaskPanel(newTask);
        // Store task on Local storage
        store.addTaskToLS(newTask);
      }else{
        alert('Please enter at least one character');
      }
      Task.clearInputField('#add-task-text');
    };
    const taskContainer = document.querySelector('.add-task-container');
    const addBtn = document.querySelector('.add-task-btn');
    // ENTER KEY
    taskContainer.addEventListener('keypress', (e) => {
      if(e.key === 'Enter'){
        takeInput(category);
      }
    });
    // mouseup unlike click does not interact with the enter key
    addBtn.addEventListener('mouseup', () =>{
      takeInput(category);
    });
    // mobile handler
    // addBtn.addEventListener('touchend', () =>{
    //   takeInput(category);
    // })
  }

  // Clear Input fields
  static clearInputField(element) {
    document.querySelector(element).value = '';
  }
  
  // Change task dones status on screen
  static taskDone(e) {
    if (e.target.classList.contains('TaskItemCheckbox')){
      const task = e.target.parentElement;
    
      let title = e.target.nextElementSibling.firstElementChild.innerHTML;
      const tasks = store.getTasks();
      /*Get index by the task title pressed. 
      So that we change the state of only that task*/ 
      let taskIndex = tasks.findIndex((task) => task.title == title );
      if (tasks[taskIndex].done){
        task.setAttribute('aria-disabled', false);
        
      }else{
        task.setAttribute('aria-disabled', true);
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
      Task.addTaskPanel(task);
      
    });
  };
  
  static displayTasksCategorically = (category) => {
    let tasks = store.getTasks();
    tasks.map((task) => {
      if(task.category == category) {
        Task.addTaskPanel(task);
      }
    });
  };
  
}

export{Task};