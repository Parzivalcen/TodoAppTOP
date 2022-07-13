import todoPanel from "./UI/addToDo";
import { addTaskPanel, deleteTask, displayTasks, takeInput, Task, taskDone } from "./UI/addTask";

import './styles/styles.css'
import { LSchangeDoneState, LSremoveTask } from "./StoreTask/store";
import { header, hero, categoryBtn, deleteCategory } from "./UI/home";
import sideBar from "./UI/sideBar";

const body = document.body;
const main = document.createElement('main');
// Append header and side panel 
body.appendChild(header());
// Add new Project/Category
body.appendChild(sideBar.CategoryPopUpPanel());
// Toggle to show side panel 
sideBar.toggle();

body.appendChild(main);

main.appendChild(hero());

// const hero = document.createElement('div');
// hero.classList.add('container', 'container-hero');
// // Display task panel
// container.appendChild(todoPanel('Daily tasks'))

document.addEventListener('DOMContentLoaded', displayTasks());

/*Take the input user input 
  from the text box, this file is located on ./UI/addTask.js*/  
takeInput('daily');
// delete
document.addEventListener('click', (e) => {
  deleteTask(e);
  LSremoveTask(e);
  taskDone(e);
  LSchangeDoneState(e);
  sideBar.categoryPressed(e);
  sideBar.showAddCategoryPanel(e);
  sideBar.addNewCategoryBtn(e);
  deleteCategory(e);
})
// task done
