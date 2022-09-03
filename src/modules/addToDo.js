import '../styles/sassModules/_todoPanel.scss';
import '../styles/sassModules/_addTaskP.scss';
import { addTask } from './addTask';
// import { Task } from './addTask';
import panel from './panel';
const addToDo = {
  todoPanel (folder) {
    const container = document.createElement('div');
    container.classList.add('todo-panel');
    container.innerHTML = `
      <div class="title task-category-title">
        <h1 class="task-category-title">${folder}</h1>
      </div>
      <div class="tasks">
        <!-- task 1 -->
        
  
      </div>
      <div class="add-task-container">
        <input type="text" id="add-task-text" name="add-task-text">
        <label class="add-task-label" for="add-task-text">Add new task</label>
        <button class="add-task-btn btn"><span class="sr-only">add task btn</span></button>
      </div>
    `;
    
    return container;
  },

  addTask(){
    const addTaskPanel = document.createElement('div');
    addTaskPanel.classList.add('add-task-container-main', 'modal');
    addTaskPanel.setAttribute('data-visible', true);

    addTaskPanel.innerHTML = `
    
    <div class="add-task-container-content">

      <div class="title-task-input">
        <input type="text" placeholder="I want to..." class="add-task-title" id="add-task-title" name="add-task-title">
      </div>

      
        <div id="notes-panel-main">
          <span class="textarea-main" placeholder="I want to..." role="textbox" contenteditable="true"></span>
        </div>
      
      
      <div class="select-category-container">
        <p class="select-category"> Select Category: <span class="menu-icon"></span></p>
        <ul class="dropdown-categories" data-visible = "false">
          <li class="cat-drop">general</li>
          <li class="cat-drop">Shopping List</li>
          <li class="cat-drop">Work</li>
        </ul>
      </div>

      <div class="set-date">
        <label class="add-date-label" for="due-Date">Add due date</label>
        <input type="date" id="due-Date-main" name="due-Date">
      </div>
      
      <div class="priority">
        <label for="priority">priority</label>
        <select name="priority" id="priority">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      
      <div class="add-main-task">
        <button class="btn add-main-task-btn">Add Task</button>
      </div>
    </div>
      
      `;
    panel.showAddTaskForm();
    document.addEventListener('DOMContentLoaded', ()=>{
      addTask.dropDownCategories();
    });
    
    
    return addTaskPanel;
  },
  
};
Object.freeze(addToDo);
export default addToDo;