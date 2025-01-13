
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
			cardContainer.style.display = "grid";
			cardContainer.style.gridArea = "2 / 2 / 3 / 3";
			cardContainer.style.border = "solid black 1px";
			cardContainer.style.height = "600px";
		document.body.appendChild(cardContainer);

		const newCard = document.createElement('div');
			newCard.textContent = `${Book.info}`;
			newCard.style.border = "black solid 1px";
			newCard.style.height = "100px";
			newCard.style.width = "150px";
			newCard.style.fontFamily = "'Courier New', Courier, monospace";
			newCard.style.padding = "20px";
			cardContainer.appendChild(newCard);

	})
}

displayBook();

//add book button 

function addBookButton() {

	const addBookButton = document.querySelector("#add");
	document.body.appendChild(addBookButton);
	addBookButton.addEventListener('click', () => {
		
		const sidebar = document.createElement('div');
		document.body.appendChild(sidebar);
		sidebar.id = "sidebar";
		sidebar.style.display = "grid";
		sidebar.style.gridArea = "2 / 1 / 3 / 2";
		

		const form = document.querySelector("form");
		form.style.display = "grid";
		form.style.border = "solid black 1px";
		form.style.padding = "50px";
		sidebar.appendChild(form);
		

	})

}

addBookButton();


