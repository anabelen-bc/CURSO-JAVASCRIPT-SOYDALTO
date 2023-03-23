
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Alvarez","pedro", "juan", "pepito"],
        logica: ["Messi","pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Bonadeo","pedro", "juan", "pepito", "cofla", "maria"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red"> ${profesor}</b> <br> y los alumnos son; ${alumnos}</br>`);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){

        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style='color:blue'> ${alumno}</b> esta en <b>${cantidadTotal} clases </b><br>
    Esta cursando las clases: <b>${clasesPresentes}</b><br><br>`;
}
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");
document.write(cantidadDeClases("cofla"));



