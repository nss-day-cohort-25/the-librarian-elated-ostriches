//checkout

function checkOut (libraryDB, bookInfo, user, dbOfUsers) {
    
    for(let i = 0; i < libraryDB.length; i++) {
        if (bookInfo === libraryDB[i]) {
            if (libraryDB[i].checkout === false) {
                libraryDB[i].checkout = true
                user.push(libraryDB[i])
                bookInfo.dueDate = Date.now + 604800
                if (user.card === "") {
                    if (dbOfUsers.length === 0) {
                        user.card = 100000
                    }
                    else {
                        user.card = dbOfUsers[dbOfUsers.length].card + 1
                    }
            }
        }
    }
}

//checkin

function checkIn (bookInfo, user, libraryDB) {
    user.shelf.forEach(element => {
        for(let i = user.shelf.length - 1; i >= 0; i--) {
            if(user.shelf[i].isbn === bookInfo.isbn) {
               user.shelf.splice(i, 1);
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
        if (libraryDB[index].genre ===  bookGenreString && libraryDB[index].checkout === false) {
            let results = []
            results.push(libraryDB[index])
            return(results)
        }

        
    }
}






