const header = document.querySelector("#header");
const openFormButton = document.querySelector("#open-form-button");
const sidebar = document.querySelector("#sidebar");
const form = document.querySelector("#form");
const cardContainer = document.querySelector("#card-container");
const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		
		let title = document.getElementById('title').value;
		let author = document.getElementById('author').value;
		let pages = document.getElementById('pages').value;
		let status = document.getElementById('status').value;
		
		myLibrary.push(new Book(title, author, pages, status));
		
		cardContainer.style.gridArea = "2 / 1 / 3 / 3";
		
		displayBook();
		resetForm();
	})
};
addBookToLibrary();
console.log(myLibrary);

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
			newCard.style.gridTemplate = "1fr 1fr / 1fr";
			newCard.style.backgroundColor = "#F5EFED";
			newCard.style.height = "150px";
			newCard.style.width = "200px";
			newCard.style.borderRadius = "8px";
			newCard.style.fontSize = "18px";
			newCard.style.fontWeight = "400";
			newCard.style.padding = "15px";
			newCard.innerHTML = `${book.title} by ${book.author} with ${book.pages} pages`;

		
		const statusCheckbox = document.createElement('input');
		statusCheckbox.type = "checkbox";
		statusCheckbox.class = "status-checkbox";
			statusCheckbox.style.justifySelf = "start";
			statusCheckbox.style.alignSelf = "end";
			statusCheckbox.style.gridArea = "3 / 1 / 4 / 2";
		newCard.appendChild(statusCheckbox);

		const statusLabel = document.createElement("p");
		statusLabel.textContent = "Read";
			statusLabel.style.alignSelf = "end";
			statusLabel.style.gridArea = "3 / 1 / 4 / 2";
			statusLabel.style.paddingLeft = "25px";
		newCard.appendChild(statusLabel);

		const removeButton = document.createElement('button');
		removeButton.type = "button";
		removeButton.class = "remove-button";
		removeButton.textContent = "Remove";
			removeButton.style.gridArea = "3 / 1 / 4 / 2";
			removeButton.style.placeSelf = "end";
			removeButton.style.backgroundColor = "#BDBF09";
			removeButton.style.fontSize = "16px";
			removeButton.style.width = "85px";
			removeButton.style.height = "35px";
		newCard.appendChild(removeButton);
		removeButton.addEventListener('click', () => {
			myLibrary.splice([i], 1);
			console.log(myLibrary);
			cardContainer.removeChild(newCard);
		})
	}};


		// const readToggle = document.createElement('button');
		// newCard.appendChild(readToggle);
		// readToggle.style.type=

// //add book button 

function openForm() {
	openFormButton.addEventListener('click', () => {

		openFormButton.style.display = "none";
		sidebar.style.display = "grid";
		cardContainer.style.gridArea = "2/2/3/3";
	})
}
openForm();