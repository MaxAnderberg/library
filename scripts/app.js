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

function addBookToTable(){
    let table = document.getElementById("myTable");
    myLibrary.forEach(element => {
        let row = table.insertRow(-1) // place each book last in table
        // console.log(element)
        for (let i = 0; i < 4; i++) {
            const cell = row.insertCell(i);
            cell.innerHTML = element[Object.keys(element)[i]]
        }
    });
}
// play ground
const book1 = Object.create(Book.prototype)
book1.title = "Title of the Tree"
book1.author = "Max"
book1.pages = 132
book1.read = true

const book2 = Object.create(Book.prototype)
book2.title = "The Three"
book2.author = "Sam"
book2.pages = 500
book2.read = false

addBookToLibrary(book1)
addBookToLibrary(book2)

// console.log(myLibrary)

addBookToTable();
