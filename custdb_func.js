//create a function that does the following:
const customerdbAdd = ( genre, shelf, fname, lname, address, card, checkout, checkin, database) => {
    database.push(
        {
            genre,
            shelf,
            fname,
            lname,
            address,
            card,
            checkout: (input) => {
                libraryDB.forEach(element => {
                    
                    if (element.title === input || element.isbn === input){
                        return book
                    }
                });
                    
                },
            checkin: (input) => {
                libraryDB.forEach(element => {
                    
                    if (element.title === input || element.isbn === input){
                        return book
                    }
                });    
                }

        }
    )
    return database
}
    //create customer object with the following data
        // Favorite genre(s)
        // An empty bookshelf
        // First name
        // Last name
        // Address
        // Library card number (blank to start)
        // Checkout a book. If it's available, add it to your bookshelf. (empty function)
        // Return a book. It should be removed from your bookshelf.  (empty function)
    //push customer object onto end of array (param)
    



