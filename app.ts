import { Televisor } from "./classes/AparatoElectronico";
import { Calculadora } from "./classes/Calculadora";
import { Ciudad } from "./classes/Pais";
import { Coche } from "./classes/Vehiculo";

let a = new Calculadora(5, 10); 


const miCoche = new Coche("Toyota", "Corolla", 50000);
console.log(miCoche.describir());
miCoche.actualizarKilometraje(250);
 


const tv = new Televisor(55);
tv.usar();


const ciudad = new Ciudad("Buenos Aires");
ciudad.usar();
 


var PALABRAS = ["public", "private", "protected", "abstract", "static", "readonly"];


//nid