import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static qtdContas = 0;
    agencia;

    _cliente;
    _saldo = 0;

    saque(valorSaque){
        if(this._saldo >= valorSaque){
            this._saldo -= valorSaque;
            return valorSaque;
        }     
        return;
    }

    set cliente(clienteReq){
        if(clienteReq instanceof Cliente){
            this._cliente = clienteReq;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.qtdContas += 1;
    }

    deposito(valorDeposito){
        if(valorDeposito<=0){
            return;     
        } 
        this._saldo += valorDeposito;
    }

    transferencia(valor, conta){
        const valorTransferencia = this.saque(valor);
        conta.deposito(valorTransferencia);
    }
}