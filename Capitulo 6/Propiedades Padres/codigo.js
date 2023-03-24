const contenedor = document.querySelector(".contenedor")

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innetHTML = "Titulo";


const h2_antiguo = document.querySelector(".h2");


console.log(h2_antiguo.parentElement)

console.log(h2_antiguo.parentNode) // Son muy similares, nos devuelven cual son los elementos padres, en casos muy especificos difieren.
console.log(h2_antiguo.nextElementSibling)
console.log(h2_antiguo.previousSibling)
console.log(h2_antiguo.nextSibling)
console.log(h2_antiguo.previousElementSibling)