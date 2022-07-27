import { Task } from "./modules/addTask";
import './styles/styles.css';

import { store } from "./StoreTask/store";
import { home } from "./modules/home";
import sideBar from "./modules/sideBar";
import taskDescPanel from "./modules/taskPanel";
import footer from "./modules/footer";

const body = document.body;
const main = document.createElement('main');
// Append header and side panel 
body.appendChild(home.header());
// Add new Project/Category
body.appendChild(sideBar.CategoryPopUpPanel());
// Toggle to show side panel 
sideBar.toggle();

body.appendChild(main);

main.appendChild(home.hero());

body.appendChild(footer())

document.addEventListener('DOMContentLoaded', Task.displayTasks());

/*Take the input user input 
  from the text box, this file is located on ./UI/addTask.js*/  
Task.takeInput('general');
// delete
document.addEventListener('click', (e) => {
  Task.deleteTask(e);
  Task.taskDone(e);
  store.LSremoveTask(e);
  store.changeDoneState(e);
  sideBar.categoryPressed(e);
  sideBar.showAddCategoryPanel(e);
  sideBar.addNewCategoryBtn(e);
  sideBar.deleteCategory(e);
  taskDescPanel.showPanel(e);
  taskDescPanel.getDate(e);
  taskDescPanel.updateNotes(e);
  taskDescPanel.removePanel(e);
  // store.saveDueDate(e);
})

// Check if HMR interface is enabled
if (module.hot) {
  // Accept hot update
  module.hot.accept();
}
