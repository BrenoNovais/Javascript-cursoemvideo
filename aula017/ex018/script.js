var lista = []
function add() {
    var num = document.getElementById('num')
    var list = document.getElementById('list')
    
    if (num.value == '') {
        alert('Digite um numero para Adicionar!')
    }else {
        lista.push(Number(num.value))
        var addlist = document.createElement('option')
        addlist.text = `Valor ${num.value} Adicionado`
        addlist.value = `num${lista.length}`
        list.appendChild(addlist)
        
    }
    num.value = ''
    num.focus()
}

function soma() {
    var res = document.getElementById('res')
    if (lista.length == 0) {
        alert('Adicione um número!')
    } else {
        res.innerHTML += `<p>Ao todo temos ${lista.length} números cadastrados</p>`
        
        for (a = 0; a < lista.length ; a++){
            if (a == 0) {
                maior = lista[a]
                menor = lista[a]
            } else {
                if ( lista[a] > maior) {
                    maior = lista[a]
                }
                if ( lista[a] < menor) {
                    menor = lista[a]
                }
            }
        }
        
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        
        res.innerHTML += `<p>O maior valor informado foi ${menor}</p>`
        
        somar = 0
        s = 0
        while (s < lista.length) {
            somar += lista[s]
            s++
        }
        res.innerHTML += `<p>Somando todos valores temos ${somar}</p>`
        
        media = somar / lista.length
        res.innerHTML += `<p>a média dos valores digitados é ${media}</p>`

    }
      
}