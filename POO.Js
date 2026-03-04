class pizza{
    constructor (masa,tamano,ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }
    preparar (){
        console.log (`preaparando una pizza de ${this.tamano} con masa ${this.masa}
 y los ingredientes ${this.ingredientes}.`);
     return this;
    }
    hornear (){
        console.log (" la pizza esta en el horno...");
        return this;
    }
    empacar (){ 
        console.log ("la pizza se esta enpacando...");
        return this;
    }
};
const pizzahawaiana = new pizza ("delgada","mediana",["jamon","piña","queso"]);
console.log(pizzahawaiana.preparar());
console.log(pizzahawaiana.hornear());
console.log(pizzahawaiana.empacar());

const pizzapeperoni = new pizza ("doble","grande",["jamon","queso","peperoni"]);
console.log(pizzapeperoni.preparar().hornear().empacar());

class combos extends Pizza {
    constructor(combo , cantidad , tamano , masa , ingrediente, bebidas, postres)  {
        super(masa, tamano, ingrediente);
        this.combo = combo
        this.cantidad =  cantidad
        this.bebidas = bebidas
        this.postres = postres
    }

    elegircombo() {
        this.preparar();
        this.hornear();
        this.empacar();

        console.log(
            `has elegido el combo ${this.combo} que incluye ${this.cantidad} pizzas de tamano ${this.tamano} con masa
            ${this.masa} y los siguientes ingredientes: ${this.ingredientes}. ademas, incluye una bebida de ${this.
                bebida} y un postre de ${this.postre}.`
        );
        return this;    
   
           
    }


}





