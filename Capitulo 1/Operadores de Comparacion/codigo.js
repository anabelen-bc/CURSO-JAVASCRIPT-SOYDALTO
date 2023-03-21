let numero = 23;
let numero2 = 23;
let texto ="23";
let texto2 = "Texto 2";
/*Pregunta si son iguales*/
document.write(numero == numero2);
/*Pregunta si son distintos*/
document.write(numero != numero2);
/*Pregunta si son estrictamente iguales*/
document.write(texto === numero);
/*Pregunta si no es estrictamente igual*/
document.write(texto !== numero);

let valor = true;
let valor2 = true;
/*Si las dos condiciones se cumplen, me va a devolver un resultado true*/
let resultado = valor && valor2;
/*Si las dos condiciones son verdaderas, nos devuelte verdadero*/
let resultado2 = valor || valor2;
/*Nos devuelve el contrario de lo que le damos*/
let resultado3 = !valor;

document.write(resultado3);