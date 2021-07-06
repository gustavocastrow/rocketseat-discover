function createPhrases(){
  console.log('Estudar e muito bom')
  console.log('Paciencia e persistencia')
  console.log('Revisoa e mae do aprendizado')
}

createPhrases();

const sum = function(number1, number2){
  let total = number1 + number2
  return total
}

let number1 = 32
let number2 = 25

console.log(`O numero 1 e ${number1}`)
console.log(`O numero 2 e ${number2}`)
console.log(`A soma e ${sum(number1, number2)}`)


let subject = 'create video'

function createThing(subject){
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThing(subject))

sayMyName();

function sayMyName(){
  console.log('Gustavo')
}

//Arrow function: 

const sayMyName2 = () => {
  console.log('Gustavo Arrow Function')
}

sayMyName2();



//Function constructor

function Person(name){
  this.name = name
  this.walk = function(){
    return "Andando...."
  }
}

const gustavo = new Person("Gustavo")
const joao = new Person("JOao")
console.log(gustavo)
console.log(gustavo.walk())
console.log(joao)
console.log(joao.walk())