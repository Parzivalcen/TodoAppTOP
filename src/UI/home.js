import { getCategories, LSdeleteCategory, storeCategory } from '../StoreTask/store';
import '../styles/home.css'
import { displayTasks, displayTasksCategorically, takeInput } from './addTask';
import todoPanel from './addToDo';
import sideBar from './sideBar';
class home {
  static clearHero () {
    const todoPanel = document.querySelector('.todo-panel');
    todoPanel.textContent = '';
  }
}

const header = () => {
  const header = document.createElement('header');
  header.classList.add('primary-header');
  header.innerHTML = `
  <button aria-expanded="false" class="mobile-toggle" aria-controls="categories-navigation"></button>
  <div class="side-panel"> 
  <ul id="categories-navigation" class="categories-navigation flex" data-visible="false">
      <div class="categories-title">
        <h2>Categories</h2>
        <span class="add-categories" id="add-categories"></span>
      </div>    
      <li class="category">
        <div>
          <p class="category--title">Daily</p>
          <button class="delete-category"></button>
        </div> 
      </li>
      <li class="category">
        <div>
          <p class="category--title">work</p>
          <button class="delete-category"></button>
        </div> 
      </li>
    </ul>
  </div>
  `
  
  return header;
}

// CATEGORY POP UP START

// Cancel popUP

// END CATEGORY POP UP START

// CATEGORY LIST //
// Add category to Side Bar
const addCategory = (category) => {
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

// Keep new categories on reload
const displayCategories =()=>  {
  const categories = getCategories();
  categories.map((category) => {
    addCategory(category);
  })
}
const deleteCategory = (e) => {
  const deleteBtnPressed = e.target.classList.contains('delete-category');
  if(deleteBtnPressed){
    e.target.parentElement.parentElement.remove();
    LSdeleteCategory(e);
  }
}
// END CATEGORY LIST //

const hero = () => {
  const hero = document.createElement('div');
  hero.classList.add('container', 'container-hero');
  hero.appendChild(todoPanel('Daily Tasks'));
  // Display categories on side panel.
  displayCategories()
  return hero;
}

const newToDo = (category) => {
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
const clearHero =() => {
  const todoPanel = document.querySelector('.todo-panel');
  todoPanel.textContent = '';
}

// Create new to do when a category is pressed. 
const categoryBtn = (e) => {
  if (e.target.classList.contains('category--title')){
    newToDo(e.target.innerHTML)
  }
}


export {header,
    hero, 
    
    categoryBtn,
  
    deleteCategory, home}