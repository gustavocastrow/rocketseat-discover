/*
1. Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para o sistema 
de notas em caractres do tipo A B C

-> 90 + = A
-> 80 -  90 = B
-> 70 - 79 = C
-> 60 - 69 = D
-> <60 = F

*/



function getScore(score){
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score < 90;
  let scoreC = score >= 70 && score < 80;
  let scoreD = score >= 60 && score < 70;
  let scoreF = score < 60 && score >= 0;

  let scoreFinal;

  if(scoreA){
    scoreFinal = "A"
  } else if(scoreB){
    scoreFinal = "B"
  } else if(scoreC){
    scoreFinal = "C"
  } else if(scoreD){
    scoreFinal = "D"
  } else if(scoreF){
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }
  return scoreFinal;

}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(75))
console.log(getScore(45))
console.log(getScore(60))
