export class Calculadora {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    sumar(a: number, b: number): number {
        return a + b;
    }
}
