import todoPanel from "./UI/addToDo";
import { addTaskPanel, deleteTask, displayTasks, takeInput, Task, taskDone } from "./UI/addTask";

import './styles/styles.css'
import { LSchangeDoneState, LSremoveTask } from "./StoreTask/store";

const body = document.body;
const main = document.createElement('main');
body.appendChild(main);

const container = document.createElement('div');
main.appendChild(container);
container.classList.add('container');
// Display task panel
container.appendChild(todoPanel('Daily tasks'))
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
})
// task done
