//Manipulando arrays

let techs = ["html", "css", "js"]

//Adicionando um item no fim do array
techs.push("nodejs")

//Adicionado um item no começo do array
techs.unshift("SQL")

//Removendo um item do final do array
techs.pop()

//Removendo um item do começo do array
techs.shift()

//Pegando somente alguns elementos do array
console.log(techs.slice(1, 3))
//primeiro argumento: inicio
//segundo arumento: fim

//Remover 1 ou mais item em qualquer posição do array
techs.splice(1, 2)

//Encontrar a posição de um elemento no array
let index = techs.indexOf("css")
console.log(index)



