function tabuada(){
var tabu = window.document.getElementById('txtnum')
var sel = window.document.getElementById('sel')
var t = Number.parseInt(tabu.value)
if(tabu.value.length == ""){
    window.alert('[ERRO] Não deixe o campo vazio.')
}else{sel.innerHTML=""
for(var b=1; b<=10; b++){
        sel.innerHTML+=`<option>${t} x ${b} = ${t*b}`
    } sel.innerHTML+=`</Option>`
}
}