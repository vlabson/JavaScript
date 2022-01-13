/*
*  Aritimeticos
*
*   + adção / concatenação
*   - subtração
*   / divisao 
*   * multiplicação
*   ** potenciação
*   % resto da divisao
*
*
*   PRECEDENCIA 
*
*   1  ()
*   2  **
*   3  * / %
*   4  + -
*
*/

const num1 = 2;
const num2 = 10;
console.log('adição',num1 + num2);
console.log('subtração',num1 - num2);
console.log('divisão ',num1 / num2);
console.log('multiplicação',num1 * num2);
console.log('potenciação',num1 ** num2);
console.log('resto da divisao',num1 % num2);

/*
*
*   variavel++ incremento pos fixado
*   ++variavel incremento pre fixado
*   variavel-- decremento pos fixado
*   --variavel decremento pre fixado
*   
*
*/

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
++contador; //6
++contador; //7
++contador; //8
console.log(contador);


const num3 = parseInt('25');
console.log(num3);