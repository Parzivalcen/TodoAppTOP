import '../styles/home.css'
import { takeInput } from './addTask';
import todoPanel from './addToDo';
const header = () => {
  const header = document.createElement('header');
  header.classList.add('primary-header');
  header.innerHTML = `
  <button aria-expanded="false" class="mobile-toggle" aria-controls="tags-navigation"></button>
  <div class="side-panel"> 
  <ul id="tags-navigation" class="tags-navigation flex" data-visible="false">
      <h2>Categories <span class="add-Tags" id="add-Tags"></span></h2>
      <li class="tag">Daily</li>
      <li class="tag">Work</li>
    </ul>
  </div>
  `
  
  return header;
}

const toggle = () => {
    const toggle = document.querySelector('.mobile-toggle');
    const tagNav = document.querySelector('.tags-navigation');
    toggle.addEventListener('click', () => {
      const visibility = tagNav.getAttribute('data-visible');
      if (visibility ===  'false')
      {
        // Expand nav
        tagNav.setAttribute('data-visible', true);
        // change Ham-Btn when aria is expanaded
        toggle.setAttribute('aria-expanded', true);
      }else
      {
        tagNav.setAttribute('data-visible', false);
        toggle.setAttribute('aria-expanded', false);
      }
      
    })
}


const hero = () => {
  const hero = document.createElement('div');
  hero.classList.add('container', 'container-hero');
  hero.appendChild(todoPanel('Daily Tasks'));
  return hero;
}

const newToDo = (tag) => {
  const todoPanel = document.querySelector('.todo-panel');
  const hero = document.querySelector('.container-hero');
  clearHero();
  todoPanel.innerHTML = `
  <div class="title">
      <h1>${tag}</h1>
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
  takeInput(tag)
}
const clearHero =() => {
  const todoPanel = document.querySelector('.todo-panel');
  todoPanel.textContent = '';
}

// Create new to do when a tag is pressed. 
const tagBtn = (e) => {
  if (e.target.classList.contains('tag')){
    newToDo(e.target.innerHTML)
  }
}

export {header, hero, toggle, tagBtn}