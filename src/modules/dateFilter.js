import { store } from '../StoreTask/store';
import { addTask } from './addTask';
import { home } from './home';
import taskDescPanel from './taskPanel';

const dateFilter = {
  date (date){
    // format date for fitering;
    date = taskDescPanel.onScreenDateFormat(date); 
    let tasks = store.getTasks();
    let filtered = [];
    tasks.map((task)=>{
      const dueDate = taskDescPanel.onScreenDateFormat(task.dueDate);
      if(dueDate=== date) addTask.addTaskPanel(task);
    });
    // return filtered;

  },

  dateFilterClick(dateFilterClass){
    document.querySelector(`.${dateFilterClass}`).addEventListener('click', ()=>{
      this.showDateTasks(dateFilterClass);
      // add task btn shown
      document.querySelector('.add-task-header').setAttribute('data-visible', true);
    });
  },

  showDateTasks(dateFilter, date = new Date){
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
    <h1 class="task-category-title">${dateFilter}</h1>
    </div>
    <div class="tasks">
    <!-- task 1 -->

      </div>
    <div class="add-task-container">
      <input type="text" id="add-task-text" name="add-task-text">
      <label class="add-task-label" for="add-task-text">Add new task</label>
      <button class="add-task-btn btn">Add</button>
    </div>
    `;
    this.date(date);
    addTask.takeInputEvent('general');
  }
};
Object.freeze(dateFilter);
export default dateFilter;