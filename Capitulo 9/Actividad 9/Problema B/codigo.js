alumnos = [{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Fisica 3"
}, {
    nombre: "Karin Guerra",
    email: "karing@gmail.com",
    materia: "Ingles"
}, {
    nombre: "Jorge Ramirez",
    email: "jorgeramirez@gmail.com",
    materia: "Matematicas"
}, {
    nombre: "Facundo Roberto",
    email: "facur@gmail.com",
    materia: "Ingles"
}, {
    nombre: "Ana Belen",
    email: "anabelen@gmail.com",
    materia: "Fisica 3"
}];
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
        
        </select>
    </div>`;

    document.querySelector(".grid-container").innerHTML += htmlCode;

}


boton.addEventListener("click", () => {
    let confirmar = confirm("¿Realmente quieres confrimar las mesas?");
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})