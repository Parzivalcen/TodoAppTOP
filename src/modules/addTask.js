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
    const selectPriority = container.querySelector('#priority');
    const selectCategory= container.querySelector('#categories-list');
    const nav = document.querySelector('#categories-navigation');
    const toggle = document.querySelector('.mobile-toggle');
    const selection = document.querySelectorAll('.cat-drop');
    let selectedCategory;
    selection.forEach((cat)=>cat.addEventListener('click', ()=>{
      selectedCategory = cat.innerHTML;
      
    }));
    addTaskBtn.addEventListener('mouseup', ()=>{

      const taskTitle = container.querySelector('#add-task-title').value;
      const notes = container.querySelector('.textarea-main').innerHTML;
      let date = container.querySelector('#due-Date-main').value;
      

      console.log(selectedCategory);
      let category = selectedCategory;
      date = new Date(date);
      const dateCreated = new Date();

      const priority = selectPriority.options[selectPriority.selectedIndex].value;
      console.log(category);
      const task = new Task(taskTitle, category, dateCreated, notes, date, priority);


      // hide container
      container.setAttribute('data-visible', false);
      toggle.setAttribute('aria-expanded', false);
      nav.setAttribute('data-visible', false);

      store.addTaskToLS(task);
      this.addTaskPanelTWO(task);
    });
  },

  dropDownCategories (){
    const categoriesListCont = document.querySelector('.select-category');
    console.log(categoriesListCont);
    categoriesListCont.addEventListener('click', () => {
      const categoriesList = document.querySelector('.dropdown-categories');
      const visibility = categoriesList.getAttribute('data-visible');
      visibility === 'false' ? categoriesList.setAttribute('data-visible', true) : 
        categoriesList.setAttribute('data-visible', false);
      
     
    });

  },
  
  dropDownSelection(){
    const selection = document.querySelectorAll('.cat-drop');
    let selected = selection.forEach((cat)=>cat.addEventListener('click', ()=>{
      return cat.innerHTML;
      
    }));
    console.log(selected);
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