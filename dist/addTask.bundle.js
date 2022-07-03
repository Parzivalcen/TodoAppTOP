/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/StoreTask/store.js":
/*!********************************!*\
  !*** ./src/StoreTask/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSchangeDoneState": () => (/* binding */ LSchangeDoneState),
/* harmony export */   "LSremoveTask": () => (/* binding */ LSremoveTask),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "localStoraddTask": () => (/* binding */ localStoraddTask)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/UI/addTask.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskPanel": () => (/* binding */ addTaskPanel),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "takeInput": () => (/* binding */ takeInput),
/* harmony export */   "taskDone": () => (/* binding */ taskDone)
/* harmony export */ });
/* harmony import */ var _StoreTask_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StoreTask/store */ "./src/StoreTask/store.js");


class Task {
  constructor(title, tag){
    this.title = title;
    this.tag = tag;
    this.done = 'undone';
    // add properties like done 
  }
}
const displayTasks = () => {
  let tasks = (0,_StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
  tasks.forEach((task) => {
    addTaskPanel(task)
    
  });
}
const addTaskPanel = (task) => {
  const taskPanel = document.querySelector('.tasks');
  let taskDiv = document.createElement('div');
  taskDiv.classList.add('task', 'grid');

  
  if (task.done == 'undone') {
    taskDiv.setAttribute('aria-disabled', false)
  }else{
    taskDiv.setAttribute('aria-disabled', true)
  }
  taskDiv.innerHTML = `
  <button type="radio" role="checkbox" aria-checked="false" class="TaskItemCheckbox"></button>
  <div class="task-content">
    <p class="task-title">${task.title}</p>
    <p class="task-tag">${task.tag}</p>
  </div>
  <button class="TaskItemDelete">X</button>
  `;
  console.log(taskDiv);
  taskPanel.appendChild(taskDiv);
}

const takeInput = (tag) => {
  const addBtn = document.querySelector('.add-task-btn');
  addBtn.addEventListener('click', () => {
    const title = document.querySelector('#add-task-text').value;
    let newTask = new Task(title, tag);
    // add task to DOM
    addTaskPanel(newTask);
    // Store task on Local storage
    (0,_StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.localStoraddTask)(newTask);
  })
}

const deleteTask = (e) => {
  if (e.target.classList.contains('TaskItemDelete')){
    e.target.parentElement.remove();
  }
}

const taskDone = (e) => {
  if (e.target.classList.contains('TaskItemCheckbox')){
    const task = e.target.parentElement;

    let title = e.target.nextElementSibling.firstElementChild.innerHTML;
    const tasks = (0,_StoreTask_store__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
    let taskIndex = tasks.findIndex((task) => task.title == title )
    if (tasks[taskIndex].done == 'undone'){
      task.setAttribute('aria-disabled', true);
      
    }else{
      task.setAttribute('aria-disabled', false);
    }
    
  }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUMvQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMERBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QywwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWdCO0FBQ3BCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwREFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9TdG9yZVRhc2svc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvVUkvYWRkVGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgbGV0IHRhc2tzO1xuICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCl7XG4gICAgdGFza3MgPSBbXTtcbiAgfWVsc2V7XG4gICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgfVxuICByZXR1cm4gdGFza3M7XG59XG5cbi8vIGFkZCB0YXNrIHRvIGxvY2FsIFN0b3JhZ2VcbmNvbnN0IGxvY2FsU3RvcmFkZFRhc2sgPSAodGFzaykgPT4ge1xuICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICB0YXNrcy5wdXNoKHRhc2spO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5jb25zdCBMU3JlbW92ZVRhc2sgPSAoZSkgPT4ge1xuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xuICAgIC8vIGdldCB0aXRsZVxuICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgIGxldCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmKHRhc2sudGl0bGUgPT0gdGl0bGUpe1xuICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IExTY2hhbmdlRG9uZVN0YXRlID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1DaGVja2JveCcpKXtcbiAgICAgLy8gZ2V0IHRpdGxlXG4gICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgY29uc29sZS5sb2coJ2NoYW5nJywgdGl0bGUpXG4gICAgICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXG4gICAgICBpZiAodGFza3NbdGFza0luZGV4XS5kb25lID09ICd1bmRvbmUnKXtcbiAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gJ2RvbmUnO1xuICAgICAgICBjb25zb2xlLmxvZygnY2hhbmcnLCB0YXNrc1t0YXNrSW5kZXhdLmRvbmUpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gJ3VuZG9uZSc7XG4gICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcblxuICAgICAgfTtcbiAgfVxuXG5leHBvcnQge2xvY2FsU3RvcmFkZFRhc2ssIGdldFRhc2tzLCBMU3JlbW92ZVRhc2ssIExTY2hhbmdlRG9uZVN0YXRlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFRhc2tzLCBsb2NhbFN0b3JhZGRUYXNrIH0gZnJvbSBcIi4uL1N0b3JlVGFzay9zdG9yZVwiO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHRhZyl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIHRoaXMuZG9uZSA9ICd1bmRvbmUnO1xuICAgIC8vIGFkZCBwcm9wZXJ0aWVzIGxpa2UgZG9uZSBcbiAgfVxufVxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgYWRkVGFza1BhbmVsKHRhc2spXG4gICAgXG4gIH0pO1xufVxuY29uc3QgYWRkVGFza1BhbmVsID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycsICdncmlkJyk7XG5cbiAgXG4gIGlmICh0YXNrLmRvbmUgPT0gJ3VuZG9uZScpIHtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKVxuICB9ZWxzZXtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpXG4gIH1cbiAgdGFza0Rpdi5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gdHlwZT1cInJhZGlvXCIgcm9sZT1cImNoZWNrYm94XCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIiBjbGFzcz1cIlRhc2tJdGVtQ2hlY2tib3hcIj48L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxuICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ0YXNrLXRhZ1wiPiR7dGFzay50YWd9PC9wPlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBjbGFzcz1cIlRhc2tJdGVtRGVsZXRlXCI+WDwvYnV0dG9uPlxuICBgO1xuICBjb25zb2xlLmxvZyh0YXNrRGl2KTtcbiAgdGFza1BhbmVsLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufVxuXG5jb25zdCB0YWtlSW5wdXQgPSAodGFnKSA9PiB7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRleHQnKS52YWx1ZTtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCB0YWcpO1xuICAgIC8vIGFkZCB0YXNrIHRvIERPTVxuICAgIGFkZFRhc2tQYW5lbChuZXdUYXNrKTtcbiAgICAvLyBTdG9yZSB0YXNrIG9uIExvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZGRUYXNrKG5ld1Rhc2spO1xuICB9KVxufVxuXG5jb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnVGFza0l0ZW1EZWxldGUnKSl7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5jb25zdCB0YXNrRG9uZSA9IChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtQ2hlY2tib3gnKSl7XG4gICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09IHRpdGxlIClcbiAgICBpZiAodGFza3NbdGFza0luZGV4XS5kb25lID09ICd1bmRvbmUnKXtcbiAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICAgIH1cbiAgICBcbiAgfVxufVxuXG5cbmV4cG9ydHtcbiAgYWRkVGFza1BhbmVsLCBcbiAgdGFrZUlucHV0LCBcbiAgZGVsZXRlVGFzaywgXG4gIHRhc2tEb25lLFxuICBkaXNwbGF5VGFza3N9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==