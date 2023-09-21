function verificar() {

    var data = new Date()
    var agora = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var resfano = Number(fano.value)
    var foto = window.document.getElementById('fotos')
    var masc = window.document.getElementsByName('tsex')[0]
    var fem = window.document.getElementsByName('tsex')[1]
    //var imagem= document.createElement('img')
   // imagem.setAttribute('id','imagem')
    if (fano.value.length == 0 || fano.value > agora) {
        window.alert(`[ERRO] o ano atual é ${agora}`)
    } else {

        var idade = Number(agora - resfano)
        var idade = agora - resfano

        if (masc.checked) {

            if (idade < 11) {
                res.innerHTML = `Você é um <strong>Menino</strong> com ${idade} anos de idade`
                foto.src='img/menino.png'
                // imagem.setAttribute('src','img/menino.png')
            } else if (idade < 24) {
                res.innerHTML = `Você é um <strong>Jovem</strong> com ${idade} anos de idade`
                foto.src='img/jovemhomem.png'
            } else if (idade < 65) {
                res.innerHTML = `Você é um <strong>Homem</strong> com ${idade} anos de idade`
                foto.src='img/homem.png'
            } else {
                res.innerHTML = `Você é um <strong>Idoso</strong> com ${idade} anos de idade`
                foto.src='img/idoso.png'
            }

        } else {

            if (idade < 11) {
                res.innerHTML = `Você é uma <strong>Menina</strong> com ${idade} anos de idade`
                foto.src='img/menina.png'
            } else if (idade < 24) {
                res.innerHTML = `Você é uma <strong>Jovem</strong> com ${idade} anos de idade`
                foto.src='img/jovemmulher.png'
            } else if (idade < 65) {
                res.innerHTML = `Você é uma <strong>Mulher</strong> com ${idade} anos de idade`
                foto.src='img/mulher.png'
            } else {
                res.innerHTML = `Você é uma <strong>Idosa</strong> com ${idade} anos de idade`
                foto.src='img/idosa.png'
            }
        }
    }

}
