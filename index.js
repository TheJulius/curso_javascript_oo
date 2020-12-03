import {Cliente}  from "c:/xampp/htdocs/curso_js_poo_alura/Cliente.js";
import {ContaCorrente}  from "c:/xampp/htdocs/curso_js_poo_alura/ContaCorrente.js";

const cliente1 = new Cliente("Julio", 12345678900);
const cliente2 = new Cliente("Julia", 12345678901);

const contaCorrente1 =  new ContaCorrente(1001, cliente1);
const contaCorrente1 =  new ContaCorrente(1002, cliente2);

contaCorrente1.sacar(50);
contaCorrente1.depositar(1000);
contaCorrente1.transferir(500, cliente2)

console.log(cliente1);
console.log(cliente2);
console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroDeContas);
