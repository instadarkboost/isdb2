// Função para multiplicar dois números
function multiplicaNumeros(num1, num2) {
    return num1 * num2;
}
// Solicitar ao usuário que insira dois números
var numero1 = parseFloat(prompt("Digite o primeiro número: "));
var numero2 = parseFloat(prompt("Digite o segundo número: "));

// Calcular a multiplicação dos números e exibir o resultado
var resultado = multiplicaNumeros(numero1, numero2);
console.log("A multiplicação de " + numero1 + " e " + numero2 + " é igual a " + resultado);