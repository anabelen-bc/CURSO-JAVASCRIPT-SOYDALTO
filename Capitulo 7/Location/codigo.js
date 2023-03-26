// window.location.href // nos devuelve la url de la pagina actual
// window.location.hostname // Devuelve el nombre de dominio del servidor web 
// window.location.pathname // Devuelve la ruta y el nombre de archivo de la pagina actual 
// window.location.protocol // Devuelve el protocolo web  utilizado (http o https)
// window.location.assign // Carga un nuevo documento


const href = window.location.href; //Protocolo-hostname-pathname
document.write(href + "<br>");

const hostname = window.location.hostname; 
document.write(hostname + "<br>");

const path = window.location.pathname;
document.write(path + "<br>");

const protocol = window.location.protocol;
document.write(protocol + "<br>");

const assign = window.location.assign;
document.write(assign + "<br>");

