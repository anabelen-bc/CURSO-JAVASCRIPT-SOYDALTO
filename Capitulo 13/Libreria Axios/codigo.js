//Axios(es el remplazo de FETCH) esta basado en promesas y utiliza tecnologia XMLRequest
//Libreria: Es un conjunto de funciones, que nos facilitan las cosas
//Si el script que tenemos que relizar tiene menos de 7 lineas de codigo, se nos recomienda ponerlo en el html, para que utilice la carga de la pagina, esto sea hace unicamente si el script es muy cortito
// peticion = fetch("informacion.txt")
// peticion
//     .then(res => res.text())
//     .then(res => console.log(res))
// console.log(peticion)

axios("informacion.txt")
    .then(res => {
        console.log(res)
    })

// axios.post("https://reqres.in/api/users", {
//     "nombre": "Ana Belen",
//     "apellido": "Benitez"
// }
// )

//     .then(res => console.log(res))


