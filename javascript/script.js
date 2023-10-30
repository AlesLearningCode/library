const displayBooks = document.querySelector(`.Book`)
const newBook = document.querySelector(`button`)
const myLibrary = [];
myLibrary.push(new Book(`The Hobbit`, `J.R.R. Tolkien`, 295, `not read yet`))
myLibrary.push(new Book(`The Hobbit`, `J.R.R. Tolk`, 295, `not read yet`))

newBook.addEventListener(`click`, () =>{
  addBookToLibrary()
  displayBook()
  console.log(myLibrary)
})

function Book(title,author,pages,read){
this.title = title
this.author = author
this.pages = pages
this.read = read
this.info = function(){
  console.log(`${title} ny ${author}, ${pages} pages, ${read}`)
}
}



function addBookToLibrary(){
  title = prompt(`What is the book title`)
  author = prompt(`What is the books author`)
  pages = prompt(`How many pages does book have`)
  read = prompt(`Have you read the book?`)
  myLibrary.push(new Book(title, author, pages, read))
}

displayBook()
function displayBook(){
for(let books in myLibrary){
  let displayBook = document.createElement(`div`)
  displayBooks.appendChild(displayBook)
  node = document.createElement(`p`)
  displayBook.appendChild(node)
  node2 = document.createElement(`p`)
  displayBook.appendChild(node2)
  node3 = document.createElement(`p`)
  displayBook.appendChild(node3)
  node4 = document.createElement(`p`)
  displayBook.appendChild(node4)
  node.textContent = `Title: ${myLibrary[books].title}`
  node2.textContent = `Author: ${myLibrary[books].author}`
  node3.textContent = `Pages: ${myLibrary[books].pages}`
  node4.textContent = `Read yet?: ${myLibrary[books].read}`
  allbooks = [myLibrary]
  delete myLibrary[books]
}
}



