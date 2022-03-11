/*
                OPERADORES ARITMETICOS 

 Toman valores numericos como sus operandos y retornan un valro numerico único; 
 */

(x + y); //Operador de adición
(x - y); // Operador de sustracción
(x * y); // Operador de multiplicación
(x / y); // Operador de división
(x % y); // Operador de resto
(x ** y); // Operador de exponenciación  
(x++); // Operador de incremento
(x--); // Operador de decremento
    
/*               OPERADORES DE ASIGNACION

 Asigna un valor al operando de la izquierda el valor del operando de la derecha
 */

(x += y) = (x = x + y); //Asignacion de adición
(x -= y) = (x = x - y); // Asignacion de sustracción
(x *= y) = (x = x * y); // Asignacion de multiplicación
(x /= y) = (x = x / y); // Asignacion de división
(x %= y) = (x = x % y); // Asignacion de resto
(x **= y) = (x = x ** y); // Asignacion de exponenciación
(x <<= y) = (x = x << y); // Asignacion de desplazamiento izquierda
(x >>= y) = (x = x >> y); // Asignacion de desplazamiento derecha
(x >>> y) = (x = x >>> y); // Asignacion sin signo desplazamiento a la derecha
(x &= y) = (x = x + y); // Asignacion AND
(x |= y) = (x = x | y); // Asignacion OR
(x++) = (x + 1); // Asignacion de incremento
(x--) = (x - 1); // Asignacion de decremento

//RESTA
let numero = 20;
numero -=10;

document.write(numero); //el resultado es: (20-10) = 10;

//INCREMENTO
let valor = 5;
valor++; //Siempre se ejecuta el incremento o decremento antes de mostrarlo;
resultado = valor;

alert(resultado); // En pantalla se muestra el numero 6;

//EXPONENCIACION
let valor1 = 6;
valor ** 2; // Se debe asignar el exponente
resultado = valor;

alert(resultado); // En pantalla se muestra el numero 36;

//NEGACION
let valor2 = 7;
resultado = -valor;

alert(resultado); // En pantalla se muestra -7;