//Básicos

//Ejercicio 1
let nombre = "Jose Antonio";
console.log(nombre);
nombre = "Pepin";
console.log(nombre);

//Ejercicio 2
const PI = 3.1416;
console.log(PI);
//PI = 123; exercises.js:12 Uncaught TypeError: Assignment to constant variable.at exercises.js:12:4

//Ejercicio 3
let edad;
console.log(edad);
edad = 23;
console.log(edad);

//Ejercicio 4
let precioBase = 100;//let porque es el precio de un producto y puede que baje de precio permanentemente o puede que suba
const IVA = 0.21;//Constante porque es un valor que no se permite modificar ya que es fijo
let precioFinal = precioBase + (precioBase * IVA);  //let porque es un valor que no va a ser siempre el mismo ya que es el resultado de una multiplicación
console.log(precioFinal);

//Para Pensar

//Ejercicio 5

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

//Predición: 2,1 Resultado: 2,1

//Ejercicio 6
const lista = [1, 2];
lista.push(3);
console.log(lista);
//lista = []; comentada porque si no da error
//Primero se añade el numero 3 al final y despues falla porque la lista al ser una constante no es inmutable

//Ejercicio 7
let nombreMonitor = "Ana";
let dineroDisponible = 30;
let esRapido = true;
let hectareasPublicas = 1250.5;

//Reto
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
//Con var imprime 3 veces un 3 y con let 0 1 2, no lo entiendo muy bien pero lo que investigué es que
//el var es como que comparte la misma caja por su comportamiento, mientras el let en cada iteracion es una caja distinta