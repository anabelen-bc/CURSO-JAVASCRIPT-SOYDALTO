/*FUNCION: Es una porcion de codigo, con un nombre especifico, para poder llamarlo cuando sea necesario*/

function saludo() {
    let respuesta = prompt("¡Hola Ani! ¿Como fue tu dia?");
    if (respuesta == "bien") {
        return("me alegro");
    } else {
        return("una pena");
    }
}
let saludar = saludo();
document.write(saludar);

/*Return, nos devuelve una respuesta*/