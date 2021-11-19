let formElement = document.getElementById('todo-form'),
    taskContainer = document.getElementById('task-container');

function addTask(e){
    e.preventDefault();
    let todoTaskEle = document.getElementById('todo-task'),
        todoTaskValue = todoTaskEle.value,

    //to create new li,span,a element
    liEle = document.createElement('li');
    spanEle = document.createElement('span'),
    doneEle = document.createElement('a'),
    editEle = document.createElement('a'),
    deleteEle = document.createElement('a');
    spanEle.innerHTML = todoTaskValue;
    //add class
    doneEle.classList.add('done-btn');
    editEle.classList.add('edit-btn');
    deleteEle.classList.add('delete-btn');
    //add text
    doneEle.innerHTML = 'done';
    editEle.innerHTML = 'edit';
    deleteEle.innerHTML = 'delete';
    //add attribute
    doneEle.setAttribute('href','#');
    editEle.setAttribute('href','#');
    deleteEle.setAttribute('href','#');
    //insert span,a tag to li
    liEle.appendChild(spanEle);
    liEle.appendChild(doneEle);
    liEle.appendChild(editEle);
    liEle.appendChild(deleteEle);
    //insert li tag to ol
    taskContainer.append(liEle);
    todoTaskEle.value = '';
}

formElement.addEventListener('submit',addTask);