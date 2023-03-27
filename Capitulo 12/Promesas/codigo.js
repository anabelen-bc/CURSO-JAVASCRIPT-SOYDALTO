//Las promesas representan una operacion asincrona, y el fracaso de una operacion asincrona
let nombre = "pedroo";
const promesa = new Promise((resolve, reject)=>{
    if (nombre !== "pedro") reject("Lo siento, el nombre no es pedro")
    else resolve(nombre);
})

promesa.then((resultado) =>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})