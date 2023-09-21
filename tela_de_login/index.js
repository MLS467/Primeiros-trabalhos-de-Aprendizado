function validemail() {
    var em = window.document.querySelector('#email');
    var sen = window.document.getElementById('senha');
    var vet = [];
    vet = em.value;

    var te = testEmail(vet);
    var ts = senha(sen.value);
    em.value = "";
    em.focus();
    sen.value = "";
    

    if (te == 13 && ts == 13) {
        window.alert('Email confirmado!');
        

    } else if (te != 13) {
        return window.alert('Email inválido! insira ' + '@' + ' e ' + '.' + ' '); em.value = "";
        em.focus();

    } else {
        window.alert('Insira uma senha com no mínimo 8 dígitos.');
       

    }




}

function senha(i) {
    if (i.length == 0 || i.length < 8) {
        return 999;
    } else {
        return 13;
    }
}

function testEmail(n) {
    var x = n.indexOf('@');
    var y = n.indexOf('.');
    if (x == -1 || y == -1) {
        return 999;

    } else {
        return 13;
    }
}
