// Sem arrow function
function calculaArea(base: number, altura: number): number {
  return base * altura
}

// Com arrow function
const calculaArea2 = (base: number, altura: number): number => base * altura;
// Inicia com "const" não com function.

function somar(...numeros: number[]): void {
  // numeros.reduce()
  console.log(numeros)
  // sem retorno, logo o conteúdo é vazio (void)
}

// Void
function teste(): string | number {
  if (10 >5) {
    return 'Dez maior que cinco'
  } else {
    return 5
  }
}

const resultadoDeTeste = teste();
