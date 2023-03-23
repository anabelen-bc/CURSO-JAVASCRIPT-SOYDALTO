let palabras = "Hola  como  estas?";
let palabra = "ABCDEFG";
let numero = 52;
let espacios = "    hola    ";
 //Split, divide nuestra cadena de caracteres, conviritiendola en un array, como le pidamos despues del split


 resultado = palabras.split(",");

 document.write(resultado[0]);

//subString nos devuelve un nuevo string a partir del que nosotros mencionamos, y le debemos indicar donde queremos que empiece y termine, mediante los siguientes comandos (0,3), el caracter numero 3 ya no lo cuenta.
 
resultado1 = palabra.substring(2,4);
 document.write(resultado1);

//toLowerCase() nos convierte la cadena de texto en minuscula

resultado2 = palabra.toLocaleLowerCase();
document.write(resultado2);

//toUpperCase() nos convierte la cadena de texto en mayuscula 

resultado3 = palabras.toLocaleUpperCase();
document.write(resultado3);

//toString() convierte lo que le indiquemos en string

resultado4 = numero.toString();
document.write(resultado4 * 2);
document.write(resultado4 + resultado4);

//trim nos elimina los espacios en blanco, lo vea o no el usuario 

resultado5 = espacios.trim();
document.write(resultado5);
document.write(espacios.length);
document.write(resultado5.length);

//trimEnd() elimina los espacios del final del string
// y trimStrat() elimina los del principio


