// // sqrt () Muesta la raiz cuadrada
let numero = Math.sqrt(25);

document.write(numero + "<br>");
// // cbrt () raiz cubica 
let numero1 = Math.cbrt(25)
document.write(numero1 + "<br>");
 

// // max() -  min() muestran el maximo y el minimo, de muchos numeros que le pasemos dentro de ()
 let numeros = Math.max(20, 50, 1, 2, 3, 4, 5, 100, 0);

 document.write(numeros + "<br>");

let numeros1 = Math.min(20, 50, 1, 2, 3, 4, 5, 100, 0);

document.write(numeros1 + "<br>");

// //random() devuelve un numero psuedo aleatorio entre 0 y 1

numero3 = Math.random();

document.write(numero3 + "<br>");

numero4 = Math.random()*100;
numero4= numero4.toString();
num = numero4[0] + numero4[1];

document.write(num + "<br>");

// round() nos devuelve un valor redondeado al numero mas cercano

let nnumero = Math.random()*100;
nnumero = Math.round(nnumero);

document.write(nnumero + "<br>");


//fround()
let num1 = Math.fround(9.99999999999);

document.write(num1 + "<br>" + "<br>");

//floor() nos rodondea el numero para abajo, unicamente lo que hace es sacarle los numeros que estan desoues de la ,

let numeross = Math.random()*100;
numeross = Math.floor(5.999);

document.write(numeross + "<br>" + "<br>");
//trunc() recorta los numeros decimales

let num2 = Math.trunc(9.89);

document.write(num2);

