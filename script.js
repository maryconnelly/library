
const myLibrary = [];

function Book (title, author, pages, read) {
	this.title = title
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {

	myLibrary.push(new Book('title1', 'author1', 'pages1', 'read1')); 
}

addBookToLibrary();

console.log(myLibrary);