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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkMsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFnQjtBQUNwQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMERBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvU3RvcmVUYXNrL3N0b3JlLmpzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL1VJL2FkZFRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLy1DcmVhdGUgVGFzayBBcnJheSB3aXRoIHRoZSB0YXNrIHRhZ3MtLy9cblxuY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gIGxldCB0YXNrcztcbiAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpe1xuICAgIHRhc2tzID0gW107XG4gIH1lbHNle1xuICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIH1cbiAgcmV0dXJuIHRhc2tzO1xufVxuXG4vLyBhZGQgdGFzayB0byBsb2NhbCBTdG9yYWdlXG5jb25zdCBsb2NhbFN0b3JhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgbGV0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgdGFza3MucHVzaCh0YXNrKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuY29uc3QgTFNyZW1vdmVUYXNrID0gKGUpID0+IHtcbiAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbURlbGV0ZScpKXtcbiAgICAvLyBnZXQgdGl0bGVcbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpZih0YXNrLnRpdGxlID09IHRpdGxlKXtcbiAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBMU2NoYW5nZURvbmVTdGF0ZSA9IChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtQ2hlY2tib3gnKSl7XG4gICAgIC8vIGdldCB0aXRsZVxuICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZycsIHRpdGxlKVxuICAgICAgbGV0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGl0bGUgKVxuICAgICAgaWYgKHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9PSAndW5kb25lJyl7XG4gICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9ICdkb25lJztcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nJywgdGFza3NbdGFza0luZGV4XS5kb25lKVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9ICd1bmRvbmUnO1xuICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXG5cbiAgICAgIH07XG4gIH1cblxuZXhwb3J0IHtsb2NhbFN0b3JhZGRUYXNrLCBnZXRUYXNrcywgTFNyZW1vdmVUYXNrLCBMU2NoYW5nZURvbmVTdGF0ZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRUYXNrcywgbG9jYWxTdG9yYWRkVGFzayB9IGZyb20gXCIuLi9TdG9yZVRhc2svc3RvcmVcIjtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YWcpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmRvbmUgPSAndW5kb25lJztcbiAgICAvLyBhZGQgcHJvcGVydGllcyBsaWtlIGRvbmUgXG4gIH1cbn1cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgbGV0IHRhc2tzID0gZ2V0VGFza3MoKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tQYW5lbCh0YXNrKVxuICAgIFxuICB9KTtcbn1cbmNvbnN0IGFkZFRhc2tQYW5lbCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnZ3JpZCcpO1xuXG4gIFxuICBpZiAodGFzay5kb25lID09ICd1bmRvbmUnKSB7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSlcbiAgfWVsc2V7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKVxuICB9XG4gIHRhc2tEaXYuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIHR5cGU9XCJyYWRpb1wiIHJvbGU9XCJjaGVja2JveFwiIGFyaWEtY2hlY2tlZD1cImZhbHNlXCIgY2xhc3M9XCJUYXNrSXRlbUNoZWNrYm94XCI+PC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cbiAgICA8cCBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgIDxwIGNsYXNzPVwidGFzay10YWdcIj4ke3Rhc2sudGFnfTwvcD5cbiAgPC9kaXY+XG4gIDxidXR0b24gY2xhc3M9XCJUYXNrSXRlbURlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgYDtcbiAgY29uc29sZS5sb2codGFza0Rpdik7XG4gIHRhc2tQYW5lbC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbn1cblxuY29uc3QgdGFrZUlucHV0ID0gKHRhZykgPT4ge1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay10ZXh0JykudmFsdWU7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgdGFnKTtcbiAgICAvLyBhZGQgdGFzayB0byBET01cbiAgICBhZGRUYXNrUGFuZWwobmV3VGFzayk7XG4gICAgLy8gU3RvcmUgdGFzayBvbiBMb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWRkVGFzayhuZXdUYXNrKTtcbiAgfSlcbn1cblxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtRGVsZXRlJykpe1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuY29uc3QgdGFza0RvbmUgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbUNoZWNrYm94Jykpe1xuICAgIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IHRpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0aXRsZSApXG4gICAgaWYgKHRhc2tzW3Rhc2tJbmRleF0uZG9uZSA9PSAndW5kb25lJyl7XG4gICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgICAgXG4gICAgfWVsc2V7XG4gICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9XG4gICAgXG4gIH1cbn1cblxuXG5leHBvcnR7XG4gIGFkZFRhc2tQYW5lbCwgXG4gIHRha2VJbnB1dCwgXG4gIGRlbGV0ZVRhc2ssIFxuICB0YXNrRG9uZSxcbiAgZGlzcGxheVRhc2tzfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=