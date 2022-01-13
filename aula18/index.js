const pessoa1 = {
    nome: 'Miranda',
    sobrenome: 'Luiz',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é : ${this.idade}.`);
    },

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();




/*
aqui criamos uma função que cria uma pessoa onde recebemos os dados por parametro e retornamos o mesmo  

function criaPessoa (nome, sobrenome, idade){
    return{
        nome, sobrenome,idade
    };
}

const pessoa01 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa02 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa03 = criaPessoa('João', 'silva', 14);
const pessoa04 = criaPessoa('Junior', 'Viana', 81);
const pessoa05 = criaPessoa('Jean', 'Miranda', 69);

console.log(pessoa01);
*/

/*
aqui declaramos um objeto pessoa
mas ainda continuamos com o mesmo problema no caso de precisar de 1 mil objetos

const pessoa1 = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome:'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/


/* aqui declaramos algumas variaveis que tem algo em comum
no caso em uma necessidade de ter 1 mil variaveis teriamos um serio problema

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;
*/



/*
let array = [1,2,3]; // relembrando aqui declaramos um array 
array.push(4); // aqui inserimos o valor 4 no final 
array[0] = 'Luiz'; // aqui edito e altero o valor do indice 0 para luiz
array = 'outra coisa'; // aqui mudo o valor da variavel que deixa de ser um array
console.log(array); // aqui imprimo a variavel
*/