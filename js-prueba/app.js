const btnAdd = document.getElementById('add');
const input = document.getElementById('agregar');
const textV = document.querySelector('.list_tareas p');
const contain = document.querySelector('.list_tareas ul');
const openAdd = document.getElementById('addTarea')
const popCuadro = document.querySelector('.pop-cuadro')
const btnExit = document.querySelector('.btn-x');

openAdd.addEventListener('click', ()=>{
    popCuadro.classList.toggle('show');
});

btnExit.addEventListener('click', ()=>{
    popCuadro.classList.toggle('show');
})

btnAdd.addEventListener('click', (e)=>{
    e.preventDefault();
    let data = input.value;
    console.log(data)
    textV.textContent = '';

    if (data != ''){
    let tarea = document.createElement('li');
    let tareaText = document.createElement('h3');
    tareaText.textContent = data;
    
    contain.appendChild(tarea);
    tarea.appendChild(tareaText);
    tarea.classList.add('tarea_basic');
    tarea.appendChild(deleteBtn());}
    input.value = '';

});

function deleteBtn(){
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.classList.add('btn-delete');   

btnDelete.addEventListener('click', (e)=>{
    let item = e.target.parentElement;
    contain.removeChild(item);

})
    return btnDelete;
}




