/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/StoreTask/store.js ***!
  \********************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL1N0b3JlVGFzay9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vLUNyZWF0ZSBUYXNrIEFycmF5IHdpdGggdGhlIHRhc2sgdGFncy0vL1xuY2xhc3Mgc3RvcmUge1xuICAvL1RBU0tTLy9cbiAgc3RhdGljIGdldFRhc2tzID0gKCkgPT4ge1xuICAgIGxldCB0YXNrcztcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCl7XG4gICAgICB0YXNrcyA9IFtdO1xuICAgIH1lbHNle1xuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG4gIFxuICBzdGF0aWMgZ2V0U2luZ2xlVGFzayA9ICh0YXNrVGl0bGUpID0+IHtcbiAgICBsZXQgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XG4gICAgbGV0IHRhc2s7XG4gICAgdGFza3MuZm9yRWFjaCgoc2luZ2xlVGFzaykgPT4ge1xuICAgICAgaWYoc2luZ2xlVGFzay50aXRsZSA9PSB0YXNrVGl0bGUpe1xuXG4gICAgICAgIHRhc2sgPSBzaW5nbGVUYXNrXG4gICAgICB9O1xuICAgIH0pXG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBzdGF0aWMgc2F2ZVRhc2sgKHRhc2tzKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXG4gIH1cblxuICBzdGF0aWMgYWRkVGFza1RvTFModGFzayl7XG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xuICB9XG4gIC8vIEFkZCBEYXRlXG4gIHN0YXRpYyBhZGREYXRlKHRhc2tUaXRsZSwgZGF0ZSl7XG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xuICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGFza1RpdGxlKTtcbiAgICB0YXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPSBkYXRlOyBcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcbiAgfVxuICAvLyByZW1vdmUgVGFza1xuICBzdGF0aWMgTFNyZW1vdmVUYXNrKGUpe1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1EZWxldGUnKSl7XG4gICAgICAvLyBnZXQgdGl0bGVcbiAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmKHRhc2sudGl0bGUgPT0gdGl0bGUpe1xuICAgICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYXZlVGFzayh0YXNrcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyBDaGFuZ2UgZG9uZSBzdGF0ZSBvbiBMU1xuICBzdGF0aWMgY2hhbmdlRG9uZVN0YXRlKGUpe1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtQ2hlY2tib3gnKSl7XG4gICAgICAgIC8vIGdldCB0aXRsZVxuICAgICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuXG4gICAgICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGl0bGUgKVxuICAgICAgICBpZiAodGFza3NbdGFza0luZGV4XS5kb25lID09ICd1bmRvbmUnKXtcbiAgICAgICAgICB0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPSAnZG9uZSc7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nJywgdGFza3NbdGFza0luZGV4XS5kb25lKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPSAndW5kb25lJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcbiAgXG4gICAgICAgIH07XG4gIH1cblxuXG4gIC8vQ0FURUdPUklFUyAgXG4gIHN0YXRpYyBzdG9yZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSBzdG9yZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbiAgfVxuICAvLyBHZXQgY2F0ZWdvcmllc1xuICBzdGF0aWMgZ2V0Q2F0ZWdvcmllcygpe1xuICAgIGxldCBjYXRlZ29yaWVzO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykgPT09IG51bGwpe1xuICAgICAgY2F0ZWdvcmllcyA9IFtdO1xuICAgIH1lbHNle1xuICAgICAgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSlcbiAgICB9XG4gICAgcmV0dXJuIGNhdGVnb3JpZXM7XG4gIH1cblxuICAvLyBEZWxldGUgVGFzayBpZiB0YXNrIGNhdGVnb3J5ID09IGNhdGVnb3J5XG4gIHN0YXRpYyBkZWxldGVUYXNrc0Zyb21DYXRlZ29yeSh0YXNrcywgY2F0ZWdvcnkpe1xuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay50YWcgIT09IGNhdGVnb3J5KVxuICBcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcbiAgfVxuXG4gIHN0YXRpYyBMU2RlbGV0ZUNhdGVnb3J5KGUpe1xuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xuICAgIGxldCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XG4gICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCk9PntcbiAgICAgIGlmKGNhdGVnb3J5ID09ICB0aXRsZSl7XG4gICAgICAgIGNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuICAgICAgc3RvcmUuZGVsZXRlVGFza3NGcm9tQ2F0ZWdvcnkodGFza3MsIHRpdGxlKTtcbiAgICB9KVxuICB9XG4gLy8gc2F2ZSBvbiBjaGFuZ2VzIFxuICBzdGF0aWMgU2F2ZU5vdGVzKHRhc2tUaXRsZSwgaHRtbFZhbHVlKSB7XG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xuICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGFza1RpdGxlKTtcbiAgICBjb25zb2xlLmxvZygnaW5kZXgnLCB0YXNrSW5kZXgpO1xuICAgIHRhc2tzW3Rhc2tJbmRleF0ubm90ZXMgPSBodG1sVmFsdWU7IFxuICAgIHRoaXMuc2F2ZVRhc2sodGFza3MpO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgc3RvcmUgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=