/*Partes del FOR 
DECLARAMOS VARIABLES
INICIALIZAMOS
CONDICION
ITERAMOS */
let i = 20;

for (let i = 0; i < 6; i++) { /*declara variable e inicializa; condicion; incremento*/
    if (i == 4) {
        continue; /*Hace que se salte el numero que se encuentra en la condicion del if*/
    }

    document.write(i + "<br>")

}