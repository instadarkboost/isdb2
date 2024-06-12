// Solicitando o primeiro número ao usuário
var numero1 = prompt("Digite o primeiro número:");

// Solicitando o segundo número ao usuário
var numero2 = prompt("Digite o segundo número:");

// Convertendo os números de string para número
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Calculando a soma
var soma = numero1 + numero2;

// Exibindo a soma
console.log("A soma dos números é: " + soma);