const screen = window.screen; //Son para ver las propiedades del screen

console.log(screen);
document.write(screen.availHeight + "<br>"); // Nos devuelve una referencia de la pantalla asociada a la ventana del navegador 


const screenLeft = window.screenLeft;
const screenTop = window.screenTop;

console.log(screenTop);
console.log(screenLeft);

document.write(`Top: <b>${screenLeft}</b> <br>
Left: <b>${screenTop}</b>
`);

//Todas las anteriores son propiedades de lectura no se pueden modificar

const scrollX = window.scrollX;
const scrollY = window.scrollY;

alert("X:" + scrollX + "  Y:" + scrollY);