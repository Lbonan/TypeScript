"use strict";
class Conta {
    constructor(numeroDaCOnta) {
        this.saldo = 0;
        this.numeroDaconta = numeroDaCOnta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true;
    }
}
