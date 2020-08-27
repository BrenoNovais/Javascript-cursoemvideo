var carregar = function() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value)> ano) {
        alert('[ERRO]')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mbb.png')
            }else if (idade  < 21) {
                img.setAttribute('src', 'mado.png')
            }else if (idade > 21 && idade < 50) {
                img.setAttribute('src', 'madu.png')
            }else if (idade >= 60) {
                img.setAttribute('src', 'mido.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fbb.png')
            }else if (idade  < 21) {
                img.setAttribute('src', 'fado.png')
            }else if (idade > 21 && idade < 50) {
                img.setAttribute('src', 'fadu.png')
            }else if (idade >= 60) {
                img.setAttribute('src', 'fido.png')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    res.appendChild(img)
    }
    
}