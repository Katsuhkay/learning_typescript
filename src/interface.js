"use strict";
class Conta {
    constructor() {
        this.saldo = 0;
    }
    contructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
// Podemos implementar quantas interfaces quisermos, diferente de classe, que só é permitido 1!
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true;
    }
    ;
}
