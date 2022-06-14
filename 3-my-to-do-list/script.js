const $ = document;
const inputDiv = $.getElementById('inputDiv');
const taskDiv = $.getElementById('taskDiv')
const taskUL = $.getElementById('taskUL');

const input = $.createElement('input');
input.className = 'inputTask'
inputDiv.appendChild(input);

const inputButton = $.createElement('button');
inputButton.className = 'button'
inputButton.textContent = 'Adicionar'
inputDiv.appendChild(inputButton);

const removeTask = (event) => {
event.target.remove();
const liTask =  $.querySelectorAll('.liTask')
const textLI = taskUL.innerHTML
saveTasks(textLI)
}

const addTask = () => {
    const list = [];
    if (input.value.length > 0) {
        list.push(input.value);
        list.forEach((task) => {
            const liTask = $.createElement('li');
            liTask.textContent = task
            liTask.className = 'liTask';
            taskUL.appendChild(liTask);
            liTask.addEventListener('dblclick', removeTask)
            input.value = '';
        })
    }
    const taskList = taskUL.innerHTML;
    saveTasks(taskList)
    console.log(taskList)
}

inputButton.addEventListener('click', addTask);

const cleanAll = () => {
    const completed =  $.querySelectorAll('.liTask');
    completed.forEach((completed) => completed.remove())
    saveTasks(taskUL)
}

const buttonCleanAll = $.createElement('button');
buttonCleanAll.className = 'button'
buttonCleanAll.textContent = 'Limpar'
inputDiv.appendChild(buttonCleanAll)
buttonCleanAll.addEventListener('click', cleanAll)

const saveTasks = (parametro) => sessionStorage.setItem('tasks',JSON.stringify(parametro));

const getSessionStorage = (parametro) => JSON.parse(sessionStorage.getItem(parametro));

const getTasksSaved = () => {
    if (sessionStorage.tasks.length > 2) {
        const aaa = getSessionStorage('tasks')
        taskUL.innerHTML = aaa;
        const liTask = $.querySelectorAll('.liTask');
        liTask.forEach((task) => task.addEventListener('dblclick', removeTask))
    }
}


window.onload = () => getTasksSaved()

   
