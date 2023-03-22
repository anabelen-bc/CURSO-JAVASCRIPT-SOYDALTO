class animal {
    constructor (especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info =`Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
  }
verInfo(){
    document.write(this.info + "<br>");
}
// ladrar(){
// if (this.especie == "perro"){
//     document.write("¡Wawaw! <br>");    
// }
// else {
//     document.write("No puede ladrar, ya que es un " + this.especie + "<br>")
// }
// }

}


class perro extends animal {
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        alert("¡Wawaw!")
    }
}

// No se puede tener un objeto con el mismo nombre que una clase 

let perroo = new animal ("perro", 5, "marron", "doberman");
let gato = new animal ("gato", 7, "blanco");
let pajaro = new animal ("pajaro", 1, "verdad");

perro.ladrar();
gato.ladrar();



// perro.verInfo();
// perro.ladrar();
// gato.verInfo();
// gato.ladrar();
// pajaro.verInfo();
// pajaro.ladrar();