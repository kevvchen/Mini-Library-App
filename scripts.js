const myLibrary = [];

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
  const newBook = new Book(id, title, author, pages, isRead);
  myLibrary.push(newBook);
}

// Populate array with a couple of books so far
function initialTests() {
  addToLibrary(
    crypto.randomUUID(),
    "The Catcher in the Rye",
    "J.D. Salinger",
    304,
    false
  );
  addToLibrary(crypto.randomUUID(), "Atomic Habits", "James Clear", 320, true);
  addToLibrary(
    crypto.randomUUID(),
    "Ikigai: The Japanese Secret to a Long and Happy Life",
    "Hector Garcia, Francesc Miralles",
    208,
    true
  );

  displayBooks();
}

function displayBooks() {
  const bookContainer = document.querySelector(".books-section");

  // Go through each array and create DOM elements
  myLibrary.forEach((book) => {
    // Create Card Container
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Create book title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = `${book.title}`;
    bookCard.appendChild(bookTitle);

    // Create book author
    const bookAuthor = document.createElement("h6");
    bookAuthor.textContent = `By ${book.author}`;
    bookCard.appendChild(bookAuthor);

    // Create book pages
    const bookPages = document.createElement("p");
    bookPages.textContent = `${book.pages} pages`;
    bookCard.appendChild(bookPages);

    // Create book buttons (isRead toggle button, delete book button)
    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");
    const isReadButton = document.createElement("button");
    isReadButton.textContent = `${book.isRead ? "Read" : "Not Read"}`;
    bookButtons.appendChild(isReadButton);
    bookCard.appendChild(bookButtons);

    bookContainer.appendChild(bookCard);
  });
}

initialTests();

function showModal() {
  document.getElementById("form-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("form-modal").classList.add("hidden");
}

const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", showModal);

const closeBookBtn = document.getElementById("close-btn");
closeBookBtn.addEventListener("click", closeModal);

// Handle FormData
const form = document.getElementById("form-modal");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const bookTitle = document.getElementById("book_title").value;
  const bookAuthor = document.getElementById("book_author").value;
  const bookPages = document.getElementById("book_page_amount").value;
  const bookIsRead = document.getElementById("is_book_read").value;

});
