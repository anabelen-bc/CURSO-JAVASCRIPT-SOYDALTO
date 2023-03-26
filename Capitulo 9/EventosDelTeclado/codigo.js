const contenedor = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown", (e)=>{
    console.log("Una tecla fue presionada");
})

input.addEventListener("keypress", (e)=>{
    console.log("Un usuario presiono una tecla");
})

input.addEventListener("keyup", (e)=>{
    console.log("Una tecla fue soltada");
})



