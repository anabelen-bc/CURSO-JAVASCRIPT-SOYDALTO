
/*Condicion SI*/
if (true) { /*Si lo que esta adentro del parentesis se cumple, va a pasar todo lo que esta dentro de las llaves*/
    alert("hola");
}


if (15 > 10) {
    alert("Es mayor");
}

/*Condicion si no*/

let nombre = "Ana Belen"

if (nombre == "Ana") {
    alert("tu nombre es " + nombre);
}
else if (nombre == "Ana Belen") {
    alert("tu nombre es " + nombre);
}
else { /*Si no pasa el IF - ni el ELSE IF, se va a mostrar el ELSE*/
    alert("tu nombre es otro");
}