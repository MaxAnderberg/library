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

function displayBooks() {
    return;
}

function removeBook(book) {
    removeBookFromLibrary(book);
    removeBookFromTable(book);
}

function removeBookFromLibrary(book) {
    myLibrary.splice(book, 1);
}

function removeBookFromTable(book) {
    let table = document.getElementById("book-table");
    table.deleteRow(parseInt(book) + 1) // table head is 0, to remove we add one to the table index and remove that row
}

function addBookToTable() {
    let table = document.getElementById("book-table");
    const element = myLibrary[myLibrary.length - 1]
    arrayIndex = myLibrary.indexOf(myLibrary[myLibrary.length - 1])
    let row = table.insertRow(-1) // place each book last in table

    row.setAttribute("library-index", arrayIndex)
    for (let i = 0; i < 5; i++) {
        const cell = row.insertCell(i);
        if (i === 3) {
            cell.innerHTML = `<button onClick="changeReadStatus(this.value)" class="toggle" value="${arrayIndex}">${element[Object.keys(element)[i]]}</button>
            </label>`
        } else if (i < 4) {
            cell.innerHTML = element[Object.keys(element)[i]]
        } else {
            cell.innerHTML = `<button value=${arrayIndex} onClick="removeBook(this.value)">Delete</button>`
        }
    }
}

function changeReadStatus(bookIndex) {
    const book = myLibrary[parseInt(bookIndex)]
    if(book.read === true){
        console.log("true")
        book.read = false
    } else {
        console.log("false")
        book.read = true
    }

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
addBookToTable();
addBookToLibrary(book2)
addBookToTable();


function createBook() {
    const book = Object.create(Book.prototype)
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    console.log(title, author, pages, read)
    addBookToLibrary(book);
    addBookToTable();
    document.getElementById("book-form").reset(); // resets the form with default placehold text
}
