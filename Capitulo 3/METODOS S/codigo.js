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


class Perro extends animal {
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza = null;
    }
    
    // static ladrar(){
    //     alert("¡Wawaw!")
    // } //  Un metodo statico funciona por si solo
   set setRaza(newName){
    this.raza =newName;
   }

   get getRaza (){
    return this.raza;
   }
}

// No se puede tener un objeto con el mismo nombre que una clase 
const perro = new Perro ("perro", 5, "marron", "doberman");
const gato = new animal ("gato", 7, "blanco");
const pajaro = new animal ("pajaro", 1, "verde");

perro.setRaza = "Pedro";
document.write(perro.getRaza);
