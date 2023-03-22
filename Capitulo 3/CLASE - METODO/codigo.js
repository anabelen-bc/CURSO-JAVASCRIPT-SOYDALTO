class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;


    }
    verInfo(){
    document.write(this.informacion + "<br>");
}
}


let perro = new animal("perro", 5, "gris");
let gato = new animal("gato", 7, "negro");
let pajaro = new animal("pajaro", 1, "azul");


perro.verInfo();
gato.verInfo();
pajaro.verInfo();