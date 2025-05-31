let todoList = [];
function handleKeyEvent(event) {
    if (event.key === 'Enter') {
        addtoDo();
    }
}

function addtoDo() {
    let inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;
    inputElement.value = '';
    let dateElement = document.querySelector('.js-date-input');
    let duedate = dateElement.value;

    todoList.push({
        name, duedate
    });
    inputElement.value = '';
    dateElement.value = '';
    console.log(todoList);
    renderToDoList();
}
document.querySelector('.js-add-button').addEventListener('click',()=>{
    addtoDo();
});

function renderToDoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, duedate } = todoObject;
        const html = `
        <div>${i + 1}</div>
        <div>${name}</div> 
        <div>${duedate}</div>
        <div><button class="delete-button" 
        renderToDoList();
        ">Delete</button>
        </div>
        `
        todoListHTML += html;

    }
    
    document.querySelector('.js-input-task-names').innerHTML = todoListHTML;
    document.querySelectorAll('.delete-button').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1);
            renderToDoList();
        })
    })
}