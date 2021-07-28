// Alert ao clicar na logo do Itaú.

const logo = document.getElementById('itau')

logo.addEventListener('click', function () {
    alert("Curiosidade: 'itaú' significa pedra preta em tupi-guarani.");
})
function replaceCPF(value) {

    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

}



//Máscara para o campo CPF.

const inputCPF = document.getElementById("cpf")

inputCPF.addEventListener('focus', function (e) {

    inputCPF.value = "___.___.___-__"

    setTimeout(function () {

        inputCPF.setSelectionRange(0, 0)

    }, 1)

})





inputCPF.addEventListener("keydown", function (e) {

    e.preventDefault()

    if ("0123456789".indexOf(e.key) !== -1

        && this.value.indexOf("_") !== -1) {

        this.value = this.value.replace(/_/, e.key)

        const nextIndex = this.value.indexOf("_")

        this.setSelectionRange(nextIndex, nextIndex)

    } else if (e.key === "Backspace") {

        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")

        const nextIndex = this.value.indexOf("_")

        this.setSelectionRange(nextIndex, nextIndex)

    }

})


//Máscara para o campo RG.
const inputRG = document.getElementById("rg")

inputRG.addEventListener('focus', function (e) {

    inputRG.value = "_.___.___-_"

    setTimeout(function () {

        inputRG.setSelectionRange(0, 0)

    }, 1)

})

inputRG.addEventListener("keydown", function (e) {

    e.preventDefault()

    if ("01234567".indexOf(e.key) !== -1

        && this.value.indexOf("_") !== -1) {

        this.value = this.value.replace(/_/, e.key)

        const nextIndex = this.value.indexOf("_")

        this.setSelectionRange(nextIndex, nextIndex)

    } else if (e.key === "Backspace") {

        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")

        const nextIndex = this.value.indexOf("_")

        this.setSelectionRange(nextIndex, nextIndex)

    }

})


//Função para verificar se os campos obrigatórios estão vazios quando o usuário tentar enviar o formulário.

function valida() {
    if (document.formulario.nome.value == "") {
        alert("Por favor, preencha o campo 'Nome Completo'.");
        document.getElementById("nome").focus();
        return false;
    }
    if (document.formulario.cpf.value == "") {
        alert("Por favor, preencha o campo 'CPF'.");
        document.getElementById(cpf).focus();
        return false
    }
    if (document.formulario.celular.value == "") {
        alert("Por favor, preencha o campo 'Celular'.");
        document.getElementById("celular").focus();
        return false;
    }
    if (document.formulario.rua.value == "") {
        alert("por favor, preencha oo campo 'Logradouro'.");
        document.getElementById("rua").focus();
        return false;
    }
    if (document.formulario.numero.value == "") {
        alert("Por favor, preencha o campo 'Numero'.");
        document.getElementById("numero").focus();
        return false
    }
    else {
        alert("Seu cadastro foi enviado com sucesso!");
        return false;
    }
}

