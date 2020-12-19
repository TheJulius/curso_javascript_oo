import {Cliente}  from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
// import {ContaCorrente}  from "./Conta/ContaCorrente.js";
// import {ContaSalario}  from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Julio", 12345678900);
// const cliente2 = new Cliente("Julia", 12345678901);
// const cliente3 = new Cliente("Juliani", 12345678902);

// const contaCorrente1 =  new ContaCorrente(cliente1, 1001);
// const contaPoupanca1 =  new ContaPoupanca(1000, cliente2, 1002);
// const contaSalario1 =  new ContaSalario(cliente3);

// contaCorrente1.depositar(1000);
// contaCorrente1.sacar(50);
// // contaCorrente1.transferir(500, cliente2)

// console.log();
// console.log(cliente1);
// console.log();
// console.log(cliente2);
// console.log();
// console.log(contaCorrente1);
// console.log();
// console.log(contaPoupanca1);
// console.log();
// console.log(contaSalario1);
// console.log();
// console.log(ContaCorrente.numeroDeContas);

const cliente1 = new Cliente("Juliani", 12345678900, "1234567892");
const ClienteEstaLogado = SistemaAutenticacao.login(cliente1, "1234567892");

const diretor1 = new Diretor("Julio", 10000, 12345678901);
diretor1.cadastrarSenha("123456789");
const DiretorEstaLogado = SistemaAutenticacao.login(diretor1, "123456789");

const gerente1 = new Gerente("Julia", 5000, 12345678902);
gerente1.cadastrarSenha("1234567891");
const GerenteEstaLogado = SistemaAutenticacao.login(gerente1, "1234567891");

console.log(ClienteEstaLogado);
console.log();
console.log(DiretorEstaLogado);
console.log();
console.log(GerenteEstaLogado);
