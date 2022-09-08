import { store } from '../StoreTask/store';
import { Task, addTask } from './addTask';
import { home } from './home';
import '../styles/sassModules/_panel.scss';

export default class panel {
  static panel () {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.innerHTML =   `
      <div id="categories-navigation" class="categories-navigation flex" data-visible="false">
        <div class="shortcuts">
          <button class="btn btn-panel-task">Add Task</button>        
          <p class="today">today</p>
          <p class="this-week">this week</p>
          <p class="next-week">next week</p>
        </div>
      
        <div class="categories-title">
          <h2>Categories</h2>
          <span class="add-categories" id="add-categories"></span>
        </div>    

        <div class="category">
            <p class="category--title">All Tasks</p>                   
        </div>
        <div class="category">
            <p class="category--title">Shopping List</p>
        </div>
        <div class="category">    
            <p class="category--title">Work</p>  
        </div>
      </div> 
    `;
    return panel;
  }

  // Toggle
  static toggle () {
    const toggle = document.querySelector('.mobile-toggle');
    const categoriesNav = document.querySelector('.categories-navigation');
    const addTaskBtn =document.querySelector('.add-task-header');
    toggle.addEventListener('click', () => {
      const visibility = categoriesNav.getAttribute('data-visible');
      const visibilityAddTask = addTaskBtn.getAttribute('data-visible');
      // Add new Task BTN dissappear on toggle click.
      visibilityAddTask === 'true' ? addTaskBtn.setAttribute('data-visible', false) : addTaskBtn.setAttribute('data-visible', true);
      if (visibility ===  'false')
      {
        // Expand nav
        categoriesNav.setAttribute('data-visible', true);
        // change Ham-Btn when aria is expanaded
        toggle.setAttribute('aria-expanded', true);
      }else
      {
        categoriesNav.setAttribute('data-visible', false);
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  // Add task with description BTN
  static showAddTaskForm (){
    const addTaskbtn = document.querySelectorAll('.btn-panel-task');

    addTaskbtn.forEach((btn)=> btn.addEventListener('mouseup', ()=>{
      const addTaskContainer = document.querySelector('.add-task-container-main');
      const visibility = addTaskContainer.getAttribute('data-visible');
      visibility === 'false' ? addTaskContainer.setAttribute('data-visible', true) : addTaskContainer.setAttribute('data-visible', false);
      
    }));
  }

  static addCategoriesDown (category){
    const dropCategories = document.querySelector('.dropdown-categories');

    // categories drop down

    const option = document.createElement('li');
    option.classList.add('added-option', 'cat-drop');
    option.innerHTML = `${category}`;
    dropCategories.appendChild(option);
  }
  // Display Categories
  static displayCategoriesDropDown () {
    const categories = store.getCategories();
    categories.map((category) => {
      this.addCategoriesDown(category);
    });
  }
  
  // POP UP //
  /*
  When Icon(+) to add category is pressed
    show the category POPUP panel
  */ 
  static CategoryPopUpPanel () {
    const addProjectPopUp = document.createElement('div');
    addProjectPopUp.classList.add('modal', 'modal--popUp');
    addProjectPopUp.setAttribute('data-visible', false);
    
    // This should be on the header I think. I mean on the main by default
    addProjectPopUp.innerHTML = `
    <div class="add-project-popUp">
      <label for="add-project-text">Project name:</label>
      <input type="text" id="add-project-text" name="add-project-text">
      <div class="btns-popUp">
      <button class="cancel-project-btn">Cancel</button>
      <button class="add-project-btn">Add</button>
      </div>
    </div>
    `;
    return addProjectPopUp;
  }
  static showAddCategoryPanel(e) {
    const addProjectPopUp = document.querySelector('.modal--popUp');
    if(e.target.id == 'add-categories'){


      addProjectPopUp.setAttribute('data-visible', true);
      
      panel.cancelPopUpBtn();
    }
  }

  // cancel BTN on POPUP (this btn also makes the popUP disappear.)
  static cancelPopUpBtn (){
    const addProjectPopUp = document.querySelector('.modal--popUp');
    const cancelBtn = document.querySelector('.cancel-project-btn');
    cancelBtn.addEventListener('click', () => {
      addProjectPopUp.setAttribute('data-visible', false);
    });
  }

  //Add Category when pop Up <<add>> btn is pressed
  static addNewCategoryBtn () {

    const addProjectPopUp = document.querySelector('.modal--popUp');
    const takeInput = () =>{
      let title = document.querySelector('#add-project-text').value;
      title = title.toLowerCase();
  
      if(title.length < 1){
        alert('Please enter at least one character');
      }else{
        panel.addCategory(title, 'categories-navigation');
        this.addCategoriesDown(title);

        // Local Storage
        store.storeCategory(title);

      }
      
      addTask.clearInputField('#add-project-text');
      // Hide BTN
      addProjectPopUp.setAttribute('data-visible', false);
    };

    const addCatBtn = document.querySelector('.add-project-btn');
    addProjectPopUp.addEventListener('keypress', (e)=>{
      if(e.key === 'Enter'){
        takeInput();
      }
    });
    // mouseup unlike click does not interact with the enter key
    addCatBtn.addEventListener('mouseup', ()=>{
      takeInput();
    });
    // mobile handler
    addCatBtn.addEventListener('touchend', ()=>{
      takeInput();
    });
  }

  // Add Category //
  static addCategory (category, elementID) {
    const formatTitle = document.createElement('li');
    const categoriesList = document.querySelector(`#${elementID}`);
    // Create category title Paragraph element. 
    const categoryTitle = `<p class="category--title">${category}</p>`;
    formatTitle.classList.add('category');

    formatTitle.innerHTML = `
    <div>
      ${categoryTitle}
      <button class="delete-category"></button>
    </div>`;
    // add to dom list



    categoriesList.appendChild(formatTitle);
  }

  // Display Categories
  static displayCategories () {
    const categories = store.getCategories();
    categories.map((category) => {
      panel.addCategory(category, 'categories-navigation');
    });
  }

  // Switch bettween categories //
  // Create new todo Panel when a Category is pressed. 
  static categoryPressed(e) {
    if (e.target.classList.contains('category--title')){
      panel.newToDoPanel(e.target.innerHTML);
    }
  }
  // New todo Panel
  static newToDoPanel(category) {
    const todoPanel = document.querySelector('.todo-panel');
    const categoriesNav = document.querySelector('.categories-navigation');
    const toggle = document.querySelector('.mobile-toggle');
    // Delete previous panel
    home.clearHero();
    // Hide side panel
    categoriesNav.setAttribute('data-visible', false);
    toggle.setAttribute('aria-expanded', false);
    // New todo panel
    todoPanel.innerHTML = `
    <div class="title">
    <h1 class="task-category-title">${category}</h1>
    </div>
    <div class="tasks">
    <!-- task 1 -->

      </div>
    <div class="add-task-container">
      <input type="text" id="add-task-text" name="add-task-text">
      <label class="add-task-label" for="add-task-text">Add new task</label>
      <button class="add-task-btn btn">Add</button>
    </div>
    `;
    if (category == 'All Tasks'){
      addTask.displayTasks();
      addTask.takeInputEvent('general');
    }else{
      addTask.displayTasksCategorically(category);
    }
    
    addTask.takeInputEvent(category);
  }
    
  // Delete categories. 
  static deleteCategory(e) {
    const deleteBtnPressed = e.target.classList.contains('delete-category');
    if(deleteBtnPressed){
      e.target.parentElement.parentElement.remove();
      store.LSdeleteCategory(e);
    }
  }
}