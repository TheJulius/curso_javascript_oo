//Classe Abstrata

export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Crie um tipo Conta Corrente ou Conta Poupanca");
        } else {
            this._saldo = saldoInicial;
            this._cliente = cliente;
            this._agencia = agencia;
        }
    }
    
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;   
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //metodo abstrato
    sacar(valor){
        throw new Error ("O metodo e abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        
        if (this._saldo < valorSacado) {
            return;
        } else {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if (valor <= 0) {
            return;   
        } else  {
            return this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}