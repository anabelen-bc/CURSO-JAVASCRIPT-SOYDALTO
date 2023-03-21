let numeroParaSumar = 0;
/*Condicional con IF*/ 
if (numeroParaSumar < 10){
    numeroParaSumar++;
    document.write(numeroParaSumar);
}
/*BUCLE con WHILE*/

while (numeroParaSumar < 10) {
    numeroParaSumar++;
    document.write(numeroParaSumar + "<br>");
}  /*Un bucle se ejecuta hasta que la condicion deje de cumplirse*/

/*BUCLE empezando con DO y le sigue el WHILE*/

do {
    numeroParaSumar++;
    document.write(numeroParaSumar + "<br>")
}

while (numeroParaSumar <= 6)

/*WHILE HASTA QUE SE CUMPLA EL IF*/
 while (numeroParaSumar < 1000){
    numeroParaSumar++;
    document.write(numeroParaSumar);
    if (numero == 10){
        break;
    }
} 
