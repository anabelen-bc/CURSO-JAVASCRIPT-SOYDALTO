const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevResultado =parseInt(document.getElementById('nota').value);
        if (isNaN(prevResultado)){
            throw "Gracioso";
        }
     resultado = verificarAprobacion(8, 5, mensaje);
     mensaje = definirMensaje(resultado[1]);
    } catch (e) {
        resultado = "¿Que haces?"
        mensaje = "Has querido hackear el sitio"

    }
    abrirModal(resultado[0], mensaje);
})


const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "Te fue muy mal"
        break;
        case 2: resultado = "Te fue  bastante mal"
        break;
        case 3: resultado = "Te fue muy mal"
        break;
        case 4: resultado = "Casi vas a final"
        break;
        case 5: resultado = "Casi promocionas"
        break;
        case 6: resultado = "Promocionaste"
        break;
        case 7: resultado = "Aprobaste"
        break;
        case 8: resultado = "Te fue bien"
        break;
        case 9: resultado = "Te fue muy bien"
        break;
        case 10: resultado = "EXCELENTE"
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, prevResultado)=>{
 promedio=(nota1 + nota2 + prevResultado)/3;
 if(promedio >= 7) {
    return ["<span class='green'>APROBADO</span>", Math.trunc(promedio)];
} 
return ["<span class='red'>DESAPROBADO</span>", Math.trunc(promedio)];

}


const abrirModal =(res,msg)=>{
document.querySelector(".resultado").innerHTML = res;
document.querySelector(".mensaje").innerHTML = msg;
let modal = document.querySelector(".modal-background");
modal.style.display = "flex";
modal.style.animation = "aparecer 1s forwards"
}