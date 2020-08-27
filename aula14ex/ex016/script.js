var conta = function() {
    
    var inicio = document.getElementById('inicio')
    var passo = document.getElementById('passo')
    var fim = document.getElementById('fim')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
           
    if (i == '' || f == '' || p == '') {
        res.innerHTML = 'Impossivel contar!'
        res.style.textAlign = 'center'
    }
    if (p == 0) {
        alert('Passo invalido, irei considerar PASSO 1')
        p = 1
    }
    if ( i < f) {
        for (i; i < f; i += p) {
            res.innerHTML += `${i} <span class="emoji">👉</span>`
        }

    }else{
        for (i; i > f; i -= p) {
            res.innerHTML += `${i} <span class="emoji">👉</span>` 
        }
    }
    res.innerHTML += '<span class="emoji">✋</span>'

}