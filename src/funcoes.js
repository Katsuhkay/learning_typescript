"use strict";
// Sem arrow function
function calculaArea(base, altura) {
    return base * altura;
}
// Com arrow function
const calculaArea2 = (base, altura) => base * altura;
// Inicia com "const" não com function.
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
    // sem retorno, logo o conteúdo é vazio (void)
}
// Void
function teste() {
    if (10 > 5) {
        return 'Dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
