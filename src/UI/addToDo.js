import '../styles/todoPanel.css'
import { addTaskPanel, takeInput, Task } from './addTask';
const todoPanel = (folder) => {
  const container = document.createElement('div');
  container.classList.add('todo-panel');
  container.innerHTML = `
    <div class="title">
      <h1>${folder}</h1>
    </div>
    <div class="tasks">
      <!-- task 1 -->
      <div class="task grid" aria-disabled="false">
        <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
        <div class="task-content">
          <p class="task-title">make bed</p>
          <p class="task-tag">tag</p>
        </div>
        <button class="TaskItemDelete">X</button>
      </div>

    </div>
    <div>
      <label for="add-task-text">Add new task</label>
      <input type="text" id="add-task-text" name="add-task-text">
      <button class="add-task-btn btn">Add</button>
    </div>
  `
  
  return container;
}
export default todoPanel;