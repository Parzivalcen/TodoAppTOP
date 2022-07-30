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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/StoreTask/store.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvU3RvcmVUYXNrL3N0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLUNyZWF0ZSBUYXNrIEFycmF5IHdpdGggdGhlIHRhc2sgdGFncy0vL1xyXG5jbGFzcyBzdG9yZSB7XHJcbiAgLy9UQVNLUy8vXHJcbiAgc3RhdGljIGdldFRhc2tzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tzO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpe1xyXG4gICAgICB0YXNrcyA9IFtdO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFza3M7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBnZXRTaW5nbGVUYXNrID0gKHRhc2tUaXRsZSkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xyXG4gICAgbGV0IHRhc2s7XHJcbiAgICB0YXNrcy5mb3JFYWNoKChzaW5nbGVUYXNrKSA9PiB7XHJcbiAgICAgIGlmKHNpbmdsZVRhc2sudGl0bGUgPT0gdGFza1RpdGxlKXtcclxuXHJcbiAgICAgICAgdGFzayA9IHNpbmdsZVRhc2tcclxuICAgICAgfTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzYXZlVGFzayAodGFza3Mpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFRhc2tUb0xTKHRhc2spe1xyXG4gICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcclxuICB9XHJcbiAgLy8gQWRkIERhdGVcclxuICBzdGF0aWMgYWRkRGF0ZSh0YXNrVGl0bGUsIGRhdGUpe1xyXG4gICAgbGV0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xyXG4gICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay50aXRsZSA9PSB0YXNrVGl0bGUpO1xyXG4gICAgdGFza3NbdGFza0luZGV4XS5kdWVEYXRlID0gZGF0ZTsgXHJcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcclxuICB9XHJcbiAgLy8gcmVtb3ZlIFRhc2tcclxuICBzdGF0aWMgTFNyZW1vdmVUYXNrKGUpe1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrSXRlbURlbGV0ZScpKXtcclxuICAgICAgLy8gZ2V0IHRpdGxlXHJcbiAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xyXG4gICAgICBsZXQgdGFza3MgPSBzdG9yZS5nZXRUYXNrcygpO1xyXG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHRhc2sudGl0bGUgPT0gdGl0bGUpe1xyXG4gICAgICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlVGFzayh0YXNrcylcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIENoYW5nZSBkb25lIHN0YXRlIG9uIExTXHJcbiAgc3RhdGljIGNoYW5nZURvbmVTdGF0ZShlKXtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2tJdGVtQ2hlY2tib3gnKSl7XHJcbiAgICAgICAgLy8gZ2V0IHRpdGxlXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tzID0gc3RvcmUuZ2V0VGFza3MoKTtcclxuICAgICAgLypHZXQgaW5kZXggYnkgdGhlIHRhc2sgdGl0bGUgcHJlc3NlZC4gXHJcbiAgICAgIFNvIHRoYXQgd2UgY2hhbmdlIHRoZSBzdGF0ZSBvZiBvbmx5IHRoYXQgdGFzayovIFxyXG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGl0bGUgKVxyXG4gICAgICAgIGlmICh0YXNrc1t0YXNrSW5kZXhdLmRvbmUpe1xyXG4gICAgICAgICAgdGFza3NbdGFza0luZGV4XS5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmcnLCB0YXNrc1t0YXNrSW5kZXhdLmRvbmUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0YXNrc1t0YXNrSW5kZXhdLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcclxuICBcclxuICAgICAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vQ0FURUdPUklFUyAgXHJcbiAgc3RhdGljIHN0b3JlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgIGxldCBjYXRlZ29yaWVzID0gc3RvcmUuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xyXG4gIH1cclxuICAvLyBHZXQgY2F0ZWdvcmllc1xyXG4gIHN0YXRpYyBnZXRDYXRlZ29yaWVzKCl7XHJcbiAgICBsZXQgY2F0ZWdvcmllcztcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJykgPT09IG51bGwpe1xyXG4gICAgICBjYXRlZ29yaWVzID0gW107XHJcbiAgICB9ZWxzZXtcclxuICAgICAgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSlcclxuICAgIH1cclxuICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVsZXRlIFRhc2sgaWYgdGFzayBjYXRlZ29yeSA9PSBjYXRlZ29yeVxyXG4gIHN0YXRpYyBkZWxldGVUYXNrc0Zyb21DYXRlZ29yeSh0YXNrcywgY2F0ZWdvcnkpe1xyXG4gICAgdGFza3MgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnRhZyAhPT0gY2F0ZWdvcnkpXHJcbiAgXHJcbiAgICB0aGlzLnNhdmVUYXNrKHRhc2tzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBMU2RlbGV0ZUNhdGVnb3J5KGUpe1xyXG4gICAgbGV0IHRpdGxlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHN0b3JlLmdldENhdGVnb3JpZXMoKTtcclxuICAgIGxldCB0YXNrcyA9IHN0b3JlLmdldFRhc2tzKCk7XHJcbiAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KT0+e1xyXG4gICAgICBpZihjYXRlZ29yeSA9PSAgdGl0bGUpe1xyXG4gICAgICAgIGNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcclxuICAgICAgc3RvcmUuZGVsZXRlVGFza3NGcm9tQ2F0ZWdvcnkodGFza3MsIHRpdGxlKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gLy8gc2F2ZSBvbiBjaGFuZ2VzIFxyXG4gIHN0YXRpYyBTYXZlTm90ZXModGFza1RpdGxlLCBodG1sVmFsdWUpIHtcclxuICAgIGxldCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKTtcclxuICAgIGxldCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sudGl0bGUgPT0gdGFza1RpdGxlKTtcclxuICAgIHRhc2tzW3Rhc2tJbmRleF0ubm90ZXMgPSBodG1sVmFsdWU7IFxyXG4gICAgdGhpcy5zYXZlVGFzayh0YXNrcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgc3RvcmUgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=