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

scrollTo(x, y); //Sirve para en consolar poder ubicar el lugar que deseemos

resizeBy() // Cambia el tamaño de la ventana, al que le especifiquemos en los parentesis (Por consola)
resizeTo() //redimensiona dinamicamente la ventana (Por consola)
moveBy () //Mueve la ventana a una ubicacion relativa
moveTo() //Mueve la ventana a una ubicacion absoluta (Por consola)

// Objetos barprop:
// locationbar - menubar - personalbar - scrollbar - toolbar (en caso de que sea visible nos devuelve la respuesta true o de lo contrario git false)
