export class Pais {
    protected nombre: string;
    protected poblacion: number;
 
    constructor(nombre: string, poblacion: number) {
        this.nombre = nombre;
        this.poblacion = poblacion;
    }
 
    protected mostrarNombre(): string {
        return `País: ${this.nombre}`;
    }
 
    protected mostrarPoblacion(): string {
        return `Población: ${this.poblacion}`;
    }
}
 
export class Ciudad extends Pais {
    private nombreCiudad: string;
 
    constructor(nombreCiudad: string) {
        // Datos predefinidos de país
        super("Argentina", 46000000);
        this.nombreCiudad = nombreCiudad;
    }
 
    public usar(): void {
        // Uso de métodos protegidos del padre
        console.log(this.mostrarNombre());
    }

}
 
 