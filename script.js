
const myLibrary = [];

function Book (title, author, pages, read) {
	this.title = title
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {

	myLibrary.push(new Book('Harry Potter', 'JK Rowling', '700 pgs', 'Already read')); 
	myLibrary.push(new Book('Murder in Retrospect', 'Agatha Christie', '300 pgs', 'read'));

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
			newCard.class = "new-card";
			newCard.style.display = "grid";
			newCard.style.gridTemplate = "Repeat(4, 1fr) / 1fr";
			newCard.style.backgroundColor = "#F5EFED";
			newCard.style.height = "150px";
			newCard.style.width = "200px";
			newCard.style.borderRadius = "8px";
			newCard.style.fontSize = "18px";
			newCard.style.fontWeight = "400";
			newCard.style.padding = "15px";
		
		const titleLine = document.createElement('div');
		newCard.appendChild(titleLine);
		titleLine.textContent = `${Book.title}`;
		titleLine.style.gridArea = "1 / 1 / 2 / 2";
		titleLine.style.alignContent = "center";

		const authorLine = document.createElement('div');
		newCard.appendChild(authorLine);
		authorLine.textContent = `${Book.author}`;
		authorLine.style.gridArea = "2 / 1 / 3 / 2";
		authorLine.style.alignContent = "center";
		

		const pagesLine = document.createElement('div');
		newCard.appendChild(pagesLine);
		pagesLine.textContent = `${Book.pages}`;
		pagesLine.style.gridArea = "3 / 1 / 4 / 2";
		pagesLine.style.alignContent = "center";

		const readLine = document.createElement('div');
		newCard.appendChild(readLine);






		const removeButton = document.createElement('button');
		newCard.appendChild(removeButton);
		removeButton.type = "button";
		removeButton.id = "remove";
		removeButton.textContent = "Remove";

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


