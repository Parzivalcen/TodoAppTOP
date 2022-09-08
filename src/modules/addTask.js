import { store } from '../StoreTask/store';

class Task {
  constructor(title, category, dateCreated, notes, dueDate, priority){
    this.title = title;
    this.category = category;
    this.done = false;
    this.dueDate = dueDate === undefined ? null : dueDate;
    this.dateCreated = dateCreated;
    this.notes = notes === undefined ? undefined : notes;
    this.priority = priority;
    // add date created, storing the date the task is created. 
  }
}

const addTask = {

  // add task from main task btn
  addTaskFromPanel (){
    const addTaskBtn = document.querySelector('.add-main-task-btn');
    const container = document.querySelector('.add-task-container-main');
    let selectedPriority;
    const selectionPriority = container.querySelectorAll('.priority-drop');
    const selectionCat = document.querySelectorAll('.cat-drop');
    let selectedCategory;

    // CATEGORY SELECTIONCat
    selectionCat.forEach((cat)=>cat.addEventListener('click', ()=>{
      document.querySelector('.select-category').innerHTML = `${cat.textContent} <span class="dropdown-icon"></span>`;
      document.querySelector('.dropdown-categories').setAttribute('data-visible', false);
      return selectedCategory = cat.innerHTML;
    }));
    // PRIORITY SELECTION
    selectionPriority.forEach((pri)=>pri.addEventListener('click',()=>{
      document.querySelector('.priority').innerHTML = `${pri.textContent} <span class="dropdown-icon"></span>`;
      document.querySelector('.dropdown-priorities').setAttribute('data-visible', false);
      return selectedPriority = pri.innerHTML;
    }));

    // ADD TASK BTN IS CLICKED
    addTaskBtn.addEventListener('mouseup', ()=>{

      const taskTitle = container.querySelector('#add-task-title').value;
      const notes = container.querySelector('.textarea-main').innerHTML;
      let date = container.querySelector('#due-Date-main').value;
      

      console.log(selectedCategory);
      let category = selectedCategory;
      date = new Date(date);
      const dateCreated = new Date();

      const priority = selectedPriority;
      console.log(category);
      const task = new Task(taskTitle, category, dateCreated, notes, date, priority);

      // Reset Panel
      this.resetCatAddTaskPanel(container);
      

      store.addTaskToLS(task);
      this.addTaskPanelTWO(task);
    });
  },

  resetCatAddTaskPanel(container){
    const nav = document.querySelector('#categories-navigation');
    const toggle = document.querySelector('.mobile-toggle');
    // empty fields
    container.querySelector('#add-task-title').value = '';
    container.querySelector('.textarea-main').innerHTML = '';
    document.querySelector('.select-category').innerHTML = 'Select Category: <span class="dropdown-icon"></span>';
    // hide container
    container.setAttribute('data-visible', false);
    toggle.setAttribute('aria-expanded', false);
    nav.setAttribute('data-visible', false);
  },

  //DROP DOWN FOR CATEGORIES AND PRIORITY
  dropDown(titleClass, dropDownClass){
    const dropDownTitlte = document.querySelector(titleClass);
    dropDownTitlte.addEventListener('click', () => {
      const dropDownList = document.querySelector(dropDownClass);
      const visibility = dropDownList.getAttribute('data-visible');
      visibility === 'false' ? dropDownList.setAttribute('data-visible', true) : 
        dropDownList.setAttribute('data-visible', false);
    });
  },

  addTaskCancel(){
    const addTaskContainer = document.querySelector('.add-task-container-main');
    addTaskContainer.querySelector('.cancel-task-btn').addEventListener('click', ()=>{
      addTaskContainer.setAttribute('data-visible', false);
    });
  },

  // HTML text
  taskDivHTML (task){
    return `
    <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
    <div class="task-content">
    <p class="task-title">${task.title}</p>
    <p class="task-category">${task.category}</p>
    </div>
    <button class="TaskItemDelete"></button>
    `;
  },

  // Add Task TO Panel
  addTaskPanel (task) { 
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    // Display task done or undone
    if (task.done) {
      taskDiv.setAttribute('aria-disabled', true);
    }else{
      taskDiv.setAttribute('aria-disabled', false);
    }
    taskDiv.innerHTML = this.taskDivHTML(task);
    taskPanel.appendChild(taskDiv);
  },

  // Add Task TO Panel TWO
  addTaskPanelTWO (task) {
    const categoryTitle = document.querySelector('.task-category-title').innerText; 
    console.log( document.querySelector('.task-category-title').innerText); 
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    taskDiv.setAttribute('aria-disabled', false);
    
    taskDiv.innerHTML = this.taskDivHTML(task);
    if (categoryTitle === 'All Tasks' || categoryTitle === task.category){
      taskPanel.appendChild(taskDiv);
    }
  },
  
  
  
  // Take input
  takeInputEvent (category) {
    // Funtion to take input on enter key pressed or click
    const takeInput = (category) => {
      const title = document.querySelector('#add-task-text').value;
      if(title.length > 0){
        // get Today's date 
        const date = new Date();
        let newTask = new Task(title, category, date);
        // add task to DOM
        this.addTaskPanel(newTask);
        // Store task on Local storage
        store.addTaskToLS(newTask);
      }else{
        alert('Please enter at least one character');
      }
      this.clearInputField('#add-task-text');
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
  },

  // Clear Input fields
  clearInputField(element) {
    document.querySelector(element).value = '';
  },
  
  // Change task dones status on screen
  taskDone(e) {
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
  },
  
  // Delete Task
  deleteTask(e){
    if (e.target.classList.contains('TaskItemDelete')){
      e.target.parentElement.remove();
    }
  },
  
  // Display tasks
  displayTasks () {
    let tasks = store.getTasks();
    tasks.forEach((task) => {
      this.addTaskPanel(task);
      
    });
  },
  
  displayTasksCategorically (category) {
    let tasks = store.getTasks();
    tasks.map((task) => {
      if(task.category === category) {
        this.addTaskPanel(task);
      }
    });
  },
  
};

Object.freeze(addTask);
export{Task, addTask};