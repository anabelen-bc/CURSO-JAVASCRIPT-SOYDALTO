const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent;
// let resultado1 = titulo.innerText;//nos devuelve lo que tiene la clase (solo el texto), no nos devuelve el html
// // let reusltado2= titulo.outerText; ya no se utiliza


// alert(resultado + "<br>")
// alert(resultado1 + "<br>")
// alert(reusltado2 + "<br>")
let resultado2 = titulo.textContent;
let resultado3 = titulo.innerHTML;
let resultado4 = titulo.outerHTML;
alert(resultado2);
alert(resultado3);
alert(resultado4);