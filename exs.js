//1.Declare uma variavel com o nome weight

let weight;

//2.Que tipo de dado e a variavel a cima?
console.log(typeof weight);

//3. Declare uma varivel e atribua valores para cada um dos dados

const person = {
  name: 'Gustavo',
  age: 25,
  stars: 10.5,
  isSubscribed: true
}

console.log(person.name)

//4. 

let students = []
console.log(students)

const John = {
  name: 'John',
  age: 25,
  stars: 10.5,
  isSubscribed: true
}

const Peter = {
  name: 'Peter',
  age: 35,
  stars: 2.5,
  isSubscribed: false
}

students.push(John)
students[1] = Peter
console.log(students)