
const myLibrary = [];

//this creates new books
function Book (title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}


// this pushes new books to my library array
function addBookToLibrary() {
	



}	


/*
function displayBooks() {

	myLibrary.forEach(book => {

		//make a new library book card
		const bookCard = document.createElement('div');
		bookCard.class = "book-card";
		const libraryCardContainer = document.querySelector('#library-card-container');
		libraryCardContainer.appendChild(bookCard);		

		bookCard.appendChild(book.info);

	})


}

function addBookButton() {

	const addButton = document.querySelector("#add");
	addButton.addEventListener('click', function () {
			
		const formContainer = document.querySelector("#form-container");
			formContainer.style.display = "grid";

	
			

	})

}
*/