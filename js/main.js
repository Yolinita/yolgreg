//////////////////////MENU HAMBURGUESA PARA EL MODO MOBILE/////////////////////
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => { 
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})
////////////////////////////////////////////////////////////////////////////////
 

/////////////Función para abrir el menú al hacer clic en el botón cv////////////
 document.addEventListener('DOMContentLoaded', function() {
   document.querySelector('.menu-item').addEventListener('click', function() {
     nav.classList.add('menu-abierto');
   });
 });

document.getElementById("boton").addEventListener("click", function() {
    // Cambiar el color del botón al hacer clic
    this.style.backgroundColor = "#ffb5a7";
  });
/////////////////////////////////////////////////////////////////////////////////


/////Obtén todos los elementos con la clase "contenedor-habilidades"/////////////
var habilidades = document.getElementsByClassName("contenedor-habilidades");


for (var i = 0; i < habilidades.length; i++) {
  habilidades[i].addEventListener("click", function() {
    
    this.classList.toggle("resaltado");
  });
}
////////////////////////////////////////////////////////////////////////////////


