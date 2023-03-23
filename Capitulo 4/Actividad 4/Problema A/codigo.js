class Calculadora {
    constructor(){
    }
sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
resta(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

multiplicar(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num, exp){
    return num**exp;
}
raizCuadrada(num){
    return Math.sqrt(num);
}

raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5: potenciacion, 6: raizCuadrada, 7: raizCubica");

if (operacion == 1) {
    let numero1 = prompt("primer  numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("primer  numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.resta(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("primer  numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("primer  numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let num = prompt("primer  numero para potenciar");
    let exp = prompt("exponente");
    resultado = calculadora.potenciar(num, exp);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let num = prompt("Conocer la raiz cuadrada de: ");
    resultado = calculadora.raizCuadrada(num);
    alert(`tu resultado es ${resultado}`);
 }
 else if (operacion == 7) {
    let num = prompt("Conocer la raiz cubica de: ");
    resultado = calculadora.raizCubica(num);
    alert(`tu resultado es ${resultado}`);
 }
else {
    alert("no se ha encontrado la operacion");
}


