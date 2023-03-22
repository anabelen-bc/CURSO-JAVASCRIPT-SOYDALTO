// let cadena = "cadena de prueba";

// resultado = cadena.concat(" hola");

// document.write(resultado); 
// Contact junta las diferentes cadenas.


// startWith verifica si una cadena, empieza como la otra cadena, de ser asi devuelta TRUE, de lo contrario nos devuelve FALSE
// endWith verifica si las cadenas terminan iguales, de ser asi muestra true, de lo contrario false

// let prueba = "cadena de prueba"
// resultado1 = cadena.startsWith(prueba);
// document.write(resultado1);

// Includes busca si las palabras de una cadena estan dentro de otra cadena, no necesariament tiene que ser al principio, ni al final.

let palabras = "Hola como estas?";
let palabra = "como";

// resultado2 = palabras.includes(palabra);

// document.write(resultado2);
 

//IndexOf nos devuelve la posicion donde comienza la primer letra de la palabra que le indicamos.
// LastIndexOf, nos devuelve la ultima posicion de la letra de la palabra que conincide 
resultado3 = palabras.indexOf(palabra);

document.write(resultado3);

resultado4 = palabras.lastIndexOf(palabra);
document.write(resultado4);



