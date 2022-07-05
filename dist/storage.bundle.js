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
/* harmony export */   "LSchangeDoneState": () => (/* binding */ LSchangeDoneState),
/* harmony export */   "LSremoveTask": () => (/* binding */ LSremoveTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "localStoraddTask": () => (/* binding */ localStoraddTask)
/* harmony export */ });

//-Create Task Array with the task tags-//

const getTasks = () => {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

// add task to local Storage
const localStoraddTask = (task) => {
  let tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const LSremoveTask = (e) => {
  if(e.target.classList.contains('TaskItemDelete')){
    // get title
    let title = e.target.previousElementSibling.firstElementChild.innerHTML;
    let tasks = getTasks();
    tasks.forEach((task, index) => {
      if(task.title == title){
        tasks.splice(index, 1);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks))
    });
  }
}

const LSchangeDoneState = (e) => {
  if (e.target.classList.contains('TaskItemCheckbox')){
     // get title
      let title = e.target.nextElementSibling.firstElementChild.innerHTML;
      console.log('chang', title)
      let tasks = getTasks();
      let taskIndex = tasks.findIndex((task) => task.title == title )
      if (tasks[taskIndex].done == 'undone'){
        tasks[taskIndex].done = 'done';
        console.log('chang', tasks[taskIndex].done)
      }else{
        tasks[taskIndex].done = 'undone';
      }
        localStorage.setItem('tasks', JSON.stringify(tasks))

      };
  }


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9TdG9yZVRhc2svc3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8vLUNyZWF0ZSBUYXNrIEFycmF5IHdpdGggdGhlIHRhc2sgdGFncy0vL1xuXG5jb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgbGV0IHRhc2tzO1xuICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCl7XG4gICAgdGFza3MgPSBbXTtcbiAgfWVsc2V7XG4gICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuICByZXR1cm4gdGFza3M7XG59XG5cbi8vIGFkZCB0YXNrIHRvIGxvY2FsIFN0b3JhZ2VcbmNvbnN0IGxvY2FsU3RvcmFkZFRhc2sgPSAodGFzaykgPT4ge1xuICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICB0YXNrcy5wdXNoKHRhc2spO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5jb25zdCBMU3JlbW92ZVRhc2sgPSAoZSkgPT4ge1xuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xuICAgIC8vIGdldCB0aXRsZVxuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgIGxldCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmKHRhc2sudGl0bGUgPT0gdGl0bGUpe1xuICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IExTY2hhbmdlRG9uZVN0YXRlID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcbiAgICAgLy8gZ2V0IHRpdGxlXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgY29uc29sZS5sb2coJ2NoYW5nJywgdGl0bGUpXG4gICAgICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXG4gICAgICBpZiAodGFza3NbdGFza0luZGV4XS5kb25lID09ICd1bmRvbmUnKXtcbiAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gJ2RvbmUnO1xuICAgICAgICBjb25zb2xlLmxvZygnY2hhbmcnLCB0YXNrc1t0YXNrSW5kZXhdLmRvbmUpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gJ3VuZG9uZSc7XG4gICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcblxuICAgICAgfTtcbiAgfVxuXG5leHBvcnQge2xvY2FsU3RvcmFkZFRhc2ssIGdldFRhc2tzLCBMU3JlbW92ZVRhc2ssIExTY2hhbmdlRG9uZVN0YXRlfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=