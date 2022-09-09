import '../styles/sassModules/_header.scss';
import Icon from '../imgs/climb.png';
import panel from './panel';


const header = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const myIcon = new Image();
  myIcon.src = Icon;
  
  header.innerHTML = `
  <div class=" container--header">
    
    <button class="add-task-header btn" data-visible="true">Add Task</button> 
    <div></div>
    <div class="menu--container">
      <button aria-expanded="false" class="mobile-toggle" aria-controls="categories-navigation"></button>

      <div class="user" data-visible="false">
        <h2 class="user-name">user</h2>
        <span class="user-icon">O</span>
      </div>
    </div>
  </div>`;
  document.addEventListener('DOMContentLoaded', ()=>{
    panel.showAddTaskForm();
  });
  header.appendChild(panel.panel());
  return header;
};
// Object.freeze(header);
export default header;