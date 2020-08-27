var tabu = function() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (num.value == '') {
        alert('Por favor digite um número!')
    }else{
        var nume = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text =`${nume} X ${c} = ${nume * c}`
            item.value = `tab${c}` 
            tab.appendChild(item)
            c++
        }
    }


}
    
        /*}else{
        for (a = 1; a <= 10; a++)
        res.innerHTML += `<a>${nume} X ${a} = ${nume * a}</a><br>`
    }*/
