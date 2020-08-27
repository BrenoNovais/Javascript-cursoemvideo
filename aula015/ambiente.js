var num = [1, 5, 8, 4]

console.log(`Nosso vetor é ${num}`)
console.log(num)

num[3] = 6
console.log(`Adicionando 6 na posição 3 ${num}`)

num.push(7)
console.log(`Adicionando 7 na ultima posição ${num}`)

console.log(`tamanho do array ${num.length}`)

console.log(`Em ordem crescente ${num.sort()}`)

for (let pos = 0; pos < num.length; pos++)
console.log(` A poscição ${pos} tem o valor: ${num[pos]}`)
console.log()

for (let p in num)
console.log(` A poscição ${p} tem o valor: ${num[p]}`)

num2 = [2, 4, 6, 8, 10]
console.log(`o Numero 8 esta na posição ${num.indexOf(8)}`)
console.log(`não contem o 3, então sera apresentado a posição: ${num.indexOf(3)}`)