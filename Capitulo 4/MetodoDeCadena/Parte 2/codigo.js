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

//padStart nos rellena el princio de nuestra cadena de caracteres, hasta las posiciones que se indica, con la letra que se le indica

resultado5 = palabra.padStart(10, "a");
document.write(resultado5);