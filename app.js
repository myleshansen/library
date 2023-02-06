let myLibrary = [];

const submit = document.querySelector("#submit");

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
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h4");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.className = "remove";
    remove.addEventListener("click", (e) => {
      e.preventDefault();
      myLibrary.splice(i, 1);
      clearBooks();
      displayBooks();
    });
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = "Pages: " + myLibrary[i].pages;
    read.textContent = "Read: " + myLibrary[i].read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
    card.className = "card";
    document.getElementById("books").appendChild(card);
  }
}

function clearBooks() {
  document.getElementById("books").innerHTML = "";
}

function removeBook(event) {
  event.preventDefault();
  myLibrary.splice(i, 1);
  clearBooks();
  displayBooks();
}

function addBook() {
  document.getElementById("form-popup").style.display = "flex";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  closeForm();
  clearBooks();
  displayBooks();
});

function closeForm() {
  document.getElementById("form-popup").style.display = "none";
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1216, false);
addBookToLibrary("The Silmarillion", "J.R.R. Tolkien", 412, true);
addBookToLibrary("The Children of Hurin", "J.R.R. Tolkien", 352, false);
displayBooks();
