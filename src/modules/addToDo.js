import '../styles/sassModules/_todoPanel.scss';
// import { Task } from './addTask';
import panel from './panel';
class addToDo {
  static todoPanel = (folder) => {
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
  };

  static addTask(){
    const addTaskPanel = document.createElement('div');
    addTaskPanel.classList.add('add-task-container');
    addTaskPanel.setAttribute('data-visible', false);
    addTaskPanel.innerHTML = `
      <div class="title">
        <input type="text" id="add-task-title" name="add-task-title">
        <label class="add-task-title-label" for="add-task-title">I want to...</label>
      </div>

      <div class="notes">
        <div class="notes-panel">
          <span class="textarea-main" role="textbox" contenteditable="true"></span>
        </div>
      </div>

      <div class="select-category">
        <label for="categories-list" class="drop-down-cats">select category</label>
        <select name="categories-list" id="categories-list">
          <option value="all">general</option>
          <option value="shopping">Shopping List</option>
          <option value="work">Work</option>
        </select>
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
      <button class="add-main-task-btn">Add Task</button>
    </div>

    `;
    panel.showAddTaskForm();


    return addTaskPanel;
  }

}
export default addToDo;