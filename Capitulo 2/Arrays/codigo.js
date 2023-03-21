/* variable = guarda un dato
ARRAYS = guarda muchos datos */
let frutas = ["banana", "manzana", "pera"];
document.write(frutas[2]); /*Entre los corchetes llamamos a las posiciones, y arrancamos a contar los elementos desde 0*/

/*Array asosiativo*/
let pc = {
    nombre: "anabe",
    modelo: "hp",
    color: "gris",
};

document.write(pc["color"]);

let nombre = pc["nombre"];
let modelo = pc["modelo"];
let color = pc["color"];

frase = `El nombre de mi PC es: ${nombre} <br>
         el modelo es: ${modelo} <br>
         y su color es: ${color}`;

document.write(frase);