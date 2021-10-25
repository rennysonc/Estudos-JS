/*
Rennyson Cavalcante tem 19 anos , pesa 67 kg 
tem 1.67 de altura e seu imc é
Rennyson Cavalcante nasceu em 2002
*/

const nome = 'Rennyson';
const sobrenome = 'Cavalcante';
const idade = 19;
const peso = 67;
const anoAtual = 2021;
const altura = 1.67;
let imc;
calculo_imc = (peso / (altura * altura));
let anoNascimento;
resultado_anoNascimento = (anoAtual - idade);

console.log(nome,sobrenome,'tem',idade,'anos,','pesa',peso,'kg');
console.log('tem',altura,'de altura','e seu IMC é de',calculo_imc);
console.log(nome,sobrenome,'nasceu em',resultado_anoNascimento);

