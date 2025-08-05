// Função 1: Multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função 2: Saudação
function saudar(nome: string): string {
    return "Olá " + nome;
}

// Testando as funções
const resultadoMultiplicacao = multiplicar(5, 3); // Esperado: 15
const saudacao = saudar("Álex"); // Esperado: "Olá Álex"

console.log(resultadoMultiplicacao); // 15
console.log(saudacao); // Olá Álex
