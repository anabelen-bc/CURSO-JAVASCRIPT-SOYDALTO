const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

button.addEventListener("click", (e)=>{
    alert("di click en un boton");
    e.stopPropagation() //Termina con los eventos que estan asociados
},true)

contenedor1.addEventListener("click", (e)=>{
    alert("di click en el contenedor rojo");
    
})

contenedor2.addEventListener("click", (e)=>{
    alert("di click en el contenedor azul");
})