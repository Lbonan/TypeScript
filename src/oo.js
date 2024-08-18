"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi `;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        //Protected -- está disponível nas classes e nas classes filhas;
        //Public -- acessível em todos os níveis;
        //Static -- está disponível apenas ao nível da classe, propriedades e métodos não vão para a instância;
        //Private -- Disponível apenas na própria classe;
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
    static retonaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(1235456);
