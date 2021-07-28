'use strict';

const limparFormulario = (rua) => {

    document.getElementById('rua').value = '';

    document.getElementById('bairro').value = '';

    document.getElementById('cidade').value = '';

}



const preencherFormulario = (rua) => {

    document.getElementById('rua').value = rua.logradouro;

    document.getElementById('bairro').value = rua.bairro;

    document.getElementById('cidade').value = rua.localidade;

}


const eNumero = (numero) => /^[0-9]+$/.test(numero);



const cepValido = (cep) => cep.length == 8 && eNumero(cep);



const pesquisarCep = async () => {

    limparFormulario();



    const cep = document.getElementById('cep').value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {

        const dados = await fetch(url);

        const rua = await dados.json();

        if (rua.hasOwnProperty('erro')) {

            document.getElementById('rua').value = 'CEP não encontrado!';

        } else {

            preencherFormulario(rua);

        }

    } else {

        document.getElementById('rua').value = 'CEP incorreto!';

    }



}



document.getElementById('cep')

    .addEventListener('focusout', pesquisarCep);
