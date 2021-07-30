Projeto desenvolvido para apresentação final do Programa de Formação ITAUTECH.

Objetivo:

>Criar um formulario para registrar dados pessoais.


Site do projeto: https://boring-mahavira-935322.netlify.app/  


Funcionalidades do site:

> Todos os inputs estão conectados (através do atributo "id") com a tag label:
        Além de ser um recurso de acessibilidade para os usuários de leitores de telas, essa função também possibilita que o cliente clique com o mouse sobre o nome do campo para preencher o formulário. Desse modo, não é necessário clicar dentro do campo para que inicie a edição do mesmo.

> Todos os campos obrigatórios possuem validação para qie o cadastro não seja enviado sem os dados:
        Uma caixa de alerta é emitida todas as vezes em que houver tentativa de envio do  cadastro sem o preenchimento dos campos obrigatórios. 

    > Validação simples do campo (Nome Completo):
        possui um número mínimo de caracteres que deve ser digitado, caso contrário, é emitida ao cliente uma mensagem informando sobre o mínimo de caracteres.

    >Outra forma de validação implantada nos campos [Nome Completo e Número], é a obrigatoriedade de respeitar o formato dos caracteres de cada campo:
        - (Nome Completo = apenas letras), impedindo que o cliente envie o cadastro com números no campo "Nome Completo";
        - (Número = apenas números), impedindo que o cliente envie o cadastro com letras no campo "Número" .

                    > Ao digitar o número no campo "CEP", é realizada uma busca  na URL do "viacep", permitindo que o CEP seja validado e os campos [Logradouro, Bairro e Cidade] sejam preenchidos automaticamente.

        >Validação do CPF:
                        Além da máscara no formato "___.___.___-__), é possível verificar se o CPF digitado é válido. 
                                        Essa validação é feita através de uma função cujo algorítimo realiza um cálculo com os 9 primeiros dígitos e identifica se o resultado do cálculo confere com os dois últimos dígitos, chamados de "dígitos verificadores". 

>No formulário há um campo que não aparece para o cliente preencher.
        Isso permite que, ao enviar os dados, seja possível verificar se o cadastro foi preenchido por um robô; se estiver preenchido, é porque foi preenchido por um robô e não pelo cliente.

Referências:

-Mentoria do professor Douglas Morais (Gama Academy); 
-"Como consumir uma API de CEP com javascript puro| ViaCEP | #01" no YouTube (https://youtu.be/imk6Y0viabg);   
-Stack Overflow em Português (https://pt.stackoverflow.com);
-Receita Federal(http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js);
-w3schools (https://www.w3schools.com/js/js_functions.asp);
-bosontreinamentos(http://www.bosontreinamentos.com.br/);
-Dicas de Programação(https://dicasdeprogramacao.com.br).