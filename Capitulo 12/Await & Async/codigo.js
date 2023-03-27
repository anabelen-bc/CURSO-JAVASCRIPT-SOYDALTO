
//Es asincrono, esperan recibir la informacion, y cuando la tienen la ejecutsn

// const objeto = {
// propiedad1: "valor1",
// propiedad2: "valor2",
// propiedad3: "valor3"
// };

const obtenerInformacion = (text) => {
  return  new Promise((resolve, reyect)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
    })
}
// obtenerInformacion().then(resultado => console.log(resultado));
// const mostrarResultado = async () =>{
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado();

const mostrarData = async ()=>{
data1 = await obtenerInformacion("Nombre");
data2 = await obtenerInformacion("Nombre1");
data3 = await obtenerInformacion("Nombre2");
console.log(data1);
console.log(data2);
console.log(data3);

}

mostrarData();