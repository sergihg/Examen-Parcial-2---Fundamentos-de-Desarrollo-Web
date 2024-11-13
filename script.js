let taskToRemove =null;
const container = document.querySelector('.container');
const taskInput = document.getElementById('inputTask');
const priority = document.getElementById('priority');

function addTask() {

    if(taskInput.value.trim()) {
        const newTask = document.createElement('div');
        newTask.classList.add('card');
        newTask.classList.add(priority.value);


        const taskD = document.createElement('p');
        taskD.textContent = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.onclick = function() {
            if(newTask.classList.contains('high')){
                let confirmationCont = document.getElementById('modal');
                taskToRemove = newTask;

                confirmationCont.classList.remove('hide');
                confirmationCont.classList.add('show');
            }else
            container.removeChild(newTask);
        }

        taskInput.value = '';

        newTask.appendChild(taskD);
        newTask.appendChild(deleteBtn);
    
        container.appendChild(newTask);

    }
}

function deleteTask(conf) {
    let confirmationCont = document.getElementById('modal');
    if(conf) {
        container.removeChild(taskToRemove);
    } else {
        
    }
    confirmationCont.classList.remove('show');
    confirmationCont.classList.add('hide');
    taskToRemove= null;
}
