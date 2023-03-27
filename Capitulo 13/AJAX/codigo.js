let peticion;

if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}



// peticion.addEventListener("readystatechange",()=>{
//     console.log(peticion.readyState);
//     console.log(peticion.response)

// }) // Esto tiene los 4 estados.
//1 - La solicitud se creo correctamente
//2 - La solicitud se envio correctamente
//3 - La peticion se esta procesando
//4 - Esta todo listo, nos devuelve una respuesta y el resultado ya se puede utilizar

// peticion.addEventListener("readystatechange",()=>{
//     if (peticion.readyState == 4 && peticion == 200) {
//         console.log(peticion.response)
//     }

// }) FORMA ANTIGUA

peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 200) { respuesta = peticion.response; }
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta).Nombre)
})



peticion.open("GET", "informacion.txt"); // METODO QUE ABRE LA PETICION GET O POST
peticion.send();

//ERRORES -
// 404 - NO SE ENCONTRO