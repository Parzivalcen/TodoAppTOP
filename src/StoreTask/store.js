//-Create Task Array with the task tags-//
class store {
  //TASKS//
  static getTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  };
  
  static getSingleTask = (taskTitle) => {
    let tasks = this.getTasks();
    let task;
    tasks.forEach((singleTask) => {
      if(singleTask.title == taskTitle){

        task = singleTask;
      }
    });
    return task;
  };
  static getSingleTaskById = (taskId) => {
    let tasks = this.getTasks();
    let task;
    tasks.forEach((singleTask) => {
      if(singleTask.id === taskId){

        task = singleTask;
      }
    });
    return task;
  };

  static saveTask (tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTaskToLS(task){
    let tasks = store.getTasks();
    tasks.push(task);
    this.saveTask(tasks);
  }

  static descPanelSave(taskId, title, date, notes){
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks[taskIndex].title = title;
    tasks[taskIndex].dueDate = date ? date : tasks[taskIndex].dueDate;
    tasks[taskIndex].notes = notes;
    this.saveTask(tasks);
  }
  // Add Date
  static addDate(taskTitle, date){
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].dueDate = date; 
    this.saveTask(tasks);
  }
  // remove Task
  
  static LSremoveTask(title){
    // get title
    // let title = e.target.previousElementSibling.firstElementChild.innerHTML;
    let tasks = store.getTasks();
    tasks.forEach((task, index) => {
      if(task.title == title){
        tasks.splice(index, 1);
      }
      this.saveTask(tasks);
    });
  
  }
  // Change done state on LS
  static changeDoneState(title){
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
  }


  //CATEGORIES  
  static storeCategory(category) {
    let categories = store.getCategories();
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
  }
  // Get categories
  static getCategories(){
    let categories;
    if(localStorage.getItem('categories') === null){
      categories = [];
    }else{
      categories = JSON.parse(localStorage.getItem('categories'));
    }
    return categories;
  }

  // Delete Task if task category == category
  static deleteTasksFromCategory(tasks, category){
    tasks = tasks.filter(task => task.tag === category);
    this.saveTask(tasks);
  }

  static LSdeleteCategory(e){
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
  }
  // save on changes 
  static SaveNotes(taskTitle, htmlValue) {
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].notes = htmlValue; 
    this.saveTask(tasks);
  }

}

export { store };