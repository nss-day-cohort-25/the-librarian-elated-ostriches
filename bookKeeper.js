const a= {title: "a",
author: "a",
genre: "a",
isbn: "a",
checkout: false,
dueDate: ''}
const mockLibrary = [
    a 
]

const mockCustomerShelf = []

//checkout

function checkOut (libraryDB, bookInfo, userBookShelf) {
    
    for(let i = 0; i < libraryDB.length; i++) {
        if (bookInfo === libraryDB[i]) {
            if (libraryDB[i].checkout === false) {
                libraryDB[i].checkout = true
                userBookShelf.push(libraryDB[i])
                bookInfo.dueDate = Date.now + 604800
            }
        }
    }
}

//checkin

function checkIn (bookInfo, userBookShelf, libraryDB) {
    userBookShelf.forEach(element => {
        for(let i = userBookShelf.length - 1; i >= 0; i--) {
            if(userBookShelf[i].isbn === bookInfo.isbn) {
               userBookShelf.splice(i, 1);
            }
        }
        
    });
    for (let index = 0; index < libraryDB.length; index++) {
        if (libraryDB[index] === bookInfo) {
            libraryDB[index].checkout = false
            if (libraryDB[index].dueDate < Date.now) {
                libraryDB[index].dueDate = ""
                return("You owe a $5 late fee.")
            }
            else {
                libraryDB[index].dueDate = ""
            }
        }

    }
}
//checkgenre

function checkGenre (bookGenreString, libraryDB) {
    for (let index = 0; index < libraryDB.length; index++) {
        if (libraryDB[index].genre ===  bookGenreString) {
            let results = []
            results.push(libraryDB[index])
            return(results)
        }

        
    }
}

//user register 
const registerUser = function (user, dbOfUsers) { 
    if (user.card === "") {
        if (dbOfUsers.length === 0) {
            user.card = 100000
        }
        else {
            user.card = dbOfUsers[dbOfUsers.length].card + 1
        }
    }
}

console.log(mockLibrary)
console.log(mockCustomerShelf)
checkOut(mockLibrary, a, mockCustomerShelf)
console.log(mockCustomerShelf)
checkIn(a, mockCustomerShelf, mockLibrary)
console.log(mockCustomerShelf)
console.log(checkGenre("a", mockLibrary))
