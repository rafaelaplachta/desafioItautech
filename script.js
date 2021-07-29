// Mensagem ao clicar na logo do Itaú.

const logo = document.getElementById('itau')

logo.addEventListener('click', function () {
    alert("Curiosidade:\n 'itaú' significa pedra preta em tupi-guarani.");
})

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

// Máscara para os campos de telefone.

function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}
//
function validaCPF() {
    var cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");
    cpf = cpf.replace(".", "");
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {

        document.getElementById("cpf").style.backgroundColor = "#faa"; //isso deixa o campo avermelhado
        document.getElementById("cpf").focus();

        alert("CPF inválido")
        return false;
    } else {
        var soma = 0;
        soma = soma + (parseInt(cpf.substring(0, 1))) * 10;
        soma = soma + (parseInt(cpf.substring(1, 2))) * 9;
        soma = soma + (parseInt(cpf.substring(2, 3))) * 8;
        soma = soma + (parseInt(cpf.substring(3, 4))) * 7;
        soma = soma + (parseInt(cpf.substring(4, 5))) * 6;
        soma = soma + (parseInt(cpf.substring(5, 6))) * 5;
        soma = soma + (parseInt(cpf.substring(6, 7))) * 4;
        soma = soma + (parseInt(cpf.substring(7, 8))) * 3;
        soma = soma + (parseInt(cpf.substring(8, 9))) * 2;
    }
    var resto1 = (soma * 10) % 11;
    if ((resto1 == 10) || (resto1 == 11)) {
        resto1 = 0;
    }
    var soma = 0;
    soma = soma + (parseInt(cpf.substring(0, 1))) * 11;
    soma = soma + (parseInt(cpf.substring(1, 2))) * 10;
    soma = soma + (parseInt(cpf.substring(2, 3))) * 9;
    soma = soma + (parseInt(cpf.substring(3, 4))) * 8;
    soma = soma + (parseInt(cpf.substring(4, 5))) * 7;
    soma = soma + (parseInt(cpf.substring(5, 6))) * 6;
    soma = soma + (parseInt(cpf.substring(6, 7))) * 5;
    soma = soma + (parseInt(cpf.substring(7, 8))) * 4;
    soma = soma + (parseInt(cpf.substring(8, 9))) * 3;
    soma = soma + (parseInt(cpf.substring(9, 10))) * 2;
    var resto2 = (soma * 10) % 11;
    if ((resto2 == 10) || (resto2 == 11)) {
        resto2 = 0;
    }
    if (
        (resto1 == (parseInt(cpf.substring(9, 10)))) &&
        (resto2 == (parseInt(cpf.substring(10, 11))))) {
        alert("CPF válido");
        return true;
    } else {
        alert("CPF inválido")
        document.getElementById("cpf").style.backgroundColor = "#faa";
        document.getElementById("cpf").focus();
        return false;
    }
}


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
    if (document.formulario.phone.value == "") {
        alert("Por favor, preencha o campo 'Celular'.");
        document.getElementById("phone").focus();
        return false;
    }
    if (document.formulario.cep.value == "") {
        alert("Por favor, preencha o campo 'CEP'.");
        document.getElementById("cep").focus();
        return false
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
        alert("'nomeFim' + seu cadastro foi enviado com sucesso!");
        return false;
    }
}
var nomeFim = document.getElementById("nome").value