const contenedor = document.querySelector(".contenedor");



// document.write(item)
// console.log(item)

// const textDelItem = document.createTextNode("Este es un item de la lista");

const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++) {
    const item = document.createElement("LI"); //Crea un elemento
    item.innerHTML = "Este es un item de la lista"; //Esto no es un objeto
    fragmento.appendChild(item);

}
console.log(fragmento);
contenedor.appendChild(fragmento);

// item.innerHTML = "Este es un item de la lista"
// item.appendChild(textDelItem); //Para crearle un hijo a nuestro LI



