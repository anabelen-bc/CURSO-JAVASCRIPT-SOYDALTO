const titulo = document.querySelector(".titulo");
// titulo.classList.add("grande"); //el add añade una clase 
titulo.classList.remove("grnade");
let valor = titulo.classList.item(1);
document.write(valor);
nombreDeClase = "grannde"
let valor1 = titulo.classList.contains("grande");
document.write(valor1);

// if (valor) {
//     document.write(`La clase "${nombreDeClase}" existe`);
// } else {
//     document.write(`La clase "${nombreDeClase}" NO existe`)
//     titulo.classList.add(nombreDeClase)
// }

titulo.classList.toggle("grannde"); // Toggle lo que hace es que si la clase existe la elimina, y si no existe la crea 

titulo.classList.replace("grande", "chico"); //Nos reemplaza la clase del primer parametro por la del segundo
