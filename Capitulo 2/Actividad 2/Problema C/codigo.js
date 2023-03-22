const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("primer  numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer  numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = resta(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer  numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer  numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("no se ha encontrado la operacion");
}


