# Get things done. 
For people that get things done!

[Check it Out](https://thingsdone.davidcendev.com/)

A to-do list will help you to not forget important things and meet your deadlines when they are due.

![Desktop](./src/imgs/readme/Screenshot%20from%202022-07-26%2004-39-20.png)
## Early Design
![Sketch](./src/imgs/readme/Screenshot%20from%202022-07-23%2018-38-46.png)
# Docs
This is the biggest app I have created so far, I did it using ES6 modules, webpack, and date-fns library to format dates.
## Using modules
Using modules for largeish applications like this one makes it a lot easier to separate what I’m doing at a specific moment, I don’t have to look through so many lines of code, which is something that I was struggling with other projects before I started learning about webpack and bundled JavaScript.
## Folder structure
The source folder contains all the main files to run the WebApp. 

The index.js file is used to render all the components

|Folder Name| Content|
|-----------|--------|
|Modules    | Contains all the modules for the app UI and UX interactions.    |
|Styles     | Contains styles for each module.   |
|StoreTask  | Contains modules to store Data in Local Storage   |
|Imgs       | All SVGs and images used through the App.   |

  - ## Modules 
      |File name| Content|
      |------------|--------|
      |addTask.js  | Contains the task object constructor and functions to change things inside the to-do Panel|
      |addToDo.js  | Contains the To-Do Panel HTML|
      |footer.js   | Just the footer :) |
      |home.js     | Contains the sidebar HTML, the hero, and functions to clean and blur the hero |
      |sideBar.js  | All events and interactions with the sidebar    |
      |taskPanel.js| Task descriptions panel HTML, dates, and notes are handled here    |
    



## Please feel free to contribute :)