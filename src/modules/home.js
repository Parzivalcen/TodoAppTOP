
import '../styles/sassModules/_home.scss';
import addToDo from './addToDo';
import panel from './panel';

const home =  {
  header(){
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
            <p class="category--title">All Tasks</p>
            
          </div> 
        </li>
        <li class="category">
          <div>
            <p class="category--title">Work</p>
            
          </div> 
        </li>
      </ul>
    </div>
    `;
    return header;
  },
  
  hero() {
    const hero = document.createElement('div');
    hero.classList.add('container', 'container-hero');
    hero.appendChild(addToDo.todoPanel('All Tasks'));
    // Desc Panel, Just for styling

    // Display categories on side panel.
    panel.displayCategories();
    return hero;
  },

  clearHero () {
    const todoPanel = document.querySelector('.todo-panel');
    todoPanel.textContent = '';
  },
  clearDescPanel(){
    const descPanel = document.querySelector('.modal--taskDescPanel');
    descPanel.textContent = '';
  },

  clickOutsideModal(){
    let modals = document.querySelectorAll('.modal');
    modals.forEach((modal)=>{
      modal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('modal')){
          modal.setAttribute('data-visible', false);
        }
      });
    });
  }
};



Object.freeze(home);
export {home};