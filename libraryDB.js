const libraryFunction = (libraryDB, title, author, genre, isbn) => {

 const book =  {
        title,
        author,
        genre,
        isbn,
        checkOut: false,
        dueDate: ""
    }
    
 libraryDB.push(book)
 
 return libraryDB
}