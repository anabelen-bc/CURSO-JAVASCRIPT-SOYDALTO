console.count() //Cuantas veces ejecutamos la funcion 
console.count()
console.count()
console.countReset()// Se resetea el valor, y podemos volver a ejecutar la funcion 

function sumar(num1, num2){
    document.write(num1, num2);
    console.count();
}

sumar(2, 3);
sumar(3, 4);
sumar(5, 6);
sumar(6, 7);
sumar(8, 9);
sumar(9, 10);

console.countReset();

sumar(2, 3);
sumar(3, 4);
sumar(5, 6);
sumar(6, 7);
sumar(8, 9);
sumar(9, 10);
sumar(2, 3);
sumar(3, 4);
sumar(5, 6);
sumar(6, 7);
sumar(8, 9);
sumar(9, 10);

