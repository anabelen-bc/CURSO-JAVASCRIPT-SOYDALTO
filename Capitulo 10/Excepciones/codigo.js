// let nombre = "Ani"; // Esta es una variable que existe en todo el programa

// alert(nombre); //El flujo del programa, es como se ejecutan las lineas que nostros escrimos, en este ejemplo primero se crea la variable y despues nos devuelve el cartel.


// {
//     let nombre = "Pedro" //Esta es una variable local
// } // Esto es una sentencia de bloque

// if (3 > 2){
//     alert("Es cierto")
// } // Sentencia de control de flujo


//Las excepciones aparcen mas que nada cuando hay errores 
//ECMAScript son las que estan relacionadas a las tecnologias js
//referenceError, SyntaxError

try{ //En try tiene paramatros o acciones

} catch(error) { //Y si en try existe algun tipo de error, se lo pasa como parametro al catch
console.log("Lo siento ocurrio un error");
} // esto es un catch incondicional

//Tambien existen los try catch condicionales
try{

} catch {
    if (3 >5){
        console.log("Es mayor")
    } else {
        console.log("Es menor");
    }
} finally {
    console.log("Si o si me muesto igual")
}


const pruebaTry = ()=>{
    try{
        return 1;
    }
    catch {
        return 2;

    } finally {
        return 3;
    }
}

console.log(pruebaTry());