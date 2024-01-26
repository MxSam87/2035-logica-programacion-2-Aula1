//Ejercicios de DOM = Document Object Model

//querySelector es el método que permite acceder a cada uno de los elementos
//Aquí la variable ya es un objeto, es decir que no es un tipo de dato primitivo.
let titulo = document.querySelector("h1");
titulo.innerHTML="Juego de número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML="Indica un número del 1 al 10";

//Javascript utiliza eventos para cada acción (ejemplos click, mouseover, etc.)

//declaración de una función 
function intentoDeUsuario() {
    alert("Click desde el botón");
    
}