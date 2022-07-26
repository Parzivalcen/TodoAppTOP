"use strict";
(self["webpackChunktodoapp"] = self["webpackChunktodoapp"] || []).push([["storage"],{

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
        let taskIndex = tasks.findIndex((task) => task.title == title )
        if (tasks[taskIndex].done == 'undone'){
          tasks[taskIndex].done = 'done';
          console.log('chang', tasks[taskIndex].done)
        }else{
          tasks[taskIndex].done = 'undone';
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
    console.log('index', taskIndex);
    tasks[taskIndex].notes = htmlValue; 
    this.saveTask(tasks);
  }

}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/StoreTask/store.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9TdG9yZVRhc2svc3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8tQ3JlYXRlIFRhc2sgQXJyYXkgd2l0aCB0aGUgdGFzayB0YWdzLS8vXG5jbGFzcyBzdG9yZSB7XG4gIC8vVEFTS1MvL1xuICBzdGF0aWMgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKXtcbiAgICAgIHRhc2tzID0gW107XG4gICAgfWVsc2V7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cbiAgXG4gIHN0YXRpYyBnZXRTaW5nbGVUYXNrID0gKHRhc2tUaXRsZSkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcbiAgICBsZXQgdGFzaztcbiAgICB0YXNrcy5mb3JFYWNoKChzaW5nbGVUYXNrKSA9PiB7XG4gICAgICBpZihzaW5nbGVUYXNrLnRpdGxlID09IHRhc2tUaXRsZSl7XG5cbiAgICAgICAgdGFzayA9IHNpbmdsZVRhc2tcbiAgICAgIH07XG4gICAgfSlcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIHN0YXRpYyBzYXZlVGFzayAodGFza3Mpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcbiAgfVxuXG4gIHN0YXRpYyBhZGRUYXNrVG9MUyh0YXNrKXtcbiAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XG4gIH1cbiAgLy8gQWRkIERhdGVcbiAgc3RhdGljIGFkZERhdGUodGFza1RpdGxlLCBkYXRlKXtcbiAgICBsZXQgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0YXNrVGl0bGUpO1xuICAgIHRhc2tzW3Rhc2tJbmRleF0uZHVlRGF0ZSA9IGRhdGU7IFxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xuICB9XG4gIC8vIHJlbW92ZSBUYXNrXG4gIHN0YXRpYyBMU3JlbW92ZVRhc2soZSl7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbURlbGV0ZScpKXtcbiAgICAgIC8vIGdldCB0aXRsZVxuICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XG4gICAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYodGFzay50aXRsZSA9PSB0aXRsZSl7XG4gICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIENoYW5nZSBkb25lIHN0YXRlIG9uIExTXG4gIHN0YXRpYyBjaGFuZ2VEb25lU3RhdGUoZSl7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcbiAgICAgICAgLy8gZ2V0IHRpdGxlXG4gICAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XG5cbiAgICAgICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXG4gICAgICAgIGlmICh0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPT0gJ3VuZG9uZScpe1xuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9ICdkb25lJztcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmcnLCB0YXNrc1t0YXNrSW5kZXhdLmRvbmUpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9ICd1bmRvbmUnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xuICBcbiAgICAgICAgfTtcbiAgfVxuXG5cbiAgLy9DQVRFR09SSUVTICBcbiAgc3RhdGljIHN0b3JlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcbiAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuICB9XG4gIC8vIEdldCBjYXRlZ29yaWVzXG4gIHN0YXRpYyBnZXRDYXRlZ29yaWVzKCl7XG4gICAgbGV0IGNhdGVnb3JpZXM7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSA9PT0gbnVsbCl7XG4gICAgICBjYXRlZ29yaWVzID0gW107XG4gICAgfWVsc2V7XG4gICAgICBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKVxuICAgIH1cbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfVxuXG4gIC8vIERlbGV0ZSBUYXNrIGlmIHRhc2sgY2F0ZWdvcnkgPT0gY2F0ZWdvcnlcbiAgc3RhdGljIGRlbGV0ZVRhc2tzRnJvbUNhdGVnb3J5KHRhc2tzLCBjYXRlZ29yeSl7XG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZyAhPT0gY2F0ZWdvcnkpXG4gIFxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xuICB9XG5cbiAgc3RhdGljIExTZGVsZXRlQ2F0ZWdvcnkoZSl7XG4gICAgbGV0IHRpdGxlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KT0+e1xuICAgICAgaWYoY2F0ZWdvcnkgPT0gIHRpdGxlKXtcbiAgICAgICAgY2F0ZWdvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4gICAgICBzdG9yZS5kZWxldGVUYXNrc0Zyb21DYXRlZ29yeSh0YXNrcywgdGl0bGUpO1xuICAgIH0pXG4gIH1cbiAvLyBzYXZlIG9uIGNoYW5nZXMgXG4gIHN0YXRpYyBTYXZlTm90ZXModGFza1RpdGxlLCBodG1sVmFsdWUpIHtcbiAgICBsZXQgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0YXNrVGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIHRhc2tJbmRleCk7XG4gICAgdGFza3NbdGFza0luZGV4XS5ub3RlcyA9IGh0bWxWYWx1ZTsgXG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBzdG9yZSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==