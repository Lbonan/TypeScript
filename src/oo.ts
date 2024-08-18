class Pessoa {
  //declarar as propriedades antes de colocar-las no construtor;
  nome: string;
  renda?: number;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }

  dizOla(): string {
    return `${this.nome} disse oi `;
  }
}

class ContaBancaria {
  //Protected -- está disponível nas classes e nas classes filhas;
  //Public -- acessível em todos os níveis;
  //Static -- está disponível apenas ao nível da classe, propriedades e métodos não vão para a instância;
  //Private -- Disponível apenas na própria classe;
  protected saldo: number = 0;
  public numeroDaConta: number;

  constructor(numeroDaConta: number) {
    this.numeroDaConta = numeroDaConta;
  }

  static retonaNumeroDoBanco() {
    return 125;
  }

  getSaldo() {
    return this.saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  depositar(valor: number): void {
    this.saldo = valor * 2;
  }
}

const contaDoPedro = new ContaBancariaPessoaFisica(1235456);
