import { store } from '../StoreTask/store';

const priorityFilter = {
  priorityFilter(priority){
    const tasks = store.getTasks();

    tasks.forEach(task => {
      const taskPriority = task.priority;
      if(taskPriority === priority) console.log(task);
    });
  },

  priorityFilterClick(priorityClass){
    document.querySelector(`.${priorityClass}`).addEventListener('click',()=>{
      if(priorityClass === 'high') this.priorityFilter(priorityClass);
      if(priorityClass === 'medium') this.priorityFilter(priorityClass);
      if(priorityClass === 'low') this.priorityFilter(priorityClass);
    });
  }
};

Object.freeze(priorityFilter);
export default priorityFilter;