/*FUNCION: Es una porcion de codigo, con un nombre especifico, para poder llamarlo cuando sea necesario*/

function saludo() {
    let respuesta = prompt("¡Hola Ani! ¿Como fue tu dia?");
    if (respuesta == "bien") {
        alert("me alegro");
    } else {
        alert("una pena");
    }
}

saludo();
saludo();