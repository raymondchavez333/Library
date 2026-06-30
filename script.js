const myLibrary = [];

function Book (title, author, pages, read){

    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    if(read === true){
        this.read = "read";
    }

    if(read === false){
        this.read = "not read yet";
    }

    this.id = crypto.randomUUID();

    this.info = function(){
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}, ${this.id}`);
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}
const theHobbit = new Book("The Hobbit", "J.R.R.", 295, false);
console.log(theHobbit.info());
addBookToLibrary(theHobbit);
console.log(myLibrary);
const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, true);
addBookToLibrary(atomicHabbits);
console.log(myLibrary);