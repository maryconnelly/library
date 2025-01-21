
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

		let titleInput = document.getElementById('titleInput').value;
		let authorInput = document.getElementById('authorInput').value;
		let pagesInput = document.getElementById('pagesInput').value;
		let readInput = document.getElementById('readInput').value;

	const newBook = new Book(titleInput, authorInput, pagesInput, readInput) 
	myLibrary.push(newBook);
	
		const sidebar = document.querySelector("#sidebar");
		sidebar.style.display = "none";

		const openFormButton = document.querySelector("#open-form-button");
		openFormButton.style.display = "block";

		const cardContainer = document.querySelector("#card-container");
		cardContainer.style.gridArea = "2 / 1 / 3 / 3";

	displayBook();

	function resetForm() {
		document.getElementById('form').reset();
		}
	resetForm();

	})
	
};

addBookToLibrary();
console.log(myLibrary);

function displayBook() {




		const cardContainer = document.querySelector('#card-container');
		document.body.appendChild(cardContainer);

		const newCard = document.createElement('div');
		cardContainer.appendChild(newCard);
			newCard.class = "new-card";
			newCard.id = `${Book.id}`;
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
		readLine.style.gridArea = "4 / 1 / 5 / 2"
		
		const readCheckbox = document.createElement('input');
		readCheckbox.type = "checkbox";
		readCheckbox.id = "read-checkbox";
		readLine.appendChild(readCheckbox);

		const readLabel= document.createElement('label');
		readLabel.for = "read-checkbox";
		readLabel.textContent = "Read";
		readLine.appendChild(readLabel);
	

		// const readToggle = document.createElement('button');
		// newCard.appendChild(readToggle);
		// readToggle.style.type = 'checkbox';

		const removeButton = document.createElement('button');
		newCard.appendChild(removeButton);
		removeButton.type = "button";
		removeButton.id = "remove";
		removeButton.textContent = "Remove";
		removeButton.style.gridArea = "4 / 1 / 5 / 2";

		removeButton.addEventListener('click', () => {
			if (Book.id === newCard.id ) {
				const index = myLibrary.indexOf(Book.id);
				delete myLibrary[index];
				cardContainer.removeChild(newCard);
		}})
	}};


function openForm() {
	const header = document.querySelector("#header");
	const openFormButton = document.querySelector("#open-form-button");
	header.appendChild(openFormButton);
	openFormButton.addEventListener('click', () => {

		openFormButton.style.display = "none";
		
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
openForm();