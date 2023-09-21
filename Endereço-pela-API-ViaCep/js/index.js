$(document).ready(function () {
    $('#Cep').blur(function () {
        var cep = $('#Cep').val();
        $.get(`https://viacep.com.br/ws/${cep}/json/`, function (dados, status) {
            console.log(dados);
          
            if (status === "success") {
                $('#cidade').val(dados.localidade);
                $('#uf').val(dados.uf);
                $('#rua').val(dados.logradouro);
            } else {
                window.alert("[ERRO 404]");
            }
        });
    });
});

// Metodo $.get(url , function(dados,status){-----});

// para ver o resultado do objeto console.log(dados);

// status vai retornar se foi
// success caso ocorrer tudo OK
//pode usar para validação if(status == "success"){ ---- }else{ window.alert();}