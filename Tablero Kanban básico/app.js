let tareas = document.querySelectorAll("ul.listaTareas > li");
let tareaSeleccionada = "";

//Desaparesca la tarea de la seccion de tareas al ser arrastrada

tareas.forEach(function(tarea){
    tarea.addEventListener("dragstart", function(event){
    setTimeout(()=>{this.style.display = "none";}, 0);
    cambiarTareaSeleccionada(tarea);
    
})
})

//Funcion para saber que tarea fue seleccionada

function cambiarTareaSeleccionada(tarea){
    tareaSeleccionada = tarea;
    console.log(tareaSeleccionada);
}

//Reaparecer tarea si se suelta y no esta en una zona de drop

tareas.forEach(function(tarea){
    tarea.addEventListener("dragend", function(){
        this.style.display = "block";
    })
})

//Eventos de las dropzone

let dropzone = document.querySelectorAll(".contenedorTareas");

//Eventos para que al poner una tarea en el bloque se cambie el color de fondo

dropzone.forEach(function(droparea){
    droparea.addEventListener("dragover", function(event){
        event.preventDefault();
        this.style.backgroundColor = "#c8c8c838";
    })
})

dropzone.forEach(function(droparea){
    droparea.addEventListener("dragleave", function(event){
        this.style.backgroundColor = "transparent";
    })
})

//Evento para que la tarea se quede en la zona de drop

dropzone.forEach(function(droparea){
    droparea.addEventListener("drop", function(){
        tareaSeleccionada.style.display = "block";
        this.appendChild(tareaSeleccionada);
        this.style.backgroundColor = "transparent";
    })
    
})






