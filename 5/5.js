
// Definindo os números
var numero1 = 20;
var numero2 = 4;

// Verificando se o segundo número não é zero (evitando divisão por zero)
if (numero2 !== 0) {
    // Calculando a divisão
    var divisao = numero1 / numero2;

    // Exibindo a divisão
    console.log("O resultado da divisão de " + numero1 + " por " + numero2 + " é: " + divisao);
} else {
    console.log("Impossível dividir por zero.");
}