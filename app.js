let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.innerHTML = myLibrary[i].title + " by " + myLibrary[i].author + ", " + myLibrary[i].pages + " pages, " + myLibrary[i].read + "<br>";
        document.getElementById("books").appendChild(card);
        console.log(myLibrary[i]);
    }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1216, false);
addBookToLibrary("The Silmarillion", "J.R.R. Tolkien", 412, true);
addBookToLibrary("The Children of Hurin", "J.R.R. Tolkien", 352, false);
displayBooks();