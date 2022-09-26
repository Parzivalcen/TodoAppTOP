import { Task, addTask } from './modules/addTask';
// import './styles/styles.css';
// import './styles/style.scss';
import { store } from './StoreTask/store';
import { home } from './modules/home';
import taskDescPanel from './modules/taskPanel';
import footer from './modules/footer';
import header from './modules/header';
import panel from './modules/panel';
import addToDo from './modules/addToDo';

const body = document.body;
const main = document.createElement('main');
// Add new Project/Category
body.appendChild(panel.CategoryPopUpPanel());
// Append header and side panel 
body.appendChild(header());


// Toggle to show side panel 
panel.toggle();

// Add big task adder form;
body.appendChild(addToDo.addTask());
panel.displayCategoriesDropDown();

// Task Desc Panel
body.appendChild(taskDescPanel.panel());


body.appendChild(main);

main.appendChild(home.hero());

body.appendChild(footer());

document.addEventListener('DOMContentLoaded', addTask.displayTasks());
home.clickOutsideModal();
// delete
document.addEventListener('click', (e) => {
  addTask.deleteTask(e);
  addTask.taskDone(e);
  panel.categoryPressed(e);
  panel.showAddCategoryPanel(e);
  panel.deleteCategory(e);
  taskDescPanel.showPanel(e);
  taskDescPanel.getDate(e);
  taskDescPanel.updateNotes(e);
  // taskDescPanel.removePanel(e);
  // store.saveDueDate(e);
});

/*Take the input user input 
from the text box, this file is located on ./UI/addTask.js*/  
addTask.takeInputEvent('general');
panel.addNewCategoryBtn();
addTask.addTaskFromPanel();

