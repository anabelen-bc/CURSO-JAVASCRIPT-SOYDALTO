//Eventos definicion: cualquier cambio que ocurre en la pagina
//Siempre que hacemos clic en un boton generamos un evento

const button = document.querySelector(".button")
// button.onclick= ()=>{
//     alert("hola");
// } De esta manera ya no se utiliza

button.addEventListener("click", (e)=>{
    console.log(e.target);
});

button.addEventListener("click", saludar);

function saludar(){
    alert("Hola");
    button.removeEventListener("click", saludar);
}//Hace que cuando apretemos click nos aparezca un cartel de saludo, y luego ya no pueda aparecer mas 