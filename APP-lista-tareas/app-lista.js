function inicio(){
    const add = document.querySelector(".form-add");
    add.addEventListener("submit",añadirTarea,false);

    const lista = document.querySelector(".list-group");
    lista.addEventListener("click",eliminarTarea,false);

    const buscar = document.getElementById("search");
    buscar.addEventListener("keyup",buscarTarea,false);
}



function getPlantillaTarea(nuevaTarea){
    lista = document.querySelector(".list-group");

    const plantilla = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${nuevaTarea}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    lista.innerHTML += plantilla;
}




function añadirTarea(e){
    e.preventDefault();

    var nuevaTarea = document.getElementById("add").value.trim(); //con trim() ignoramos los posibles espacios

    //si el formulario está vacío, NO añadimos ninguna tarea.
    if(nuevaTarea.length){
        getPlantillaTarea(nuevaTarea);

        document.getElementById("add").value = "";
    }
}




function eliminarTarea(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
}




function buscarTarea(){
    buscar = document.getElementById("search");
    
    const buscarUsuario = buscar.value.trim().toLowerCase();
    
    compararTarea(buscarUsuario);
}




function compararTarea(buscarUsuario){
    lista = document.querySelector(".list-group");
    Array.from(lista.children)
        .filter(task => !task.textContent.toLowerCase().includes(buscarUsuario))
        .forEach(filteredTask => {
            filteredTask.classList.add('ocultarTarea');
            filteredTask.classList.remove('d-flex');
        });

    Array.from(lista.children)
        .filter(task => task.textContent.toLowerCase().includes(buscarUsuario))
        .forEach(filteredTask => {
            filteredTask.classList.remove('ocultarTarea');
            filteredTask.classList.add('d-flex');
        });

}



window.addEventListener("load",inicio,false);