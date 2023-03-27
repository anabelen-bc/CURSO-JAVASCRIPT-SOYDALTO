// // function prueba(callback){ //Esto es una funcion 
// //     callback("pedro");// y esto lo ejecuta
// // }

// prueba(nombre=> console.log(nombre)) //Esto es otro callback

class Persona {
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.nombre = instagram;
    }
}

const data = [
    ["Lucas Dalto", "@SoyDalto"],
    ["Ana Belen Benitez", "@indaptada_"],
];

const personas = [];
for (let i = 0; i < data.length; i++){
    personas[i]= new Persona(data[i][0],data[0][1]);
}

 const obtenerPersona = (id,cb) =>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la persona");
    } else {
        cb(null,personas[id],id)
    }
}
const obtenerInstagram = (id,cb) => {
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el instragram");
    } else {
        cb(null,personas[id].instagram)
    }
} 

obtenerPersona(0,(err,persona, id)=>{
    if(err){
        console.log(err)
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id, (err,persona)=>{
            if(err){
                console.log(err);
            } else {
                console.log(instagram);
            }
        });
    }
})

