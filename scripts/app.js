// library, holds all the books
let myLibrary = [];

// the book constructor
function Book() {
  this.title = title
  this.author = author
  this.pages = pages;
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayBooks(){
    return;
}

// play ground
const book1 = Object.create(Book.prototype)
book1.title = "Title of the Tree"
book1.author = "Max"
book1.pages = 132
book1.read = true

const book2 = Object.create(Book.prototype)
book1.title = "The Three"
book1.author = "Sam"
book1.pages = 500
book1.read = false

addBookToLibrary(book1)
addBookToLibrary(book2)

console.log(myLibrary)