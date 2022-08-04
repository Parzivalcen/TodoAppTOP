import { store } from '../StoreTask/store';
import { Task } from './addTask';
import { home } from './home';

export default class sideBar {
  // Toggle
  static toggle () {
    const toggle = document.querySelector('.mobile-toggle');
    const categoriesNav = document.querySelector('.categories-navigation');
    toggle.addEventListener('click', () => {
      const visibility = categoriesNav.getAttribute('data-visible');
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
      
      sideBar.cancelPopUpBtn();
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
        sideBar.addCategory(title);
        // Local Storage
        store.storeCategory(title);

      }
      
      Task.clearInputField('#add-project-text');
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
  static addCategory (category) {
    const formatTitle = document.createElement('li');
    const categoriesList = document.querySelector('#categories-navigation');
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
      sideBar.addCategory(category);
    });
  }

  // Switch bettween categories //
  // Create new todo Panel when a Category is pressed. 
  static categoryPressed(e) {
    if (e.target.classList.contains('category--title')){
      sideBar.newToDoPanel(e.target.innerHTML);
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
    <h1>${category}</h1>
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
      Task.displayTasks();
      Task.takeInputEvent('general');
    }else{
      Task.displayTasksCategorically(category);
    }
    
    Task.takeInputEvent(category);
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