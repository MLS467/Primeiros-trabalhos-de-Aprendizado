function verificar() {
    var nome = window.document.querySelector('input#nome');
    var sobrenome = window.document.getElementById('sobrenome');
    var email = window.document.querySelector('#email');
    var emailvalid = email.value.length;
    var vet = [emailvalid];
    vet = email.value;
    c = 0;
    a = 0;

    if (nome.value.length == "" || sobrenome.value.length == "" || email.value.length == "") {
        window.alert('Preencha todos os campos');
        nome.value = "";
        sobrenome.value = "";
        email.value = "";
    } else {
        for (var i = 0; i < emailvalid; i++) {
            if (vet[i] == '@') { c = 1; }
            if (vet[i] == '.') { a = 1; }
        } if (c != 1 || a != 1) {
            window.alert('O email fornecido é inválido. Certifique-se de inserir um email válido contendo um caractere ' + '@' + ' e pelo menos um ponto ' + '.' + '')
            email.value = "";
        } else {
            window.alert('O email foi confirmado com sucesso! Obrigado por verificar seu email.')
            email.value = "";
            window.alert('Dados enviados com Sucesso !')
        }
    }
}