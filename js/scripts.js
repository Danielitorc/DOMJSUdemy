// //querySelector retorna 0 o 1 elementos

// const heading = document.querySelector("h2");//Seleccciono el elemento HTML
// heading.textContent = "Nuevo Texto"//Modifico el texto del element selecciondo
// console.log(heading);//Imprimo nuevo contenido

// //querySelectorAll retorna o selecciona varios elementos
// const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces);//Imprimo los elementos seleccionados, los mostrara a modo de arreglos

// // enlaces[0].textContent = "Nuevo texto enlace en la posicion 0";//Modifico el texto de un elemento en espeicifico, Para acceder a un elemento en especifico se selecciona por su pocision como si accederia a una pocision de un arreglo

// //getElementById la manera antigua de acceder a los elementos HTML
// const heading2 = document.getElementById("heading");
// console.log(heading2);

// /********* Generar contenido HTML ************/
// //Genero un nuevo enlace
// const nuevoEnlace = document.createElement("A");

// //Agrego la URL
// nuevoEnlace.href = "https://www.youtube.com/";

// //Agrego el Texto del nuevo enlace
// nuevoEnlace.textContent = "Youtube";

// //agrego la clase de HTML que le dara estilos a traves de CSS
// nuevoEnlace.classList.add("navegacion__enlace");

// //Agregar el nuevo elemento al HTML
// const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(nuevoEnlace);


/******** Eventos en JS**********/
// console.log(1);

// window.addEventListener("load", function(){//load es una palabra reservada y espera a que el JS y todos los archivos que dependen del HTML esten listos para ejecutarse
//     console.log(2);
// });

// window.onload = function(){//funciona igual que el load, solo cambia la sintaxis
//     console.log(3);
// }

// document.addEventListener("DOMContentLoaded", function(){//Solo espera por el HTML, pero no espera CSS o imagenes, es decir se ejecuta antes que los dos eventos de arriba
//     console.log(4);
// });

// console.log(5);


//Seleccionar elementos y asociarle eventos
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(evento){
//     console.log(evento);
//     evento.preventDefault();//Utilizado para validar formularios

//     console.log("Enviando Formulario");
// });


/********* Eventos con el teclado *************/
/******  Eventos de los input y textarea ******/
//Validando el contenido de los input de un formulario

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//Evento de submit para validar el formulario
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const {nombre, email, mensaje} = datos;

    if(nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
        
    mostrarAlerta("Sus datos se enviaron correctamente");
   
});

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

//Mostrar notificacciones de manera simplificada para el envio de formularios
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje = mensaje;

    if(error){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("enviar");
    }

    formulario.appendChild(alerta);

    setTimeout( () => {
    alerta.remove();
    }, 4000);

}


//Enviar notificaciones de manera extendida (separada por paartes)


//Muestra un error en pantalla
// function mostrarError(mensaje){
//     const error = document.createElement("P");
//     error.textContent = mensaje;
//     error.classList.add("error");

//     formulario.appendChild(error);

//     setTimeout( () => {
//         error.remove();
//     }, 4000);
// }


// //Envio notificaion de que se envio el archivo
// function envioCorrecto(mensaje){
//     const enviar = document.createElement("P");
//     enviar.textContent = mensaje;
//     enviar.classList.add("enviar");

//     formulario.appendChild(enviar)
//     setTimeout( () => {
//         enviar.remove();
//     }, 4000);
// }