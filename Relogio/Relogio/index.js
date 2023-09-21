setInterval(function () {
    var segundos = new Date().getSeconds();
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes()
    var zero = 0;

    if (hora < 10) {
        window.document.getElementById('hrGrande').innerHTML = `0${hora}`;
    } else { window.document.getElementById('hrGrande').innerHTML = `${hora}`; }

    if (minuto < 10) {
        window.document.getElementById('minGrande').innerHTML = `0${minuto}`
    } else { window.document.getElementById('minGrande').innerHTML = `${minuto}` }
    if (segundos < 10) {
        window.document.getElementById('segundosGrande').innerHTML = `0${segundos}`
    } else { window.document.getElementById('segundosGrande').innerHTML = `${segundos}` }
}, 1000);