//For of -> loop a partir de uma variavel (strings e arrays)
let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

console.log('=== FOR OF ===')
for (let name of names){
    console.log(name)
}
//For in -> Cria um loop sobre as propriedades de um objeto

console.log('=== FOR IN === ')
let person = {
    name: 'JOhn',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}


