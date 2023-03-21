function suma(num1, num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}
/*Llamando a los parametros cuando llamamos la funcion, es igual que declarar las variables adentro de la funcion*/
/*Los parametros son variables que se declaran dentro de una funcion*/

suma(10, 10);
suma(25, 25);
suma(23, 69);


function saludar(nombre){
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
     document.write(frase);
     document.write("<br>");
}


saludar("Ani")
saludar("Faah")