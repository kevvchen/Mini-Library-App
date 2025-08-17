const myLibrary = []

// Book Constructor
function Book(id, title, author, pages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Creates a book then store it in the array
function addToLibrary(id, title, author, pages, isRead) {
    const newBook = new Book(id, title, author, pages, isRead)
    myLibrary.push(newBook)
}   

function displayBooks() {
    
}

addToLibrary(crypto.randomUUID(), "The Catcher in the Rye", "J.D. Salinger", 304, false)
addToLibrary(crypto.randomUUID(), "Atomic Habits", "James Clear", 320, true)
addToLibrary(crypto.randomUUID(), "Ikigai: The Japanese Secret to a Long and Happy Life", "Hector Garcia, Francesc Miralles", 208, true)

console.log(myLibrary)
