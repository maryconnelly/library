
const myLibrary = [];

function Book (title, author, pages, read) {
	this.title = title
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = `${this.title} by ${this.author} with ${pages}. ${read}`;
	}

function addBookToLibrary() {

	myLibrary.push(new Book('title1', 'author1', 'pages1', 'read1')); 
}

addBookToLibrary();

console.log(myLibrary);

function displayBook() {

	myLibrary.forEach(Book => {

		const newCard = document.createElement('div');
			newCard.textContent = `${Book.info}`;
			newCard.style.border = "black solid 1px";
			newCard.style.height = "100px";
			newCard.style.width = "150px";
			newCard.style.fontFamily = "'Courier New', Courier, monospace";
			newCard.style.padding = "20px";
			document.body.appendChild(newCard);

	})
}

displayBook();

