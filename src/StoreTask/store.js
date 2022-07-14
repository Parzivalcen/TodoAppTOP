
//-Create Task Array with the task tags-//
class store {
  static getTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
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
      categories = JSON.parse(localStorage.getItem('categories'))
    }
    return categories;
  }

  // Delete Task if task category == category
  static deleteTasksFromCategory(tasks, category){
    tasks = tasks.filter(task => task.tag !== category)
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
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
    })
  }

}

const getTasks = () => {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

// add task to local Storage
const localStoraddTask = (task) => {
  let tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const LSremoveTask = (e) => {
  if(e.target.classList.contains('TaskItemDelete')){
    // get title
    let title = e.target.previousElementSibling.firstElementChild.innerHTML;
    let tasks = getTasks();
    tasks.forEach((task, index) => {
      if(task.title == title){
        tasks.splice(index, 1);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks))
    });
  }
}

const LSchangeDoneState = (e) => {
  if (e.target.classList.contains('TaskItemCheckbox')){
     // get title
      let title = e.target.nextElementSibling.firstElementChild.innerHTML;
      console.log('chang', title)
      let tasks = getTasks();
      let taskIndex = tasks.findIndex((task) => task.title == title )
      if (tasks[taskIndex].done == 'undone'){
        tasks[taskIndex].done = 'done';
        console.log('chang', tasks[taskIndex].done)
      }else{
        tasks[taskIndex].done = 'undone';
      }
        localStorage.setItem('tasks', JSON.stringify(tasks))

      };
  }




// Should I refactor this and use classes? 
export {localStoraddTask,
    getTasks,
    LSremoveTask,
    LSchangeDoneState,
  store};