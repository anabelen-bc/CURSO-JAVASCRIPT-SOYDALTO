const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

button.addEventListener("dblclick", (e)=>{ //Cuando haces doble click nos muestra el mensaje
    alert("di click en un boton");},true)

contenedor1.addEventListener("mouseover", (e)=>{ //Sirve cuando el mouse unicamente se mueve sobre un elemento o uno de sus hijos
    alert("di click en el contenedor rojo");
})

contenedor2.addEventListener("mouseout", (e)=>{
    alert("di click en el contenedor azul");
})

contenedor2.addEventListener("contextmenu", (e)=>{
    alert("di click en el contenedor azul");
})

contenedor2.addEventListener("mouseenter", (e)=>{// Cuando entra al contenedor nos aparece el alerta
    alert("di click en el contenedor azul");
})

contenedor2.addEventListener("mouseleave", (e)=>{// Cuando se mueve fuera del elemento y  nos aparece el alerta
    alert("di click en el contenedor azul");
})

