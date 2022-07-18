import { Task } from "./UI/addTask";
import './styles/styles.css';

import { store } from "./StoreTask/store";
import { home } from "./UI/home";
import sideBar from "./UI/sideBar";

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

document.addEventListener('DOMContentLoaded', Task.displayTasks());

/*Take the input user input 
  from the text box, this file is located on ./UI/addTask.js*/  
Task.takeInput('General');
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
})
// task done
