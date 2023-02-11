'use strict';

/* no funcionalet datos = [{
    title : 'mis datos' ,
    isReady : true,
    description : '',
    date: new Date(),
}];
let todo = []

const creartodo = ( todo) => {
    
    return {
    title : todo,
    isReady : false ,
    description : Holasoyladescripcion ,
    date : new Date (),

 };
}
const form = document.querySelector('#miform');
      
const printTodo = () =>{
    const printTodoList= document.querySelector('#todo-list');
    let print = '';
    datos.forEach((todo) =>{
    let isCheck = todo.isReady ? 'ESTE TODO esta listo':'Este todo no esta listo';
    print += `<div class ="card">
                <div class ="card-body">
                <h5 class = "card-litte">${todo.title}</h5>
                <h5 class = "card-litte">${todo.description}</h5>
                <h6 class = "card-subtitle mb-2 text-muted">${todo.date}</h6>
                <p class="card-text">${isCheck}</p>
                <button class = "btn btn-primary">todo is ready </a>
                </div>
                </div>`
    });
printTodoList.innerHTML= print;
}
form.addEventListener('change', (event) =>{
        todo =(event.target.value)
        console.log(event.target.value)
        console.log(event.target.name)
});
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    datos.push(creartodo(todo));
    printTodo();
});
window.onload = () =>{
    printTodo();
}
*/
const form = document.querySelector("#form");
const taskList = document.querySelector("#task-list");

let tasks = [];

form.addEventListener("submit", event => {
  event.preventDefault();
  const title = form.elements.title.value;
  const description = form.elements.description.value;
  const date = form.elements.date.value;
  const isReady = form.elements.isReady.value === "true";
  tasks.push({ title, description, date, isReady });
  form.reset();
  updateTaskList();
});

const updateTaskList = () => {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const taskItem = document.createElement("li");
    taskItem.textContent = `${task.title} - ${task.description} - ${task.date} - ${task.isReady}`;
    taskList.appendChild(taskItem);
  });
};








