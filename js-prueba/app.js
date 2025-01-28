const btnAdd = document.getElementById('add');
const input = document.getElementById('agregar');
const textV = document.querySelector('.list_tareas p');
const contain = document.querySelector('.list_tareas ul');


btnAdd.addEventListener('click', (e)=>{
    e.preventDefault();
    let data = input.value;
    console.log(data)
    textV.textContent = '';

    if (data != ''){
    let tarea = document.createElement('li');
    let tareaText = document.createElement('h3');
    let btnDelete = document.createElement('button');

    tareaText.textContent = data;
    btnDelete.textContent = 'X';
    contain.appendChild(tarea);
    tarea.appendChild(tareaText);
    tarea.appendChild(btnDelete);

    tarea.classList.add('tarea_basic');
    btnDelete.classList.add('btn-delete');
    }

    input.value = '';

});





