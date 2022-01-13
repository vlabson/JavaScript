const num1 = parseInt(prompt('Digite Primeiro Numero!'));
const num2 = parseInt(prompt('Digite Segundo Numero!'));


const result = num1 + num2;

const confirmacao = confirm(`soma: ${result} este resultado esta correto?`);

if(!confirmacao){
    alert(`O Resultado da Operação: ${result} esta errado`);
}else{
       alert(`O Resultado da Operação: ${result} esta correto`);
}
