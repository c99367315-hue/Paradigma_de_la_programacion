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
    
    elegir_combo() {
        this.Preparar();
        this.Hornear();
        this.Empacar();

        console.log(
            `Has elegido el combo ${this.combo} que incluye ${this.cantidad} pizzas de tamaño ${this.tamano} con masa ${this.masa} y los siguentes ingredientes: ${this.ingredientes}. Ademas incluye una bebida de ${this.bebida} y un postre de ${this.postre}`
        );

        return this;
    };
};

const combo_familiar=new Combos("Familiar", 4,"grande", "delgada", ["jamon", "piña", "queso"], "refresco", "helado");
console.log(combo_familiar.elegir_combo());