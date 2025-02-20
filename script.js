const header = document.querySelector("#header");
const openFormButton = document.querySelector("#open-form-button");
const sidebar = document.querySelector("#sidebar");
const form = document.querySelector("#form");
const cardContainer = document.querySelector("#card-container");
const myLibrary = [];

class Book {
	constructor (title, author, pages, status) {
	this.title = title
	this.author = author;
	this.pages = pages;
	this.status = status;
}
	toggleStatus() {this.status = !this.status;};
}

function toggleStatus(index) {
	myLibrary[index].toggleStatus();
	displayBook();
}

function addBookToLibrary() {
	
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		
		let title = document.getElementById('title').value;
		let author = document.getElementById('author').value;
		let pages = document.getElementById('pages').value;
		let status = document.getElementById('status').checked;
		
		myLibrary.push(new Book(title, author, pages, status));
		
		cardContainer.style.gridArea = "2 / 1 / 3 / 3";
		
		displayBook();
		resetForm();
	})
};

addBookToLibrary();
console.log(myLibrary);

function openForm() {
	openFormButton.addEventListener('click', () => {

		openFormButton.style.display = "none";
		sidebar.style.display = "grid";
		cardContainer.style.gridArea = "2/2/3/3";
	})
}
openForm();

function resetForm() {
	document.getElementById('form').reset();
	openFormButton.style.display = "block";
}

function displayBook() {
	
	cardContainer.innerHTML = "";

	for (let i=0;i<myLibrary.length; i++) {
		let book = myLibrary[i];

		const newCard = document.createElement('div');
		cardContainer.appendChild(newCard);
			newCard.class = "new-card";
			newCard.style.display = "grid";
			newCard.style.gridTemplate = "repeat(4, 1fr) / 1fr";
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
		pagesLine.textContent = `${book.pages} pages`;
		pagesLine.style.gridArea = "3 / 1 / 4 / 2";
		pagesLine.style.alignContent = "center";

		const statusButton = document.createElement('button');
		statusButton.type = "button";
		statusButton.class = "status-button";
		statusButton.style.gridArea = "4 / 1 / 5 / 2"
		statusButton.style.justifySelf = "start";
		statusButton.style.fontSize = "16px";
		statusButton.style.width = "100px";
		statusButton.style.height = "35px";
		if (book.status === true) {
			statusButton.textContent = "Read";
			statusButton.style.backgroundColor = '#BDBF09'
		} else {
			statusButton.textContent = "Not Read"
			statusButton.style.backgroundColor = "#D96C06";
		}
		newCard.appendChild(statusButton);
		statusButton.addEventListener('click', () => toggleStatus([i]));
		
	
		const removeButton = document.createElement('button');
		removeButton.type = "button";
		removeButton.class = "remove-button";
		removeButton.textContent = "Remove";
			removeButton.style.gridArea = "4 / 1 / 6 / 2";
			removeButton.style.placeSelf = "end";
			removeButton.style.backgroundColor = "#D96C06";
			removeButton.style.fontSize = "16px";
			removeButton.style.width = "85px";
			removeButton.style.height = "35px";
		newCard.appendChild(removeButton);
		removeButton.addEventListener('click', () => {
			myLibrary.splice([i], 1);
			console.log(myLibrary);
			cardContainer.removeChild(newCard);
		})

	}}