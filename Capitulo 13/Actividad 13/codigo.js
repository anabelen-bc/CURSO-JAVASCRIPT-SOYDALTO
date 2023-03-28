// const getInfo = async ()=>{
//     resultado = await axios ("informacion.txt")
//     document.querySelector(".num-aprobados").innerHTML = resultado.data.aprobados;
//     document.querySelector(".num-desaprobados").innerHTML = resultado.data.desaprobados;
// }

// document.getElementById("getInfo").addEventListener("click",getInfo);

const getInfo = async ()=>{
    let aprobados= document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try {
        resultado = await axios("informacion.txt")
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch (e){
        aprobados.innerHTML = "La API fallo";
        desaprobados.innerHTML = "La API fallo";
    }

}

document.getElementById("getInfo").addEventListener("click", getInfo);