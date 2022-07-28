import { store } from "../StoreTask/store";
import '../styles/taskPanel.css';
// date-fns
import { format } from "date-fns";
import { home } from "./home";

export default class taskDescPanel {
  static panel (task) {
    const panel = document.createElement('div');
    panel.classList.add('taskDescPanel');
    const dueDate = task.dueDate === null ? 'No Due date added' :
                                    this.onScreenDateFormat(task.dueDate) ;

    panel.innerHTML = `
    <div class="title title--task">
      <h1>${task.title}</h1>
      <button class="hide-desc-panel"></button>
    </div>
    <div class="set-date">
      <label class="add-date-label" for="due-Date">Add due date</label>
      <input type="date" id="due-Date" name="due-Date">
      <button class="due-Date-btn"></button>
    </div>
    <div class="notes-panel">
      <p><span class="textarea" role="textbox" contenteditable>${task.notes}</span></p>
      <button class="add-task-note">Add</button>
    </div>
    <div>
      <p class="deadline">Deadline: ${dueDate}</span></p>
      <p>Date Created: ${this.onScreenDateFormat(task.dateCreated)}</p>
    </div>
    `
    const hero = document.querySelector('.container-hero')
    // The e.target gets the title
    hero.appendChild(panel)
    

    return panel
  }


  static showPanel(e){
    if(e.target.parentElement.classList.contains('task-content')){
      const body = document.body;
      const taskTitle =  e.target.parentElement.firstElementChild.textContent;
      console.log(taskTitle);
      const task = store.getSingleTask(taskTitle);
      // The e.target gets the title
      body.appendChild(this.panel(task))
      home.blurElements();
      
      
    }
  }
  static removePanel(e) {
    if(e.target.classList.contains('hide-desc-panel')){
      home.clearDescPanel();
      home.deBlurElements();
    }
  }

  /*
  FORMAT the stored date value for showing it on screen to mm/dd/yyyy. 
  */
  static onScreenDateFormat(date){
    let toFormat = new Date(date).toJSON().slice(0,10);
    let formatedDate = format(new Date(toFormat.replace(/-/g, '/')), 'MM/dd/yyyy');
    return formatedDate;
  }
  
    // Date
    static getDate (e){
      if (e.target.classList.contains('due-Date-btn')){
        let date = document.querySelector('#due-Date').value;
        console.log(date);
        // note: this should be a default date, format it on update date
        date = new Date(date);
        const title = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
        store.addDate(title, date);
        this.updateDate(title);

      }
    }

    static updateDate(title){
      // Show date
      const deadline = document.querySelector('.deadline');
      const task = store.getSingleTask(title);
      
      deadline.innerHTML = `Deadline: ${this.onScreenDateFormat(task.dueDate)}`;
    }

    static updateNotes (e){
      if(e.target.classList.contains('add-task-note')){
        const notes = document.querySelector('.task-notes').textContent;
        const taskTitle = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        console.log(taskTitle);
        console.log(notes);
        store.SaveNotes(taskTitle, notes);
        alert('notes saved');
      }
    }
  
}