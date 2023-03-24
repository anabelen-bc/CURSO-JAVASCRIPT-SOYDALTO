let materias = {
    fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Alvarez", "pedro", "juan", "pepito"],
    logica: ["Messi", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Bonadeo", "pedro", "juan", "pepito", "cofla", "maria"]
}


const inscribir = (alumno, materia) => {
    personas = materias[materia];
    personas = personas;
    if (personas.length >= 21) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br> <br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        } else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica'],
            }
        } else if (materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica'],
            }
        } else if (materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas,

            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} exitosamente <br><br>`);
    }
}
document.write(materias['fisica'] + "<br>");
inscribir("pedrito", "fisica");
inscribir("julian", "fisica");
inscribir("agustin", "fisica");
inscribir("enzo", "fisica");
inscribir("roberto", "fisica");
inscribir("pedrito", "fisica");
inscribir("julian", "fisica");
inscribir("agustin", "fisica");
inscribir("enzo", "fisica");
inscribir("roberto", "fisica");
inscribir("pedrito", "fisica");
inscribir("julian", "fisica");
inscribir("agustin", "fisica");
inscribir("enzo", "fisica");
inscribir("roberto", "fisica");
inscribir("pedrito", "fisica");
inscribir("julian", "fisica");
inscribir("agustin", "fisica");
inscribir("enzo", "fisica");
inscribir("roberto", "fisica");
document.write("<br>" + materias['fisica']);