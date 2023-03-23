let nombres = ["pedro", "maria", "jorge"];
let nombres2 =["Lucia", "Julian", "Agustin"];
// pop() borra el ultimo elemento 
document.write(nombres + "<br>"); //array orginal
let resultado = nombres.pop();//elimina el ultimo elemento
document.write(resultado + "<br>"); //muestra el elemento eliminado
document.write(nombres + "<br>");//array modificado


// shif elimina el primer elemento
document.write(nombres2 + "<br>"); //array orginal
let resultado1 = nombres2.shift();//elimina el ultimo elemento
document.write(resultado1 + "<br>"); //muestra el elemento eliminado
document.write(nombres2 + "<br>");//array modificado


//push() agrega un elemento al final del array
document.write(nombres2 + "<br>");
let resultado2 = nombres2.push("Antonella");
document.write(resultado2 + "<br>"); //nos muestra la cantidad de elementos que tiene ahora el array
document.write(nombres2 + "<br>");

//reverse() invierte el orden del array

let numeros = [1, 2, 3, 4, 5, 6, 7];
document.write(numeros + "<br>");
let resultado3 = numeros.reverse();
document.write(resultado3 + "<br>");


// unshift agrega elementos al array 
document.write(numeros + "<br>");
let resultado4 = numeros.unshift(0);
document.write(numeros + "<br>");

document.write(numeros + "<br>");
let resultado5 = numeros.unshift(8, 9, 10);
document.write(numeros + "<br>");

//sort ordenar el array si son numeros de menor a mayor, si son palabras son en forma alfabetica 
document.write(numeros + "<br>");
numeros.sort();
document.write(numeros + "<br>");

// splice() elimina elementos que le indicas con el numero de posicion, y en la misma linea podemos agregar elementos, en el lugar de los que elimanmos la forma de referirse al final de un array es con -1

let apellidos =["Benitez", "Rios", "Franco", "Cardozo", "Normal"];
document.write(apellidos + "<br>");

apellidos.splice(1, 2, "Blanco", "Rios");

document.write(apellidos + "<br>");