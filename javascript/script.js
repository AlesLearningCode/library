const myLibrary = [];


const displayBooks = document.querySelector(`.Book`)
const addBook = document.querySelector(`.addbook`)
const newAuthor = document.querySelector(`.author`)
const newTitle = document.querySelector(`.title`)
const newPages = document.querySelector(`.pages`)
const newReads = document.querySelectorAll(`input[name="read"]`)
const dialog = document.querySelector(`.dialog`)
const newBook = document.querySelector(`.newbook`)


function createBook(){
  for(let i = myLibrary.length -1; i < myLibrary.length; i++){
  const displayBook = document.createElement(`div`)
  const deleteBtn = document.createElement(`button`)
  const changeBtn = document.createElement(`button`)
  displayBook.setAttribute("title",`${title}`)
  displayBooks.appendChild(displayBook)
  node = document.createElement(`p`)
  displayBook.appendChild(node)
  node2 = document.createElement(`p`)
  displayBook.appendChild(node2)
  node3 = document.createElement(`p`)
  displayBook.appendChild(node3)
  node4 = document.createElement(`p`)
  node4.setAttribute("title",`${title}`)
  displayBook.appendChild(node4)
  deleteBtn.textContent = `Delete`
  changeBtn.textContent = `Change read status`
  displayBook.appendChild(changeBtn)
  displayBook.appendChild(deleteBtn)
  changeBtn.addEventListener('click', () =>{
    let index = displayBook.getAttribute("title")
    const newIndex = myLibrary.map(object => object.title).indexOf(index);
      if(myLibrary[newIndex].read == `yes`){
        myLibrary[newIndex].read = `no`
        node4 = document.querySelector(`p[title="${myLibrary[newIndex].title}"]`)
        console.log(node4)
        node4.textContent = `Read yet?: no`
      }else{
        node4 = document.querySelector(`p[title="${myLibrary[newIndex].title}"]`)
        myLibrary[newIndex].read = `yes`
        node4.textContent = `Read yet?: yes`
      }
    })
  
  deleteBtn.addEventListener(`click`, ()=>{ 
    let index = displayBook.getAttribute("title")
    const newIndex = myLibrary.map(object => object.title).indexOf(index);
    myLibrary.splice(newIndex, 1)
    displayBooks.removeChild(displayBook)
    console.log(newIndex)
    })
  node.textContent = `Title: ${myLibrary[i].title}`
  node2.textContent = `Author: ${myLibrary[i].author}`
  node3.textContent = `Pages: ${myLibrary[i].pages}`
  node4.textContent = `Read yet?: ${myLibrary[i].read}`    
  }
}




newBook.addEventListener(`click`, () =>{
  dialog.showModal()
})

addBook.addEventListener(`click`, () =>{
  addBookToLibrary()
  createBook()
  newTitle.value = ""
  newAuthor.value = ""
  newPages.value = ""
  dialog.close()
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
  title = newTitle.value
  author = newAuthor.value
  pages = newPages.value
for (const newRead of newReads) {
  if (newRead.checked) {
    read = newRead.value;
    break;
  }
}
  myLibrary.push(new Book(title, author, pages, read))
}





function toggle(){

}


window.onload=function() {
    document.getElementById("myform").onsubmit=function(e) {
      e.preventDefault(); // first statement
      // do something with the form field
    }
  }
for (let books in myLibrary){
  newLibrary = myLibrary[books]
}
console.log(myLibrary)
console.log(displayBook)

