var numero = window.document.getElementById('num');
var res = window.document.getElementById('res');
var total = [];
var valid = numero.value.length;
var selecionar = window.document.querySelector('#selecionar');

function verificar() {
    if (numero.value.length == 0) {
        window.alert('Por favor, preencha todos os campos obrigatórios para prosseguir');
    } else if (Number(numero.value) > 0 && Number(numero.value) <= 100) {
        var y = testeValores(Number(numero.value));
        if (y == 1) {
            total.push(Number((numero.value)));
            selecionar.innerHTML += `<option>Foi adicionado o valor ${numero.value}<br></option>`;
            res.innerHTML = ''
        } else {
            window.alert('Por favor, insira um número único neste campo. O número inserido não pode ser repetido.');
        }
    } else {
        window.alert('Por favor, insira um número maior que zero e menor ou igual a cem neste campo. Obrigado!');
    }

    numero.value = "";
    numero.focus();

}

let testeValores = function (n) {
    var a = total.indexOf(n);
    if (a == -1) {
        return 1;
    } else {
        return 0;
    }
}
function resultado() {
    if (total.length == 0) {
        window.alert('Por favor, cadastre um número maior que zero e menor ou igual a cem no campo adicionar. Obrigado.')
    } else {
        var numTotal = total.length;
        var maior = 0;
        var menor = 101;
        var acum = 0;
        for (var i = 0; i < numTotal; i++) {
            acum += total[i];
            if (total[i] > maior) {
                maior = total[i];
            }
            if (total[i] < menor) {
                menor = total[i];
            }
        }
        res.innerHTML = `Total de números cadastrados: <strong>${numTotal}</strong><br>`;
        res.innerHTML += `A soma de todos os número é: <strong>${acum}</strong><br>`;
        res.innerHTML += `O maior número é: <strong>${maior}</strong><br>`;
        res.innerHTML += `O menor número é: <strong>${menor}</strong><br>`;
        res.innerHTML += `A media dos números é: <strong>${acum / numTotal}</strong><br>`;
    }
}