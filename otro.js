'use strict'

let todoList = [{
        title:'Aprender JS',
        descripcion :'',
        isReady:true ,
        date: new Date (),
}]
let todo = '';
const form = document.querySelector('#miformulario');

const createTodo = (todo) =>{
  return  {
        title : todo,
        isReady : false,
        date: new Date(),
    }
}
const printTodo = () =>{
    const printTodoList = document.querySelector('#todo-list');
    let print ='';
    todoList.forEach((todo) =>{
        let isCheck = todo.isReady ? ' ESTE TODO esta listo' : 'este todo no esta listo '
        print += `      <div class ="card" style="width: 18rem;">
                            <div class ="card-body">
                                <h5 class = "card-litte">${todo.title}</h5>
                                <h6 class = "card-subtitle mb-2 text-muted">${todo.date}</h6>
                                <p class="card-text">${isCheck}</p>
                                <button class = "btn btn-primary">todo is ready </a>
                            </div>
                        </div>`
    });
    printTodoList.innerHTML = print;
}

miformulario.addEventListener('change', (event) =>{
    todo =(event.target.value)
});
miformulario.addEventListener('submit', (event) =>{
event.preventDefault();
todoList.push(createTodo(todo));
printTodo();
});
window.onload = () =>{
printTodo();
}


