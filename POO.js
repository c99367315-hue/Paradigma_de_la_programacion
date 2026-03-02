class Pizza{
    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes; 
    }

    Preparar() {
        console.log(`Preparando una pizza de ${this.tamano} con masa ${this.masa} y los siguientes ingredientes: ${this.ingredientes}`);
        return this;
    }

    Hornear() {
        console.log("la pizza esta en el horno...");
        return this;
    }

    Empacar() {
        console.log("Empacando pizza...");
        return this;
    }
};

const pizzapeperoni=new Pizza("Doble", "Grande", ["Peperoni", "Queso", "Salsa"]);

console.log(pizzapeperoni.Preparar().Hornear().Empacar());

class Combos extends Pizza{
    constructor(combo, cantidad, tamaño, masa, ingredientes, bebida, postre){
        super(masa, tamaño, ingredientes);
        this.combo = combo;
        this.cantidad = cantidad;
        this.bebida = bebida;
        this.postre = postre;
    }
}