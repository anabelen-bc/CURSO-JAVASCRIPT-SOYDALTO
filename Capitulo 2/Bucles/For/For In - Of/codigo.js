let animales = ["gato", "perro", "dinosaurio"];

for (animal in animales) { /*For in: nos devuelve la posicion de los elementos que se encuentran dentro del array - nos muestra el indice*/
    document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales) { /*For of: nos devuelve el nombre de cada elemento - nos muestra el valor*/
    document.write(animal + "<br>");
}

array1 = ["maria", "josefa","roberta"];
array2= ["pedro","marcelo",array1,"josefina"];

forLabel:
for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {

            if (array == "maria") {
                continue forLabel;
            }

            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>")
    }
}