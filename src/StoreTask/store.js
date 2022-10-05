//-Create Task Array with the task tags-//
const store = {
  //TASKS//
  getTasks  () {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  },
  
  getSingleTask (taskTitle) {
    let tasks = this.getTasks();
    let task;
    tasks.forEach((singleTask) => {
      if(singleTask.title == taskTitle){

        task = singleTask;
      }
    });
    return task;
  },

  getSingleTaskById (taskId) {
    let tasks = this.getTasks();
    let task;
    tasks.forEach((singleTask) => {
      if(singleTask.id === taskId){

        task = singleTask;
      }
    });
    return task;
  },

  saveTask (tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  addTaskToLS(task){
    let tasks = store.getTasks();
    tasks.push(task);
    this.saveTask(tasks);
  },

  descPanelSave(taskId, title, date, notes, priority){
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks[taskIndex].title = title;
    tasks[taskIndex].dueDate = date ? date : tasks[taskIndex].dueDate;
    tasks[taskIndex].notes = notes;
    tasks[taskIndex].priority = priority ? priority : tasks[taskIndex].priority;
    this.saveTask(tasks);
  },
  // Add Date
  addDate(taskTitle, date){
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].dueDate = date; 
    this.saveTask(tasks);
  },
  // remove Task
  
  LSremoveTask(title){
    // get title
    // let title = e.target.previousElementSibling.firstElementChild.innerHTML;
    let tasks = store.getTasks();
    tasks.forEach((task, index) => {
      if(task.title == title){
        tasks.splice(index, 1);
      }
      this.saveTask(tasks);
    });
  
  },
  // Change done state on LS
  changeDoneState(title){
    let tasks = store.getTasks();
    /*Get index by the task title pressed. 
    So that we change the state of only that task*/ 
    let taskIndex = tasks.findIndex((task) => task.title == title );
    if (tasks[taskIndex].done){
      tasks[taskIndex].done = false;
      console.log('chang', tasks[taskIndex].done);
    }else{
      tasks[taskIndex].done = true;
    }
    this.saveTask(tasks);
  },


  //CATEGORIES  
  storeCategory(category) {
    let categories = store.getCategories();
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
  },
  // Get categories
  getCategories(){
    let categories;
    if(localStorage.getItem('categories') === null){
      categories = [];
    }else{
      categories = JSON.parse(localStorage.getItem('categories'));
    }
    return categories;
  },

  // Delete Task if task category == category
  deleteTasksFromCategory(tasks, category){
    tasks = tasks.filter(task => task.tag === category);
    this.saveTask(tasks);
  },

  LSdeleteCategory(e){
    let title = e.target.previousElementSibling.innerHTML;
    let categories = store.getCategories();
    let tasks = store.getTasks();
    categories.map((category, index)=>{
      if(category ==  title){
        categories.splice(index, 1);
      }
      localStorage.setItem('categories', JSON.stringify(categories));
      store.deleteTasksFromCategory(tasks, title);
    });
  },

  // save on changes 
  SaveNotes(taskTitle, htmlValue) {
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].notes = htmlValue; 
    this.saveTask(tasks);
  }

};

export { store };