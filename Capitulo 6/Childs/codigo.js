const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstChild;
console.log(primerHijo);

const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo); //Si entre la etiqueta de cierre, y la proxima etiqueta existe un espacio, toma dicho espacio como texto, y muestra que ese es el hijo

const primerElementoHijo = contenedor.firstElementChild;
console.log(primerElementoHijo);

const ultimoElementoHijo = contenedor.lastElementChild;
console.log(ultimoElementoHijo);



const todosHijos = contenedor.childNodes;
console.log(todosHijos[0]);

// todosHijos.forEach(todosHijos => console.log(todosHijos))

const hijoss = contenedor.children;
console.loh(hijoss);

for (hijo in hijos){
    console.log(hijo)
}