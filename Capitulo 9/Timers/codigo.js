// Nos permite realizar trabajos con tiempo
const saludar = ()=>{
    document.write("Hola");
}

const temporizador = setTimeout(saludar, 2000);
// clearTimeout(temporizador) sirve para parar el setTimeout

const intervalo= setInterval(()=>{
    document.write("hola")
},2000)

// clearInterval(intervalo);

setTimeout(()=>{
    clearInterval(intervalo);
},10000)