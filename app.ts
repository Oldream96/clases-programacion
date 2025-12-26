import { Cuadrado, Triangulo } from './ejercicios/triangulo-ejec';
var cuadrado = new Cuadrado(5);

var triangulo = new Triangulo(5,4);

var triangulo2 = new Triangulo(5,4);
var triangulo3 = new Triangulo(5,4);

console.log("el area del triangulo 1 es: ", triangulo.calcularArea());
console.log("el area del triangulo 2 es: ", triangulo2.calcularArea());
console.log('el area del cuadrado es', cuadrado.calcularArea());
