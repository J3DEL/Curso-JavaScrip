/*            VARIABLES 

Las variables pueden cambiar;
Tipos de datos: String, Number, Bolean;
Datos especiales: Null, undefined, Nan ;
*/

String = 'cadena de texto';
Number = 20;
Boolean = true; // or false
/*
undefined = variable que no ha sido definida; 

Declaraciones de variables
var, let, const;

                ALCANCES DE LAS VARIABLES 'Scope'
*/

let numero; // variables en bloque no abarca todo; ej: adentro de un for, while, if, etc.
const nombre = 'jair'; // variables que nunca van a cambiar;
var programa = 'linux' // variable que abarca todo, no solo un bloque;

numero = 29; // Definición de la variable numero;
const valor = 2; //La variable const debe inicializarse y definirse en la misma linea;

let numero1 = 23; numero2 = 24; //forma de declarar y definir variables en una sola linea;

/*
VARIABLE NULL;
es una variable vacía o nula, se declara intencionalmente;
*/
let variable = null;
/*
VARIABLE NaN -- 'Not a Number';
es una variable vacía o nula, se declara intencionalmente;
*/
let valor1 = 10; valor2 = 'Abel';
alert(valor1 * valor2); //El resultado es NaN, no se puede multiplicar un numero por una cadena;


// PROMPT;

prompt('Hola mundo'); // Funcion que nos permite almacenar datos en variables, mediante un cudro de dialogo;

let edad = prompt('Dime cual es tu edad');

alert(edad); // En pantalla se mostrara lo que se ingresó en la variable edad mediante la funcion prompt;
alert('Tu edad es: ' + edad); // Concatenar un texto y una variable; 