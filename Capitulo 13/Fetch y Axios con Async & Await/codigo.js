// const getName = ()=>{ //Este no 
//     fetch("info.txt")
//     .then(res =>{
//         if(res.ok) Promise.resolve(res)
//         else Promise.reject(res);
//     }).then(res =>console.log(res))
//     .catch(e=>console.log(e))
// }


// const getName = async () => { //Es funciono 
//     let peticion = await fetch("info.txt");
//     let resultado = await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("nombre");
//     // let nombre = `Nombre: ${resultado.nombre}<br>`;    
//     // document.querySelector(".nombre").innerHTML= div.innerHTML = resultado.nombre;
//     div.innerHTML = resultado.nombre;
//     document.body.appendChild(div);

// }
// const getApe = async () => { //Es funciono 
//     let peticion = await fetch("info.txt");
//     let resultado = await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("apellido");
//     // let nombre = `Nombre: ${resultado.nombre}<br>`;    
//     // document.querySelector(".nombre").innerHTML= div.innerHTML = resultado.nombre;
//     div.innerHTML = resultado.apellido;
//     document.body.appendChild(div);

// }

const getName = async () => { //Es funciono 
    let resultado = await axios("info.txt");
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.innerHTML = resultado.data.nombre;
    document.body.appendChild(div);
    console.log(resultado)
}


const getApe = async () => { //Es funciono 
    let resultado = await axios("info.txt");
    let div = document.createElement("DIV");
    div.classList.add("apellido");
    div.innerHTML = resultado.data.apellido;
    document.body.appendChild(div);

}

document.getElementById('getName').addEventListener('click', getName);
document.getElementById('getApe').addEventListener('click', getApe);