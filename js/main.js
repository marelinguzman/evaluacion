import {lista_de_componentes} from './Data.js';

function cargar_tareas(){

    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    lista_de_componentes.forEach((cada_tarea) => {

        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if(cada_tarea.estado){
            div_tarea.innerHTML = `
            
            <p class="texto">${cada_tarea.descripcion}</p>
            <button class="btn_mas"></button>
        `;
        }else {
            div_tarea.innerHTML = `
            <h2 class="nombre">${cada_tarea.nombre}</h2>
            <p class="texto">${cada_tarea.descripcion}</p>
            <button class="btn_mas"></button>
        `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });
}
cargar_tareas();

function cargar_botones(){
    let caja_btn = document.querySelector(".botones");

    caja_btn.innerHTML = ` `;
}
cargar_botones();

function cargar_formulario(){
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b")
    ventana_formulario.innerHTML = ` <button class="btn_mas"></button> `;
}

// PROGRAMACIÓN DEL BOTON
let btn_formulario = document.querySelector(".btn_mas");
btn_formulario.addEventListener("click", cargar_formulario)