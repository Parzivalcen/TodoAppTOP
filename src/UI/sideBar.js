import { getCategories, storeCategory } from "../StoreTask/store";

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
    })
  }

  // POP UP //
  /*
  When Icon(+) to add category is pressed
    show the category POPUP panel
  */ 
  static CategoryPopUpPanel () {
    const addProjectPopUp = document.createElement('div');
    addProjectPopUp.classList.add('add-project-popUp');
    addProjectPopUp.setAttribute('project-pop-visible', false);
    
    // This should be on the header I think. I mean on the main by default
    addProjectPopUp.innerHTML = `
    <label for="add-project-text">Project name</label>
    <input type="text" id="add-project-text" name="add-project-text">
    <button class="add-project-btn">Add</button>
    <button class="cancel-project-btn">Cancel</button>
    `
    return addProjectPopUp;
  }
  static showAddCategoryPanel(e) {
    const addProjectPopUp = document.querySelector('.add-project-popUp');
    if(e.target.id == 'add-categories'){

      addProjectPopUp.setAttribute('project-pop-visible', true);
      
      sideBar.cancelPopUpBtn();
    }
  }

  // cancel BTN on POPUP (this btn also makes the popUP disappear.)
  static cancelPopUpBtn (){
    const addProjectPopUp = document.querySelector('.add-project-popUp');
    const cancelBtn = document.querySelector('.cancel-project-btn');
    cancelBtn.addEventListener('click', () => {
      addProjectPopUp.setAttribute('project-pop-visible', false);
    })
  }

  //Add Category POPUP Btn
  static addNewCategoryBtn (e) {
    if(e.target.classList.contains('add-project-btn')){
      const addProjectPopUp = document.querySelector('.add-project-popUp');
      const title = document.querySelector('#add-project-text').value;
      
      sideBar.addCategory(title);
      // Local Storage
      storeCategory(title);
  
  
      // Hide BTN
      addProjectPopUp.setAttribute('project-pop-visible', false);
    }
  }
  // Add Category
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
    const categories = getCategories();
    categories.map((category) => {
      sideBar.addCategory(category);
    })
  }

  // Switch bettween categories //
  // Create new todo Panel when a Category is pressed. 
  static categoryPressed(e) {
    if (e.target.classList.contains('category--title')){
      sideBar.newToDo(e.target.innerHTML)
    }
  }
  // New todo Panel
  static newToDoPanel(category) {
    const todoPanel = document.querySelector('.todo-panel');
    const categoriesNav = document.querySelector('.categories-navigation');
    const toggle = document.querySelector('.mobile-toggle');
    // Delete previous panel
    clearHero();
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
      <div>
        <label for="add-task-text">Add new task</label>
        <input type="text" id="add-task-text" name="add-task-text">
        <button class="add-task-btn btn">Add</button>
      </div>
    `
    if (category == 'Daily'){
      displayTasks();
    }else{
      displayTasksCategorically(category);
    }
    
    takeInput(category)
  }
    

  // Delete categories. 
}