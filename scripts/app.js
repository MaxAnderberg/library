let myLibrary = [];

function Book() {
  this.title = title
  this.author = author
  this.pages = pages;
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const book1 = Object.create(Book)
book1.title = "Title of the Tree"
book1.author = "Max"
book1.pages = 132
book1.read = true

console.log(book1)

addBookToLibrary(book1)
console.log(myLibrary)