import { store } from '../StoreTask/store';
import '../styles/sassModules/_taskPanel.scss';
// date-fns
import { format } from 'date-fns';
import { home } from './home';

export default class taskDescPanel {
  // Task description panel place holder
  static panel () {
    const panel = document.createElement('div');
    panel.classList.add('modal', 'modal--taskDescPanel');
    panel.setAttribute('data-visible', false);

    
    return panel;
  }

  static newPanel(task){
    const descPanel = document.querySelector('.modal--taskDescPanel');
    
    const title = task.title;
    const dueDate = task.dueDate === null ? 'No Due date' :
      this.onScreenDateFormat(task.dueDate) ;
    const notes = task.notes === undefined ? '' : task.notes;
    const dateCreated = this.onScreenDateFormat(task.dateCreated);
    home.clearDescPanel();
    
    
    descPanel.innerHTML = `
    <div class="taskDescPanel">
    <button class="hide-desc-panel"></button>
    <div class="title title--task">
    <h1>${title}</h1>
    </div>
      <div class="set-date">
      <label class="add-date-label" for="due-Date">Add due date</label>
        <input type="date" id="due-Date" name="due-Date">
        <button class="due-Date-btn"></button>
      </div>
      <div class="notes-panel">
          <span class="textarea" role="textbox" contenteditable="true">${notes}</span>
      </div>
      <div>
      <p class="deadline">Deadline: ${dueDate}</span></p>
      <p>Date Created: ${dateCreated}</p>
      </div>
      </div>
      `;
    this.updateNotesOnIput();
  }
  static showPanel(e){
    if(e.target.parentElement.classList.contains('task-content')){
      
      const taskTitle =  e.target.parentElement.firstElementChild.textContent;
      const task = store.getSingleTask(taskTitle);
      // The e.target gets the title
      this.newPanel(task);
      document.querySelector('.modal--taskDescPanel').setAttribute('data-visible', true);
    }
  }
  static removePanel(e) {
    if(e.target.classList.contains('hide-desc-panel')){
      home.clearDescPanel();
      document.querySelector('.modal--taskDescPanel').setAttribute('data-visible', false);

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

  static updateNotesOnIput(){
    const notesListener = document.querySelector('.textarea');
    const panel = notesListener.parentElement.parentElement;
    // Key up works on mobile as well
    notesListener.addEventListener('keyup', ()=>{
      const notes = document.querySelector('.textarea').innerHTML;
      // this line to get an element is neat 
      const taskTitle = panel.getElementsByTagName('h1')[0].textContent;
      store.SaveNotes(taskTitle, notes);

    });

  }
  static updateNotes (e){
    if(e.target.classList.contains('add-task-note')){

      const notes = document.querySelector('.textarea').innerHTML;
      const taskTitle = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
      store.SaveNotes(taskTitle, notes);
      alert('notes saved');
    }
  }
  
}