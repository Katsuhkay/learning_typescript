class Conta {
  numeroDaConta: number | undefined;
  saldo: number = 0;

  contructor(numeroDaConta: number) {
    this.numeroDaConta = numeroDaConta;
  }
}

class ContaSalario extends Conta {
  depositar(valor: number) {
    this.saldo += valor;
  }
}

interface ITransacional {
  transferir: (valor: number, destinatario: Conta) => boolean;
  taxaTransferencia: number;
}

interface IExemplo2 {
  cnpm: number;
}

interface IExemplo3 extends IExemplo2 {
  telefone: number;
}


// Podemos implementar quantas interfaces quisermos, diferente de classe, que só é permitido 1!
class ContaCorrente extends Conta implements ITransacional {
  transferir(valor: number, destinatario: Conta) {
    destinatario.saldo += valor - this.taxaTransferencia;
    return true;
  };
  taxaTransferencia: number = 0;
  
}