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
// console.log(theHobbit.info());
addBookToLibrary(theHobbit);
// console.log(myLibrary);
const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, true);
addBookToLibrary(atomicHabbits);
// console.log(myLibrary);
const subtleArt = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, true);
addBookToLibrary(subtleArt);
// console.log(myLibrary);
const howToWinFriends = new Book("How to Win Friends and Influence People", "Dale Carnegie", 290, true);
addBookToLibrary(howToWinFriends);
// console.log(myLibrary);
const deepWork = new Book("Deep Work", "Cal Newport", 300, true);
addBookToLibrary(deepWork);
console.log(myLibrary);

const bot = document.querySelector(".bottom");
bot.setAttribute("style", "background-color: orange;");

myLibrary.forEach( (object) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 180px; height: 250px; border-color: black; display: grid; grid-template-rows: 80px 80px 35px 35px");
    let title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = `${object.title}`;
    card.appendChild(title);
    let author = document.createElement("div");
    author.setAttribute("class", "author");
    author.textContent = `${object.author}`;
    card.appendChild(author);
    bot.appendChild(card);
});
