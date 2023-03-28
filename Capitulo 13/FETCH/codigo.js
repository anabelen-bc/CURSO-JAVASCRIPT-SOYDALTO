// FETCH Siempre nos devuelve promesas encapsuladas, para eso tenemos que usar las propiedades de fetch para poder leerlo.
peticion = fetch("https://reqres.in/api/unknown/2");
peticion
    .then(res => res.text())
    .then(res => console.log(res))
console.log(peticion)
//Fetch por defecto siempre es get, no hace falta agregarlo

fetch ("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
        "nombre": "Ana Belen",
        "apellido": "Benitez"
    }),
    headers: { "Content-type": "application/json" } //Cabecera y Valor de cabecera

})
    .then(res => res.json())
    .then(res => console.log(res))



const imagen = document.querySelector(".imagen");
fetch("descarga.png")
    .then(res=> res.blob())
    .then(img=> imagen.src = URL.createObjectURL(img))