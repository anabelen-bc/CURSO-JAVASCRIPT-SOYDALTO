

let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis por que sos la primer persona despues de las 2 am");
            free = true;
        } else {
            alert(`Son las ${time}:00hs sin embargo podes pasar, pero tenes que abonar la entrada`);
        }

    } else {
        alert("Sos menor de edad, no podes pasar")
    }
}


validarCliente(23);
validarCliente(24);
validarCliente(2);
validarCliente(3);
validarCliente(2.4);
