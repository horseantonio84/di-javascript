# 01 · Variables

## Ejercicio 1 - Declara con 'let' una variable 'nombre' y asígnale tu nombre. Muéstrala en consola, reasígnale otro nombre y vuelve a mostrarla. ##

**Explicación.**

Queremos cambiarle el valor a la variable por tanto debe estar con 'let'

**Solución**

let nombre = "Jose Antonio";
console.log(nombre);
nombre = "Pepin";
console.log(nombre);


## Ejercicio 2 - Declara una constante 'PI' con el valor '3.1416'. Intenta reasignarla, observa el error en consola y deja la línea comentada con el nombre del error que se produce. ##

**Explicación.**

A las constantes no se les puede reasignar el valor de ahí que nos dé el error

**Solución**

const PI = 3.1416;
console.log(PI);
//PI = 123; exercises.js:12 Uncaught TypeError: Assignment to constant variable.at exercises.js:12:4


## Ejercicio 3 - Declara una variable 'edad' sin valor y muéstrala. Asígnale después un número y muéstrala de nuevo. ##

**Explicación.**

Primero sale 'undefined', hay que darle valor a las variables para mostrarlas y luego sale un 23 al reasignar el valor.

**Solución**

let edad;
console.log(edad);
edad = 23;
console.log(edad);


## Ejercicio 4 - Declara 'precioBase' con valor '100', 'iva' con '0.21' y calcula 'precioFinal'. Decide para cada una si debe ser 'let' o 'const' y justifícalo en un comentario. ##

**Solución**

let precioBase = 100;//let porque es el precio de un producto y puede que baje de precio permanentemente o puede que suba
const IVA = 0.21;//Constante porque es un valor que no se permite modificar ya que es fijo
let precioFinal = precioBase + (precioBase * IVA);  //let porque es un valor que no va a ser siempre el mismo ya que es el resultado de una multiplicación
console.log(precioFinal);


## Ejercicio 5 - Predice qué imprime este código antes de ejecutarlo. Escribe tu predicción en un comentario y compárala con la consola. ##

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

**Explicación**

Predición: 2,1 Resultado: 2,1

**Solución.**

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);



## Ejercicio 6 - Predice de nuevo y explica en un comentario por qué la última línea falla si 'lista' es una constante. ##

const lista = [1, 2];
lista.push(3);
console.log(lista);
lista = [];

**Explicación**

Primero se añade el número 3 al final y después falla porque la lista al ser una constante no es mutable

**Solución.**

const lista = [1, 2];
lista.push(3);
console.log(lista);
//lista = []; comentada porque si no da error



## Ejercicio 7 - Estas variables tienen nombres inútiles. Renómbralas siguiendo la convención 'camelCase' de forma que el nombre diga qué contienen. ##

let a = "Ana";
let b = 30;
let c = true;
let d = 1250.5;

**Solución.**

let nombreMonitor = "Ana";
let dineroDisponible = 30;
let esRapido = true;
let hectareasPublicas = 1250.5;



## Ejercicio 8 - Ejecuta este fragmento tal cual. 'setTimeout' solo retrasa el 'console.log', no necesitas entenderlo todavía. ##

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

**Explicación**

Con 'var' imprime 3 veces un 3 y con 'let' 0 1 2, no lo entiendo muy bien pero lo que investigué es que el 'var' es como que comparte la misma caja por su comportamiento, mientras el 'let' en cada iteración es una caja distinta

**Solución.**

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
