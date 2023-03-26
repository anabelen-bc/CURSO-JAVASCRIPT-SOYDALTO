//abort ocurre cuando un elemento madre elimina a su hijo
//error ocurre cuando sucede un error durante la carga de un archivo multimedia
//load ocurre cuando un objeto se ha cargado
//beforeunload ocurre antes de que el documento este apunto de cargarse
//unload  una vez que se descargo la pagina
//resize cuando se cambia el tamaño de la vista de un documento
// scroll sirve cuando se desplaza la barra de desplazamiento de un elemnte
//select ocurre cuando se selecciona algun texto de <input> o <textarea>

const img = document.querySelector(".img-prueba");
const input = document.querySelector(".input-prueba")
window.addEventListener("load", ()=>{
    console.log("Se cargo el sitio");
})

img.addEventListener("error", ()=>{
    console.log("ha susecido un error")
})

// addEventListener("beforeunload", ()=>{
//     console.log("Te estas por ir del sitio");
// })

addEventListener("unload", ()=>{
    console.log("Te estas por ir del sitio");
})

addEventListener("resize", ()=>{
    console.log("Estas cambiando la resolucion del sitio");
})

addEventListener("scroll", ()=>{
    console.log("Estas scrolleando");
})

input.addEventListener("select", ()=>{
    console.log("Estas seleccionando");
})
const contenedor = document.querySelector(".seleccionado");
input.addEventListener("select", (e)=>{
    let start = e.target.selecionStart;
    let end = e.target.seleccionEnd;
    let textoCompleto = input.ariaValueMax;
    contenedor.innerHTML = textoCompleto.substring(start,end);
})