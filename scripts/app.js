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
    myLibrary.push(book);
    setLocalStorage(myLibrary)
}

// remove the selected book
function removeBook(book) {
    removeBookFromLibrary(book);
    removeBookFromTable(book);
}

// removes the book from the array
function removeBookFromLibrary(book) {
    myLibrary.splice(book, 1);
}

// removes the book from the table
function removeBookFromTable(book) {
    let table = document.getElementById("book-table");
    table.deleteRow(parseInt(book) + 1) // table head is 0, to remove we add one to the table index and remove that row
}

function addBookToTable() {
    let table = document.getElementById("book-table");
    const element = myLibrary[myLibrary.length - 1] // get the last book
    arrayIndex = myLibrary.indexOf(myLibrary[myLibrary.length - 1]) // get the index of the book in the array 
    let row = table.insertRow(-1) // place each book last in table

    row.setAttribute("library-index", arrayIndex)
    for (let i = 0; i < 5; i++) {
        const cell = row.insertCell(i);
        if (i === 3) {
            cell.innerHTML = `<button class="read-t-f" class="toggle" value="${arrayIndex}">${element[Object.keys(element)[i]]}</button>`
            hello();
            cell.classList.add("td-button")
        } else if (i < 4) {
            cell.innerHTML = element[Object.keys(element)[i]]
        } else {
            cell.innerHTML = `<button value=${arrayIndex} onClick="removeBook(this.value)">Delete</button>`
        }
    }
}

function hello() {
    // get all the cells
    let trueFalseCells = document.querySelectorAll(`.read-t-f`)
    // iterate over all the cells and add an eventlistener
    trueFalseCells.forEach(element => element.addEventListener("click", changeReadStatus));
}

// change the read status from true to false
function changeReadStatus() {
    const bookIndex = this.value;
    const book = myLibrary[parseInt(bookIndex)]
    // if the read status is true change to false and update button text, else change to true and update button text
    if (book.read === true) {
        book.read = false
        this.innerText = book.read;
    } else {
        book.read = true
        this.innerText = book.read;
    }
}

// creates a book using the input fields in the web app 
function createBook() {
    const book = Object.create(Book.prototype) // create a new book instance prototype
    // assign values from the input fields
    book.title = document.getElementById("title").value;
    book.author = document.getElementById("author").value;
    book.pages = document.getElementById("pages").value;
    book.read = document.getElementById("read").checked;
    addBookToLibrary(book);
    addBookToTable();
    document.getElementById("book-form").reset(); // resets the form with default placehold text
}

function setLocalStorage(books) {
    localStorage.setItem("bookArray", JSON.stringify(books))
}

function loadLocalStorage() {
    if (localStorage.bookArray) {
        myLibrary = JSON.parse(localStorage.getItem("bookArray"))
        addBooksToTableFromMemory();
    } else {
        loadStartingTable();
    }
}

// create some basic books for the table
function loadStartingTable() {
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
    addBooksToTableFromMemory()
}

function addBooksToTableFromMemory() {
    myLibrary.forEach(element => {
        let table = document.getElementById("book-table");
        let row = table.insertRow(-1) // place each book last in table
        arrayIndex = myLibrary.indexOf(element) // get the index of the book in the array

        row.setAttribute("library-index", arrayIndex)
        for (let i = 0; i < 5; i++) {
            const cell = row.insertCell(i);
            if (i === 3) {
                cell.innerHTML = `<button class="read-t-f" class="toggle" value="${arrayIndex}">${element[Object.keys(element)[i]]}</button>`
                hello();
                cell.classList.add("td-button")
            } else if (i < 4) {
                cell.innerHTML = element[Object.keys(element)[i]]
            } else {
                cell.innerHTML = `<button value=${arrayIndex} onClick="removeBook(this.value)">Delete</button>`
            }
        }
    })
}

loadLocalStorage();