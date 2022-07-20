import { store } from "../StoreTask/store";
import { home } from "./home";

export default class taskDescPanel {
  static panel (task) {
    const panel = document.createElement('div');
    panel.classList.add('taskDescPanel')
    console.log(task);
    console.log(task.title);
    panel.innerHTML = `
    <div class="title title--task">
      <h1>${task.title}</h1>
    </div>
    <div>
      <label for="due-Date">Due Date</label>
      <input type="date" id="due-Date" name="due-Date">
      <button class="due-Date-btn">Set</button>
    </div>
    <div>
      <input id="notes" name="notes" type="text">
      <label for="notes">notes</label>
      <button class="add-task-note">Add</button>
      <p>Deadline: ${task.dueDate}</p>
    </div>
    <div>
      <p>Date created</p>
    </div>
    `
    const hero = document.querySelector('.container-hero')
    // The e.target gets the title
    hero.appendChild(panel)
    home.clearDescPanel();

    return panel
  }
  static showPanel(e){
    if(e.target.parentElement.classList.contains('task-content')){
      const hero = document.querySelector('.container-hero')
      const taskTitle =  e.target.parentElement.firstElementChild.textContent;
      console.log(taskTitle);
      const task = store.getSingleTask(taskTitle);
      // The e.target gets the title
      hero.appendChild(this.panel(task))
      
    }
  }
    // Date
    static getDate (e){
      if (e.target.classList.contains('due-Date-btn')){
        const date = document.querySelector('#due-Date').value;
        console.log(date);
        return date;
      }
    }
  
}