let placeholder = {
    cardNome: "SEU NOME",
    cardNumero: "1234 1234 1234 1234",
    cardValidade: "12/12",
    cardCvv: 123
};
/* INPUTS */
let inputNome = document.getElementById('nome');
let inputNumero = document.getElementById('numero');
let inputValidade = document.getElementById('validade');
let inputCvv = document.getElementById('cvv');

/* SPANS */
let cardNome = document.getElementById('card-nome');
let cardNumero = document.getElementById('card-numero');
let cardValidade = document.getElementById('card-validade');
let cardCvv = document.getElementById('card-cvv');

cardNome.innerHTML = placeholder.cardNome;
cardNumero.innerHTML = placeholder.cardNumero;
cardValidade.innerHTML = placeholder.cardValidade;
cardCvv.innerHTML = placeholder.cardCvv;

let cardContent = document.querySelector(".card .content");

console.log(cardContent);

let cardCvvBack = document.getElementById('card-cvv-back');

inputNome.addEventListener("keyup", function (event) {
    let inputValue = event.target.value;
    if (inputValue) {
        cardNome.innerHTML = inputValue;
        return;
    }
    cardNome.innerHTML = placeholder.cardNome;
},

inputNumero.addEventListener("keyup", function (event) {
    let inputValue = event.target.value;
    if (inputValue) {
        cardNumero.innerHTML = inputValue;
        return;
    }
    cardNumero.innerHTML = placeholder.cardNumero;
},

inputValidade.addEventListener("keyup", function (event) {
    let inputValue = event.target.value;
    if (inputValue) {
        cardValidade.innerHTML = inputValue;
        return;
    }
},

inputCvv.addEventListener("keyup", function (event) {
    let inputValue = event.target.value;
    if (inputValue) {
        cardCvv.innerHTML = inputValue;
        cardCvvBack.innerHTML = inputValue;
        return;
    }
    cardCvv.innerHTML = placeholder.cardCvv;
    cardCvvBack.innerHTML = placeholder.cardCvv;
}))));

inputCvv.addEventListener('focus', function () {
    cardContent.classList.add('rotate');
});

inputCvv.addEventListener('blur', function () {
    cardContent.classList.remove('rotate');
});





/*
const ITAU = function (conta, valor) {
    console.log("O valor com a taxa ficou " + valor * 1.1)
}

const BRADESCO = function (conta, valor) {
    console.log("O valor com a taxa ficou " + valor * 1.05)
}

const BACEN = {
    transacao: function (instituicao, conta, valor) {

       console.log("Iniciando transação...")

       instituicao(conta, valor);

       console.log("Outras coisas que interessão ao BACEN....");

       console.log("Transação concluida!");
        
    }
}

BACEN.transacao(ITAU, '011', 20);
BACEN.transacao(BRADESCO, '011', 20);
*/