import { store } from '../StoreTask/store';
import { addTask } from './addTask';
import { home } from './home';
import taskDescPanel from './taskPanel';

const dateFilter = {
  // Today filter
  date (date){
    // format date for fitering;
    date = taskDescPanel.onScreenDateFormat(date); 
    let tasks = store.getTasks();
    
    tasks.map((task)=>{
      const dueDate = taskDescPanel.onScreenDateFormat(task.dueDate);
      if(dueDate=== date) addTask.addTaskPanel(task);
    });
    return date;

  },

  // Week date
  thisWeek(){
    const week = this.getWeekDates();
    let start = week[0];
    let end = week[1];
    let tasks = store.getTasks();

    tasks.map((task)=>{
      let dueDate = new Date(task.dueDate);
      dueDate = dueDate.getTime();
      console.log(start);
      if(dueDate >= start && dueDate < end) addTask.addTaskPanel(task);
    });
  },
  
  nextWeek(){
    const week = this.getWeekDates();
    let end = week[1];
    let tasks = store.getTasks();

    tasks.map((task)=>{
      let dueDate = new Date(task.dueDate);
      dueDate = dueDate.getTime();
      if(dueDate >= end) addTask.addTaskPanel(task);
    });
  },

  dateFilterClick(dateFilterClass){
    document.querySelector(`.${dateFilterClass}`).addEventListener('click', ()=>{
      if(dateFilterClass === 'today') this.showDateTasks(dateFilterClass);
      if(dateFilterClass === 'this-week') this.showDateTasks(dateFilterClass);
      if(dateFilterClass === 'next-week') this.showDateTasks(dateFilterClass);
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
    if (dateFilter === 'today'){
      this.date(date);
      addTask.takeInputEvent('general', new Date());
    } 
      
    if (dateFilter === 'this-week') {
      this.thisWeek();
      addTask.takeInputEvent('general', this.getWeekDates()[0]);
    }
      
    if (dateFilter === 'next-week') {
      this.nextWeek();
      addTask.takeInputEvent('general', this.getWeekDates()[1]);
    } 
  },

  getWeekDates() {

    let now = new Date();
    let dayOfWeek = now.getDay(); //0-6
    let numDay = now.getDate();
  
    let start = new Date(now); //copy
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);
  
  
    let end = new Date(now); //copy
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);
  
    return [start.getTime(), end.getTime()];
  }
};
Object.freeze(dateFilter);
export default dateFilter;