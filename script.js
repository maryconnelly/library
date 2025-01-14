
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

//display book on card
function displayBook() {

	myLibrary.forEach(Book => {

		const cardContainer = document.querySelector('#card-container');
		document.body.appendChild(cardContainer);

		const newCard = document.createElement('div');
		cardContainer.appendChild(newCard);
			newCard.id = "new-card";
			newCard.textContent = `${Book.info}`;

	})
}

displayBook();

//add book button 

function addBookButton() {
	const header = document.querySelector("#header");
	const addBookButton = document.querySelector("#add");
	header.appendChild(addBookButton);
	addBookButton.addEventListener('click', () => {

		addBookButton.style.display = "none";
		
		const cardContainer = document.querySelector('#card-container');
		cardContainer.style.gridArea = "2/2/3/3";
		
		const sidebar = document.createElement('div');
		document.body.appendChild(sidebar);
		sidebar.id = "sidebar";
		

		const form = document.querySelector("form");
		sidebar.appendChild(form);
		form.style.display = "grid";
		form.style.gridTemplate = "1fr 1fr .5fr/ 1fr";
		


		
	


		
		

	})

}

addBookButton();


