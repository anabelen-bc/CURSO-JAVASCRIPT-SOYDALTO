
class Celular {
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            encendido = true;
        } else {
            alert("celular apagado");
            
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);      
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }

    mostrarInfo(){
        return `
        Color: ${this.color} <br>
        Peso: ${this.peso} <br>
        Tamaño: ${this.resolucionDePantalla} <br>
        Resolucion de Camara: ${this.resolucionDeCamara} <br>
        Memoria Ram: ${this.memoriaRam} <br> `
    }

}
// rdp: resolucion de pantalla, rdc: resolucion de camara


celular1 = new Celular("rojo", "150g", "5'", "full hd", "2gb");
celular2 = new Celular("negro", "155g", "5.4'", "hd", "2gb");
celular3 = new Celular("gris", "146g", "5.9'", "full hd", "1gb");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
${celular1.mostrarInfo()} <br>
${celular2.mostrarInfo()} <br>
${celular3.mostrarInfo()}`)