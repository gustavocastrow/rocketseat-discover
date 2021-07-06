/*

  3. Buscando e contanto dados em Arrays

    Baseado no Array de Livros por Categorias abaixo, faça os seguintes
    desafios

    -> 3.1 Contar o número de categorias e o número de livros em cada categoria
    -> 3.2 Contar o número de autores
    -> 3.3 Mostrar livros do autor Augusto Cury
    -> 3.4 Transformar a função acima em uma função que irá receber
        o nome do autor e devolver os livros desse autor 

*/


const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Classon"
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter"
      }
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury"
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      }
    ]
  }
]


//3.1
const totalCategories = booksByCategory.length;
console.log(totalCategories)

for(let category of booksByCategory){
  console.log(`Total de livros da categoria: ${category.category}`)
  console.log(category.books.length)
}

//3.2
function countAuthors(){
  let authors = [];

  for(let category of booksByCategory){ //pegando primeiro categoria
    for(let book of category.books){//pegando books
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
      
    } 

  }

  console.log(`Total de autores: ${authors.length}`)
}

countAuthors();

function booksOfAuthor(author){
  let books = [];

  for(let category of booksByCategory){ //pegando primeiro categoria
    for(let book of category.books){//pegando books
      if(book.author == author){
        books.push(book.title)
      }
      
    } 

  }

  console.log(`Livros do Autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')