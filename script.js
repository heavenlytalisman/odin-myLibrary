const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const libraryDisplay = document.getElementById("libraryDisplay");
    libraryDisplay.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `<strong>${book.title}</strong><br>Author:${book.author}<br>pages:${book.pages}<br>Read? : ${book.read ? 'yes' : 'no'}<br><br><button data-id="${book.id}" class="removeBtn">Remove</button><button data-id="${book.id}" class="toggleBtn">Read</button>`;

        libraryDisplay.appendChild(card);
    });

    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.onclick = () => removeBookById(btn.dataset.id)
    })
}

function removeBookById(id) {
    index = myLibrary.findIndex(book => book.id === id);
    if(index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks()
    }
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};


addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);