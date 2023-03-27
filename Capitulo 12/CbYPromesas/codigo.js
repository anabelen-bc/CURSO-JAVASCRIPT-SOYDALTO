class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.nombre = instagram;
    }
}

const data = [
    ["Lucas Dalto", "@SoyDalto"],
    ["Ana Belen Benitez", "@indaptada_"],
];

const personas = [];
for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[0][1]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] == undefined) reject("No se ha encontrado la persona")
        else {resolve(personas[id])}
    })
}
const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) =>{
        if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram")
        else {resolve(personas[id].instagram)}
    })
}

let id = 0;

obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram();
}).then((instagram) => {
    console.log(instagram);
}).catch((e) => {
    console.log(e);
})
