Projeto desenvolvido para apresentação final do Programa de Formação ITAUTECH.

Objetivo:

>Criar um formulario para registrar dados pessoais.

Funcionalidades do projeto:
> Todos os inputs estão conectados (através do atributo "id") com a tag label. 
    Além de ser um recurso de acessibilidade para os usuários de leitores de telas, essa função também possibilita que o cliente clique com o mouse sobre o nome do campo para preencher o formulário. Desse modo, não é necessário clicar em cima do campo para que inicie a edição do mesmo.

    > Validação simples do campo (Nome Completo):possui um número mínimo de caracteres que deve ser digitado, caso contrário, é emitida ao cliente uma mensagem informando sobre o mínimo de caracteres.

    >Outra forma de validação implantada nos campos [Nome Completo e Número], é a obrigatoriedade de respeitar o formato dos caracteres de cada campo:
            - (Nome Completo = apenas letras), impedindo que o cliente envie o cadastro com números no campo "Nome Completo";
                    - (Número = apenas números), impedindo que o cliente envie o cadastro com letras no campo "Número" .

                    > Ao digitar o número no campo "CEP", é realizada uma busca  na URL do "viacep", permitindo que o CEP seja validado e os campos [Logradouro, Bairro e Cidade] sejam preenchidos automaticamente.
