// filter()
let numeros = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];

// numeros.filter((numero) => 
//     {document.write(numero + "<br>")
// });
let resultado = numeros.filter(numero => numero.length > 4)
document.write(resultado + "<br>");
//forEach ()

numeros.forEach((numero) => 
    {document.write(numero + "<br>")
});
