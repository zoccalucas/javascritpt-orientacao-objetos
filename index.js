import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Lucas", 47277189876);
const cliente2 = new Cliente("Eliana", 47277189877);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(1002, cliente2);
const contaCorrente3 = new ContaCorrente(1002, cliente2);

let valorDeposito = 500;
let valorTransferencia = 200;

contaCorrente1.deposito(valorDeposito);
contaCorrente1.transferencia(valorTransferencia, contaCorrente2);

console.log(ContaCorrente.qtdContas);


