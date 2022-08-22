import '../styles/sassModules/_todoPanel.scss';
import { Task } from './addTask';
class addToDo {
  static todoPanel = (folder) => {
    const container = document.createElement('div');
    container.classList.add('todo-panel');
    container.innerHTML = `
      <div class="title">
        <h1>${folder}</h1>
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
          <span class="textarea" role="textbox" contenteditable="true"></span>
        </div>
      </div>

      <div class="select-category">
        <button class="drop-down-categories">select category</button>
        <ul class="categories-list" data-visible="false">

        </ul>
      </div>

      <div class="set-date">
        <label class="add-date-label" for="due-Date">Add due date</label>
        <input type="date" id="due-Date" name="due-Date">
        <button class="due-Date-btn"></button>
      </div>

      <div class="priority">
        <p>priority</p>
        <ul data-visible="false">
          <li>high</li>
          <li>medium</li>
          <li>low</li>
        </ul>
      </div>

    <div class="add-main-task-btn">
      <button>Add Task</button>
    </div>

    `;
    Task.showAddTaskForm();

    return addTaskPanel;
  }

}
export default addToDo;