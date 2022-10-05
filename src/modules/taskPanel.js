import { store } from '../StoreTask/store';
import '../styles/sassModules/_taskPanel.scss';
// date-fns
import { format } from 'date-fns';
import { home } from './home';

const taskDescPanel = {
  // Task description panel place holder
  panel () {
    const panel = document.createElement('div');
    panel.classList.add('modal', 'modal--taskDescPanel');
    panel.setAttribute('data-visible', false);

    
    return panel;
  },

  newPanel(task){
    const descPanel = document.querySelector('.modal--taskDescPanel');
    const title = task.title;
    const dueDate = task.dueDate === null ? 'No Due date' :
      this.onScreenDateFormat(task.dueDate) ;
    const notes = task.notes === undefined ? '' : task.notes;
    const dateCreated = this.onScreenDateFormat(task.dateCreated);
    const priority = task.priority === null ? 'no priority' : task.priority;
    const taskId = task.id;
    home.clearDescPanel();
    
    
    descPanel.innerHTML =  `
    <div class="taskDescPanel">
      <div class="title title--task">
        <h1 contenteditable="true">${title}</h1>
      </div>
      <div class="set-date">
        <label class="add-date-label" for="due-Date">Set Deadline</label>
        <input type="date" id="due-Date" name="due-Date">
      </div>

      <details class="priority-dropdown-task-panel">
        <summary class="priority-title-task-panel">
          ${priority}
          <span class="dropdown-icon"></span>
        </summary> 
        <div class="dropdown-wrapper-task-panel">
          <ul>
            <li class="high">high</li>
            <li class="medium">medium</li>
            <li class="low">low</li>
          </ul>
        </div>
      </details>
      
      <div class="notes-panel">
        <span class="textarea" role="textbox" contenteditable="true">${notes}</span>
      </div>
      <div>
        <p class="deadline">Deadline: ${dueDate}</span></p>
        <p>Date Created: ${dateCreated}</p>
      </div>
      <div class="task-desc-panel-btns">
        <button class="btn task-desc-save">Save</button>
        <button class="btn task-desc-cancel">Cancel</button>
      </div>
      <p class="task-id sr-only">${taskId}</p>
    </div>
      `;
    this.changePriority();
    this.editTaskSave();
    this.cancelEdit();
    // this.updateNotesOnIput();
  },

  showPanel(e){
    if(e.target.parentElement.classList.contains('task-content')){
      
      const taskTitle =  e.target.parentElement.firstElementChild.textContent;
      const task = store.getSingleTask(taskTitle);
      // The e.target gets the title
      this.newPanel(task);
      document.querySelector('.modal--taskDescPanel').setAttribute('data-visible', true);
    }
  },
  
  /*
  FORMAT the stored date value for showing it on screen to mm/dd/yyyy. 
  */
  onScreenDateFormat(date){
    let toFormat = new Date(date).toJSON().slice(0,10);
    let formatedDate = format(new Date(toFormat.replace(/-/g, '/')), 'MM/dd/yyyy');
    return formatedDate;
  },

  // Priority changes / selection
  changePriority(){
    const dropdown = document.querySelector('.dropdown-wrapper-task-panel');
    const title = document.querySelector('.priority-title-task-panel');
    dropdown.addEventListener('click', (e)=>{
      title.innerHTML = `${
        e.target.textContent}
        <span class="dropdown-icon"></span>`;
      // Close 
      document.querySelector('.priority-dropdown-task-panel').removeAttribute('open');
      console.log(e.target.textContent);
    });

  },

  editTaskSave(){
    const taskDescPanel = document.querySelector('.taskDescPanel');
    const saveBtn = taskDescPanel.querySelector('.task-desc-save');
    saveBtn.addEventListener('click', ()=>{
      // Update task Object
      const taskId = +taskDescPanel.querySelector('.task-id').innerHTML;
      const title = taskDescPanel.querySelector('h1').textContent;
      let date = document.querySelector('#due-Date').value;
      if(date) date = new Date(date);
      const notes = taskDescPanel.querySelector('.textarea').innerHTML;
      // priority with no white space
      const priority =  document.querySelector('.priority-title-task-panel').textContent.replace(/\s/g,'');
      console.log(priority);
      store.descPanelSave(taskId, title, date, notes, priority);
      // Close desk panel and update todo Panel
      document.querySelector('.modal--taskDescPanel').setAttribute('data-visible', false);

      // add each task with its own id on the todopanel
      const taskTodoPanel = document.getElementById(`${taskId}`);
      taskTodoPanel.previousElementSibling.previousElementSibling.innerText = title;
      
    });
  },

  // cancel edit BTN
  cancelEdit(){
    const cancelBtn = document.querySelector('.task-desc-cancel');
    cancelBtn.addEventListener('click', ()=>{
      home.clearDescPanel();
      document.querySelector('.modal--taskDescPanel').setAttribute('data-visible', false);
    });
  },
  
  // Date
  getDate (e){
    if (e.target.classList.contains('due-Date-btn')){
      let date = document.querySelector('#due-Date').value;
      // note: this should be a default date, format it on update date
      date = new Date(date);
      const title = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
      store.addDate(title, date);
      this.updateDate(title);

    }
  },

  updateDate(title){
    // Show date
    const deadline = document.querySelector('.deadline');
    const task = store.getSingleTask(title);
      
    deadline.innerHTML = `Deadline: ${this.onScreenDateFormat(task.dueDate)}`;
  },

  updateNotesOnIput(){
    const notesListener = document.querySelector('.textarea');
    const panel = notesListener.parentElement.parentElement;
    // Key up works on mobile as well
    notesListener.addEventListener('keyup', ()=>{
      const notes = document.querySelector('.textarea').innerHTML;
      // this line to get an element is neat 
      const taskTitle = panel.getElementsByTagName('h1')[0].textContent;
      store.SaveNotes(taskTitle, notes);

    });

  },

  updateNotes (e){
    if(e.target.classList.contains('add-task-note')){

      const notes = document.querySelector('.textarea').innerHTML;
      const taskTitle = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
      store.SaveNotes(taskTitle, notes);
      alert('notes saved');
    }
  }
  
};

export default taskDescPanel;