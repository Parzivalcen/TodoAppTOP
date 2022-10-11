import { store } from '../StoreTask/store';
import { addTask } from './addTask';
import { home } from './home';

const priorityFilter = {
  priorityFilter(priority){
    const tasks = store.getTasks();

    tasks.forEach(task => {
      const taskPriority = task.priority;
      if(taskPriority === priority) addTask.addTaskPanel(task);
    });
  },

  priorityFilterClick(priorityClass){
    document.querySelector(`.${priorityClass}`).addEventListener('click',()=>{
      if(priorityClass === 'high') this.showPriorityTasks(priorityClass);
      if(priorityClass === 'medium') this.showPriorityTasks(priorityClass);
      if(priorityClass === 'low') this.showPriorityTasks(priorityClass);
      // add task btn shown
      document.querySelector('.add-task-header').setAttribute('data-visible', true);
    });
  },

  showPriorityTasks(priority){
    const todoPanel = document.querySelector('.todo-panel');
    const categoriesNav = document.querySelector('.categories-navigation');
    const toggle = document.querySelector('.mobile-toggle');
    // Delete previous panel
    home.clearHero();
    // Hide side panel
    categoriesNav.setAttribute('data-visible', false);
    toggle.setAttribute('aria-expanded', false);
    // New todo panel
    todoPanel.innerHTML = `
    <div class="title">
    <h1 class="task-category-title">${priority} priority</h1>
    </div>
    <div class="tasks">
    <!-- task 1 -->

      </div>
    <div class="add-task-container">
      <input type="text" id="add-task-text" name="add-task-text">
      <label class="add-task-label" for="add-task-text">Quick add task</label>
      <button class="add-task-btn btn">Add</button>
    </div>
    `;
    this.priorityFilter(priority);
    addTask.takeInputEvent('general', null, priority);
  }
};

Object.freeze(priorityFilter);
export default priorityFilter;