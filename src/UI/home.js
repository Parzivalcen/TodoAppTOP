import { store } from '../StoreTask/store';
import '../styles/home.css'
import todoPanel from './addToDo';
import sideBar from './sideBar';
import taskDescPanel from './taskPanel';
class home {
  static header(){
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
            <p class="category--title">All</p>
            
          </div> 
        </li>
        <li class="category">
          <div>
            <p class="category--title">Work</p>
            
          </div> 
        </li>
      </ul>
    </div>
    `
    return header;
  }
  
  static hero() {
    const hero = document.createElement('div');
    hero.classList.add('container', 'container-hero');
    hero.appendChild(todoPanel('All Tasks'));
    // Desc Panel, Just for styling

    // Display categories on side panel.
    sideBar.displayCategories()
    return hero;
  }

  static clearHero () {
    const todoPanel = document.querySelector('.todo-panel');
    todoPanel.textContent = '';
  }
  static clearDescPanel(){
    const descPanel = document.querySelector('.taskDescPanel');
    descPanel.remove();
  }
}




export {home}