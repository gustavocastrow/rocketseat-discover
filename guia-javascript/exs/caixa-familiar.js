/*

  2. Sistema de gastos familiares

  Crie um objeto que possuirá 2 propriedades, ambas do tipo
  array:
    -> receitas: []
    -> despesas: []

  Agora crie uma função que irá calcular o total de receitas e despesas
  e irá mostrar uma mensagem se a família está com o saldo positivo ou saldo
  negativo, seguindo o valor do saldo


*/

let family = {
  incomes: [500, 200, 890.89, 100.90],
  expenses: [320.3, 89.90, 139.10, 79.90, 1450.30]

}

function sum(array){
  let total = 0;

  for(let value of array){
    total += value
  }

  return total 
}

function calculateBalance(){
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsOk = total >= 0

  let balanceText = "negativo"

  if(itsOk){
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)

}

calculateBalance()