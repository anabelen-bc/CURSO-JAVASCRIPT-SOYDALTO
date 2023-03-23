// join () une la cadena de texto, y tambien se le pueden agrega cosas, PERO A PARTIR DE LOS QUE LE SUMAMOS SE CREA UN NUEVO ARRAY, no se modifica el original

let nombres = ["Ani", "Faah", "Ju", "Vir", "So"];


document.write(nombres + "<br>");
let resultado = nombres.join(" - ");

document.write(resultado + "<br>");

//slice () toma una parte del array original, para crear uno nuevo, nosotros le indicamos con el numero de las posiciones cual queremos, pero nunca va  a incluir al ultimo elemnto (0, 2); no incluye el elemento dos

document.write(nombres + "<br>");
let resultado1 = nombres.slice(0, 3);
document.write(resultado1 + "<br>");

document.write(nombres + "<br>");
let resultado2 = nombres.slice(3, 5);
document.write(resultado2 + "<br>");
// Includes te devuelve true o false, dependiendo si el elemento que buscamos se encuentra en el array

document.write(nombres + "<br>");
let resultado3 = nombres.includes("Ju");
document.write(resultado3 + "<br>");

//indexOfs te muestra en que posicion se encuentra el elemento que le mencionamos

document.write(nombres + "<br>");
let resultado4 = nombres.indexOf("Faah");
document.write(resultado4);