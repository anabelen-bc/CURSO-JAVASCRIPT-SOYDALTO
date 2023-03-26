let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es ${ancho}`);

if (comprar) {
    alert("Compra realizada exitosamente");    
} else {
    alert("Compra cancelada");
}