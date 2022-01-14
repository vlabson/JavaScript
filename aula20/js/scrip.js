function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // aqui temos uma declaração de um array 

    form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm(evento){
        
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas); 
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    };

    
/*


ESTA FOI A MINHA SOLUÇÃO PARA O EXERCICIO




function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // aqui temos uma declaração de um array 


    AQUI TEMOS A DECLARAÇÃO DE UM OBJETO

    const pessoa = {
        nome: "",
        sobrenome: "",
        peso: "",
        altura: ""
    };

   
    FUNCAO PARA CRIAR O OBJETO PESSOA E ADCIONALA NO ARRAY

    function criarPessoa(nome, sobrenome, peso, altura){
        pessoa.nome = nome;
        pessoa.sobrenome = sobrenome;
        pessoa.peso = peso;
        pessoa.altura = altura;

        pessoas.push = [pessoa];
    };

    form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm(evento){
        
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        criarPessoa(nome,sobrenome,peso,altura);

        imprimirPessoa(nome,sobrenome,peso,altura);

        console.log(pessoas);   
    };

    AQUI TEMOS UMA FUNCAO QUE IMPRIME NA TELA OS DADOS INSERIDOS

    function imprimirPessoa(nome,sobrenome,peso,altura){
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;
    }

 */ 

    /*form.onsubmit = function(evento){
        evento.preventDefault();// Esta funcao evita que seja realizado as ações padrao do button ( no caso ele nao vai enviar o formulario)
        alert(1);
        console.log('Foi enviado!');
    };*/

        
    /*
    //forma mais atual de pegar um evento do navegador ( neste caso o evento é clicar no botao enviar)
    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    };
    */

}

meuEscopo();
