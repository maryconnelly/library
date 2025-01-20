
const myLibrary = [];

function Book (title, author, pages, read) {
	this.title = title
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = crypto.randomUUID();
}

function addBookToLibrary() {
	
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		
		let titleInput = document.getElementById('title').value;
		let authorInput = document.getElementById('author').value;
		let pagesInput = document.getElementById('pages').value;
		let readInput = document.getElementById('read').value;
		
		const newBook = new Book(titleInput, authorInput, pagesInput, readInput);
		myLibrary.push(newBook);
		
		const sidebar = document.querySelector("#sidebar");
		sidebar.style.display = "none";
		
		const addBookButton = document.querySelector("#add");
		addBookButton.style.display = "block";
		
		const cardContainer = document.querySelector("#card-container");
		cardContainer.style.gridArea = "2 / 1 / 3 / 3";
		
		displayBook();
		
		function resetForm() {
			document.getElementById('form').reset();
		}
		
		resetForm();
		
	})
	
	console.log(myLibrary);
};

addBookToLibrary();

//display book on card
function displayBook() {

		for (i = 0; i < myLibrary.length; i++ ) {

		const book = myLibrary[i];

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
		titleLine.textContent = `${book.title}`;
		titleLine.style.gridArea = "1 / 1 / 2 / 2";
		titleLine.style.alignContent = "center";

		const authorLine = document.createElement('div');
		newCard.appendChild(authorLine);
		authorLine.textContent = `${book.author}`;
		authorLine.style.gridArea = "2 / 1 / 3 / 2";
		authorLine.style.alignContent = "center";
		

		const pagesLine = document.createElement('div');
		newCard.appendChild(pagesLine);
		pagesLine.textContent = `${book.pages}`;
		pagesLine.style.gridArea = "3 / 1 / 4 / 2";
		pagesLine.style.alignContent = "center";

		const readLine = document.createElement('div');
		newCard.appendChild(readLine);
		readLine.style.gridArea = "4 / 1 / 5 / 2"
		
		const readCheckbox = document.createElement('input');
		readCheckbox.type = "checkbox";
		readCheckbox.id = "read-checkbox";
		readLine.appendChild(readCheckbox);

		const readLabel= document.createElement('label');
		readLabel.for = "read-checkbox";
		readLabel.textContent = "Read";
		readLine.appendChild(readLabel);

		const readCheck = document.createElement('button');
		readCheck.type = "checkbox";
		readLine.appendChild(readCheck);
		


	
		
		
	

		const removeButton = document.createElement('button');
		newCard.appendChild(removeButton);
		removeButton.type = "button";
		removeButton.id = "remove";
		removeButton.textContent = "Remove";
		removeButton.style.gridArea = "4 / 1 / 5 / 2";
		removeButton.addEventListener('click', () => {

		})
	}};

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
		form.style.gridTemplate = " 2fr repeat(2, 1fr) / 1fr";


	})

}

addBookButton();