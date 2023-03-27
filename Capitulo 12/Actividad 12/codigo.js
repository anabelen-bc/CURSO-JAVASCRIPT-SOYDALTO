const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica",
        nota: 10
    },
    {
        nombre: "Calculo",
        nota: 8
    },
    {
        nombre: "Matematicas",
        nota: 6
    },
    {
        nombre: "Programacion",
        nota: 7
    }
]

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)}, Math.random() * 400)
    })
}
const devolverMaterias = async () => {
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] =  await obtenerMateria(i);
        console.log(materia[i])   
        let newHTMLCode = `<div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
     }
}

devolverMaterias()