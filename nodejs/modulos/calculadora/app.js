import { soma, subtrai, multiplica, divide } from './funcoes_matematicas.js';
import { idade } from './calculadora_idade.js';

// Utilizando as funções importadas
console.log(`Resultado da soma: ${soma(5, 3)}`);
console.log(`Resultado da subtração: ${subtrai(10, 4)}`);
console.log(`Resultado da multiplicação: ${multiplica(6, 7)}`);
console.log(`Resultado da divisão: ${divide(20, 5)}`);

console.log(idade('Asafe', 2008, 2040));