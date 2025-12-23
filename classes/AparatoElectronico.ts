export class AparatoElectronico{
    protected nombre:string;
    protected consumoWatts: number;
 
    constructor(nombre: string, consumoWatts: number){
        this.nombre = nombre;
        this.consumoWatts =consumoWatts;
    }
 
    protected encender() : string{
        return`${this.nombre} está encendido`;
    }
    protected apagar(): string{
        return `${this.nombre} está apagado`;
    }
}



export class Televisor extends AparatoElectronico {
    private pulgadas: number;
 
    constructor(pulgadas: number) {
        super("Televisor", 150);
        this.pulgadas = pulgadas;
    }
 
    public usar(): void {
        // Uso de métodos protegidos de la clase padre
        console.log(this.encender());
        console.log(`Viendo televisión de ${this.pulgadas} pulgadas (Consumo: ${this.consumoWatts}W)`);
        console.log(this.apagar());
    }
}
 