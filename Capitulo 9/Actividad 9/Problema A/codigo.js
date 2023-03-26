const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado")

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado,classList.remove("red");
    }
})


const validarCampos = () => {
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    }  else if (email.value.legth < 5 ||
        email.value.legth > 40 ||
        email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El mail es invalido";
        return error;
    } else if (materia.value) {
        error[0] = true;
        error[1] = "La materia no existe";
    }

    
    error[0] = false;
    return error;

}