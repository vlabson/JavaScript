
const nome = 'Luiz Otavio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc = peso/(alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade ;

console.log(imc);

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg `);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
