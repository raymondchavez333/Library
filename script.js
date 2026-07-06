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
        this.read = "not read";
    }

    this.id = crypto.randomUUID();

    this.info = function(){
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}, ${this.id}`);
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}
// const theHobbit = new Book("The Hobbit", "J.R.R.", 295, false);
// console.log(theHobbit.info());
// addBookToLibrary(theHobbit);
// console.log(myLibrary);
// const atomicHabbits = new Book("Atomic Habits", "James Clear", 320, true);
// addBookToLibrary(atomicHabbits);
// console.log(myLibrary);
// const subtleArt = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 224, true);
// addBookToLibrary(subtleArt);
// console.log(myLibrary);
// const howToWinFriends = new Book("How to Win Friends and Influence People", "Dale Carnegie", 290, true);
// addBookToLibrary(howToWinFriends);
// console.log(myLibrary);
// const deepWork = new Book("Deep Work", "Cal Newport", 300, true);
// addBookToLibrary(deepWork);
// console.log(myLibrary);

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const form = document.querySelector("form");
const bot = document.querySelector(".bottom");
bot.setAttribute("style", "background-color: orange;");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// favDialog.addEventListener("close", (e) => {

// });


confirmBtn.addEventListener("click", (event) => {
//   let book = new Book(title, author, pages, )
  const data = new FormData(form);
  let read = true;
  for (const [key, value] of data) {
    // console.log(`${entry[0]}`);
    if(value === "no") {
        read = false;
    }
  }

  const book = new Book(title.value, author.value, pages.value, read);
  addBookToLibrary(book);
  console.log(myLibrary);
  
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 180px; height: 250px; border-color: black; display: grid; grid-template-rows: 80px 80px 35px 35px");
    let titleInfo = document.createElement("div");
    titleInfo.setAttribute("class", "title");
    titleInfo.textContent = `${book.title}`;
    card.appendChild(titleInfo);
    let authorInfo = document.createElement("div");
    authorInfo.setAttribute("class", "author");
    authorInfo.textContent = `${book.author}`;
    card.appendChild(authorInfo);
    let pagesInfo = document.createElement("div");
    pagesInfo.setAttribute("class", "pages");
    pagesInfo.textContent = `${book.pages}`;
    card.appendChild(pagesInfo);
    let readInfo = document.createElement("div");
    readInfo.setAttribute("class", "read");
    readInfo.textContent = `${book.read}`;
    card.appendChild(readInfo);
    bot.appendChild(card);
   
  event.preventDefault(); 
  favDialog.close(); 
});




