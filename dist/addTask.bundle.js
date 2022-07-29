"use strict";
(self["webpackChunktodoapp"] = self["webpackChunktodoapp"] || []).push([["addTask"],{

/***/ "./src/StoreTask/store.js":
/*!********************************!*\
  !*** ./src/StoreTask/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
//-Create Task Array with the task tags-//
class store {
  //TASKS//
  static getTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }
  
  static getSingleTask = (taskTitle) => {
    let tasks = this.getTasks();
    let task;
    tasks.forEach((singleTask) => {
      if(singleTask.title == taskTitle){

        task = singleTask
      };
    })
    return task;
  }

  static saveTask (tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  static addTaskToLS(task){
    let tasks = store.getTasks();
    tasks.push(task);
    this.saveTask(tasks);
  }
  // Add Date
  static addDate(taskTitle, date){
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].dueDate = date; 
    this.saveTask(tasks);
  }
  // remove Task
  static LSremoveTask(e){
    if(e.target.classList.contains('TaskItemDelete')){
      // get title
      let title = e.target.previousElementSibling.firstElementChild.innerHTML;
      let tasks = store.getTasks();
      tasks.forEach((task, index) => {
        if(task.title == title){
          tasks.splice(index, 1);
        }
        this.saveTask(tasks)
      });
    }
  }
  // Change done state on LS
  static changeDoneState(e){
    if (e.target.classList.contains('TaskItemCheckbox')){
        // get title
        let title = e.target.nextElementSibling.firstElementChild.innerHTML;

        let tasks = store.getTasks();
      /*Get index by the task title pressed. 
      So that we change the state of only that task*/ 
        let taskIndex = tasks.findIndex((task) => task.title == title )
        if (tasks[taskIndex].done){
          tasks[taskIndex].done = false;
          console.log('chang', tasks[taskIndex].done)
        }else{
          tasks[taskIndex].done = true;
        }
        this.saveTask(tasks);
  
        };
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
  
    this.saveTask(tasks);
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
 // save on changes 
  static SaveNotes(taskTitle, htmlValue) {
    let tasks = this.getTasks();
    let taskIndex = tasks.findIndex((task) => task.title == taskTitle);
    tasks[taskIndex].notes = htmlValue; 
    this.saveTask(tasks);
  }

}



/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StoreTask/store */ "./src/StoreTask/store.js");


class Task {
  constructor(title, category, dateCreated){
    this.title = title;
    this.category = category;
    this.done = false;
    this.dueDate = null;
    this.dateCreated = dateCreated;
    this.notes = undefined;
    // add date created, storing the date the task is created. 
  }
  // Add Task TO Panel
  static addTaskPanel (task) {
    const taskPanel = document.querySelector('.tasks');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'grid');
    
    // Display task done or undone
    if (task.done) {
      taskDiv.setAttribute('aria-disabled', true)
    }else{
      taskDiv.setAttribute('aria-disabled', false)
    }
    taskDiv.innerHTML = `
    <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
    <div class="task-content">
      <p class="task-title">${task.title}</p>
      <p class="task-category">${task.category}</p>
    </div>
    <button class="TaskItemDelete"></button>
    `;
    
    taskPanel.appendChild(taskDiv);
    
  }
  

  // Take input
  static takeInputEvent (category) {
    // Funtion to take input on enter key pressed or click
    const takeInput = (category) => {
      const title = document.querySelector('#add-task-text').value;
      if(title.length > 0){
        // get Today's date 
        const date = new Date();
        let newTask = new Task(title, category, date);
        // add task to DOM
        Task.addTaskPanel(newTask);
        // Store task on Local storage
        _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.addTaskToLS(newTask);
      }else{
        alert("Please enter at least one character")
      }
      Task.clearInputField('#add-task-text');
    }
    const taskContainer = document.querySelector('.add-task-container');
    const addBtn = document.querySelector('.add-task-btn');
    // ENTER KEY
    taskContainer.addEventListener('keypress', (e) => {
      if(e.key === 'Enter'){
        takeInput(category)
      }
    })
    // mouseup unlike click does not interact with the enter key
    addBtn.addEventListener('mouseup', () =>{
      takeInput(category);
    })
    // mobile handler
    // addBtn.addEventListener('touchend', () =>{
    //   takeInput(category);
    // })
  }

  // Clear Input fields
  static clearInputField(element) {
    document.querySelector(element).value = '';
  }
  
  // Change task dones status on screen
  static taskDone(e) {
    if (e.target.classList.contains('TaskItemCheckbox')){
      const task = e.target.parentElement;
    
      let title = e.target.nextElementSibling.firstElementChild.innerHTML;
      const tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
      /*Get index by the task title pressed. 
      So that we change the state of only that task*/ 
      let taskIndex = tasks.findIndex((task) => task.title == title )
      if (tasks[taskIndex].done){
        task.setAttribute('aria-disabled', false);
        
      }else{
        task.setAttribute('aria-disabled', true);
      } 
    }
  }

  // Delete Task
  static deleteTask(e){
    if (e.target.classList.contains('TaskItemDelete')){
      e.target.parentElement.remove();
    }
  }

  // Display tasks
  static displayTasks = () => {
    let tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
    tasks.forEach((task) => {
      Task.addTaskPanel(task)
      
    });
  }
  
  static displayTasksCategorically = (category) => {
    let tasks = _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.store.getTasks();
    tasks.map((task) => {
      if(task.category == category) {
        Task.addTaskPanel(task);
      }
    })
  }
  
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/addTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFIMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekMsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBaUI7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9TdG9yZVRhc2svc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9tb2R1bGVzL2FkZFRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8tQ3JlYXRlIFRhc2sgQXJyYXkgd2l0aCB0aGUgdGFzayB0YWdzLS8vXHJcbmNsYXNzIHN0b3JlIHtcclxuICAvL1RBU0tTLy9cclxuICBzdGF0aWMgZ2V0VGFza3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFza3M7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCl7XHJcbiAgICAgIHRhc2tzID0gW107XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGdldFNpbmdsZVRhc2sgPSAodGFza1RpdGxlKSA9PiB7XHJcbiAgICBsZXQgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XHJcbiAgICBsZXQgdGFzaztcclxuICAgIHRhc2tzLmZvckVhY2goKHNpbmdsZVRhc2spID0+IHtcclxuICAgICAgaWYoc2luZ2xlVGFzay50aXRsZSA9PSB0YXNrVGl0bGUpe1xyXG5cclxuICAgICAgICB0YXNrID0gc2luZ2xlVGFza1xyXG4gICAgICB9O1xyXG4gICAgfSlcclxuICAgIHJldHVybiB0YXNrO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNhdmVUYXNrICh0YXNrcyl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkVGFza1RvTFModGFzayl7XHJcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xyXG4gIH1cclxuICAvLyBBZGQgRGF0ZVxyXG4gIHN0YXRpYyBhZGREYXRlKHRhc2tUaXRsZSwgZGF0ZSl7XHJcbiAgICBsZXQgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XHJcbiAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRhc2tUaXRsZSk7XHJcbiAgICB0YXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPSBkYXRlOyBcclxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xyXG4gIH1cclxuICAvLyByZW1vdmUgVGFza1xyXG4gIHN0YXRpYyBMU3JlbW92ZVRhc2soZSl7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xyXG4gICAgICAvLyBnZXQgdGl0bGVcclxuICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XHJcbiAgICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XHJcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYodGFzay50aXRsZSA9PSB0aXRsZSl7XHJcbiAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gQ2hhbmdlIGRvbmUgc3RhdGUgb24gTFNcclxuICBzdGF0aWMgY2hhbmdlRG9uZVN0YXRlKGUpe1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcclxuICAgICAgICAvLyBnZXQgdGl0bGVcclxuICAgICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xyXG4gICAgICAvKkdldCBpbmRleCBieSB0aGUgdGFzayB0aXRsZSBwcmVzc2VkLiBcclxuICAgICAgU28gdGhhdCB3ZSBjaGFuZ2UgdGhlIHN0YXRlIG9mIG9ubHkgdGhhdCB0YXNrKi8gXHJcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXHJcbiAgICAgICAgaWYgKHRhc2tzW3Rhc2tJbmRleF0uZG9uZSl7XHJcbiAgICAgICAgICB0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZycsIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xyXG4gIFxyXG4gICAgICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9DQVRFR09SSUVTICBcclxuICBzdGF0aWMgc3RvcmVDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XHJcbiAgfVxyXG4gIC8vIEdldCBjYXRlZ29yaWVzXHJcbiAgc3RhdGljIGdldENhdGVnb3JpZXMoKXtcclxuICAgIGxldCBjYXRlZ29yaWVzO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSA9PT0gbnVsbCl7XHJcbiAgICAgIGNhdGVnb3JpZXMgPSBbXTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgfVxyXG5cclxuICAvLyBEZWxldGUgVGFzayBpZiB0YXNrIGNhdGVnb3J5ID09IGNhdGVnb3J5XHJcbiAgc3RhdGljIGRlbGV0ZVRhc2tzRnJvbUNhdGVnb3J5KHRhc2tzLCBjYXRlZ29yeSl7XHJcbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sudGFnICE9PSBjYXRlZ29yeSlcclxuICBcclxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIExTZGVsZXRlQ2F0ZWdvcnkoZSl7XHJcbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcclxuICAgIGxldCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcclxuICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpPT57XHJcbiAgICAgIGlmKGNhdGVnb3J5ID09ICB0aXRsZSl7XHJcbiAgICAgICAgY2F0ZWdvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xyXG4gICAgICBzdG9yZS5kZWxldGVUYXNrc0Zyb21DYXRlZ29yeSh0YXNrcywgdGl0bGUpO1xyXG4gICAgfSlcclxuICB9XHJcbiAvLyBzYXZlIG9uIGNoYW5nZXMgXHJcbiAgc3RhdGljIFNhdmVOb3Rlcyh0YXNrVGl0bGUsIGh0bWxWYWx1ZSkge1xyXG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xyXG4gICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0YXNrVGl0bGUpO1xyXG4gICAgdGFza3NbdGFza0luZGV4XS5ub3RlcyA9IGh0bWxWYWx1ZTsgXHJcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBzdG9yZSB9OyIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlVGFzay9zdG9yZVwiO1xyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGNhdGVnb3J5LCBkYXRlQ3JlYXRlZCl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGVDcmVhdGVkID0gZGF0ZUNyZWF0ZWQ7XHJcbiAgICB0aGlzLm5vdGVzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gYWRkIGRhdGUgY3JlYXRlZCwgc3RvcmluZyB0aGUgZGF0ZSB0aGUgdGFzayBpcyBjcmVhdGVkLiBcclxuICB9XHJcbiAgLy8gQWRkIFRhc2sgVE8gUGFuZWxcclxuICBzdGF0aWMgYWRkVGFza1BhbmVsICh0YXNrKSB7XHJcbiAgICBjb25zdCB0YXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnZ3JpZCcpO1xyXG4gICAgXHJcbiAgICAvLyBEaXNwbGF5IHRhc2sgZG9uZSBvciB1bmRvbmVcclxuICAgIGlmICh0YXNrLmRvbmUpIHtcclxuICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpXHJcbiAgICB9XHJcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxidXR0b24gdHlwZT1cInJhZGlvXCIgcm9sZT1cImNoZWNrYm94XCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIiBjbGFzcz1cIlRhc2tJdGVtQ2hlY2tib3hcIj48L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJ0YXNrLWNhdGVnb3J5XCI+JHt0YXNrLmNhdGVnb3J5fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIlRhc2tJdGVtRGVsZXRlXCI+PC9idXR0b24+XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICB0YXNrUGFuZWwuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcblxyXG4gIC8vIFRha2UgaW5wdXRcclxuICBzdGF0aWMgdGFrZUlucHV0RXZlbnQgKGNhdGVnb3J5KSB7XHJcbiAgICAvLyBGdW50aW9uIHRvIHRha2UgaW5wdXQgb24gZW50ZXIga2V5IHByZXNzZWQgb3IgY2xpY2tcclxuICAgIGNvbnN0IHRha2VJbnB1dCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay10ZXh0JykudmFsdWU7XHJcbiAgICAgIGlmKHRpdGxlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIC8vIGdldCBUb2RheSdzIGRhdGUgXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgY2F0ZWdvcnksIGRhdGUpO1xyXG4gICAgICAgIC8vIGFkZCB0YXNrIHRvIERPTVxyXG4gICAgICAgIFRhc2suYWRkVGFza1BhbmVsKG5ld1Rhc2spO1xyXG4gICAgICAgIC8vIFN0b3JlIHRhc2sgb24gTG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHN0b3JlLmFkZFRhc2tUb0xTKG5ld1Rhc2spO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyXCIpXHJcbiAgICAgIH1cclxuICAgICAgVGFzay5jbGVhcklucHV0RmllbGQoJyNhZGQtdGFzay10ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xyXG4gICAgLy8gRU5URVIgS0VZXHJcbiAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xyXG4gICAgICAgIHRha2VJbnB1dChjYXRlZ29yeSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIG1vdXNldXAgdW5saWtlIGNsaWNrIGRvZXMgbm90IGludGVyYWN0IHdpdGggdGhlIGVudGVyIGtleVxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PntcclxuICAgICAgdGFrZUlucHV0KGNhdGVnb3J5KTtcclxuICAgIH0pXHJcbiAgICAvLyBtb2JpbGUgaGFuZGxlclxyXG4gICAgLy8gYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT57XHJcbiAgICAvLyAgIHRha2VJbnB1dChjYXRlZ29yeSk7XHJcbiAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQ2xlYXIgSW5wdXQgZmllbGRzXHJcbiAgc3RhdGljIGNsZWFySW5wdXRGaWVsZChlbGVtZW50KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIENoYW5nZSB0YXNrIGRvbmVzIHN0YXR1cyBvbiBzY3JlZW5cclxuICBzdGF0aWMgdGFza0RvbmUoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcclxuICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBcclxuICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcclxuICAgICAgY29uc3QgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xyXG4gICAgICAvKkdldCBpbmRleCBieSB0aGUgdGFzayB0aXRsZSBwcmVzc2VkLiBcclxuICAgICAgU28gdGhhdCB3ZSBjaGFuZ2UgdGhlIHN0YXRlIG9mIG9ubHkgdGhhdCB0YXNrKi8gXHJcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGl0bGUgKVxyXG4gICAgICBpZiAodGFza3NbdGFza0luZGV4XS5kb25lKXtcclxuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERlbGV0ZSBUYXNrXHJcbiAgc3RhdGljIGRlbGV0ZVRhc2soZSl7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbURlbGV0ZScpKXtcclxuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIERpc3BsYXkgdGFza3NcclxuICBzdGF0aWMgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgVGFzay5hZGRUYXNrUGFuZWwodGFzaylcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGRpc3BsYXlUYXNrc0NhdGVnb3JpY2FsbHkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XHJcbiAgICB0YXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay5jYXRlZ29yeSA9PSBjYXRlZ29yeSkge1xyXG4gICAgICAgIFRhc2suYWRkVGFza1BhbmVsKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0e1Rhc2t9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==