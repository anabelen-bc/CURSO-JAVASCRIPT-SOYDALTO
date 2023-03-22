class App {
    constructor(descarga, puntuacion, peso) {
        this.descarga = descarga;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir() {
        if (this.iniciada = false) {
            this.iniciada == true;
            alert("app encendida");
        }
    }
    cerrar() {
        if (this.iniciada = true) {
            this.iniciada == false;
            alert("app cerrada");
        }
    }
    instalar() {
        if (this.instalada = false) {
            this.instalada == true;
            alert("app instalada correctamente");
        }
    }
    desinstalar() {
        if (this.instalada = true) {
            this.instalada == false;
            alert("app deinstalada correctamente");
        }
    }
    abrir() {
        if (this.iniciada = false && this.instalada == true) {
            this.iniciada == true;
            alert("app encendida");
        }
    }
    cerrar() {
        if (this.iniciada = true && this.instalada == true) {
            this.iniciada == false;
            alert("app cerrada");
        }
    }

    appInfo(){
        return `
        Descargas: ${this.descarga} <br><br>
        Puntuacion: ${this.puntuacion} <br><br>
        Peso: ${this.peso}<br><br>
        `
    }
}


app1 = new App("16.000", "5 estrellas", "900mb");
app2 = new App("17.000", "4 estrellas", "400mb");
app3 = new App("16.000", "4 estrellas", "100mb");
app4 = new App("14.000", "3.5 estrellas", "1gb");
app5 = new App("16.000", "3 estrellas", "250mb");
app6 = new App("14.000", "1 estrellas", "522mb");
app7 = new App("26.000", "2 estrellas", "723mb");

// app.instalar();
// app.abrir(); 
// app.cerrar(); 

document.write(`
${app1.appInfo()}<br><br>
${app2.appInfo()}<br><br>
${app3.appInfo()}<br><br>
${app4.appInfo()}<br><br>
${app5.appInfo()}<br><br>
${app6.appInfo()}<br><br>
${app7.appInfo()}<br><br>

`)