//Array asociativos 
// objeto = {
//     variable1: "Pedro",
//     variable2: "Jorge"
// };

// console.log(objeto)

// objeto = { //Esto es un JSON
//     "variable" : "pedro",
//     "variable2" : "jorge"
// }

//Serializado, es cuando el type es una cadena de caracteres
const Deserializado = {"variable1" : "pedro", "variable2" : "jorge"}
//Deserializado, es cuando el type es un objeto
const objetoss = '{"variable1" : "pedro", "variable2" : "jorge"}'

const serializado = JSON.stringify(Deserializado) //Sirve para enviar o recibir datos serializados esto es un STRING
console.log(typeof serializado)

const desarializado = JSON.parse(serializado) //Este tambien sirve para deserializado esto es un OBJETO
//Cuando enviamos datos al servidor, los tenemos que mandar SERIALIZADOS, y cuando el servidor nos manda los datos los recibimos DESERIALIZADOS
// Son funciones que simulan la funcionalidad - La utilizamos cuando el navegador no soporta un JSON.parse, podemos buscar un JSON Polyfill