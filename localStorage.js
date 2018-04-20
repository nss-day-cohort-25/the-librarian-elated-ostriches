function addLocalStorage (infoToStore, keyToStore) {
    const stringInfo = JSON.stringify(infoToStore)
    localStorage.setItem(keyToStore, stringInfo)
}

function getLocalStorage(infoToGet) {
   const existingInfo= []
   if (localStorage.getItem(infoToGet)) {
        existingInfo = localStorage.getItem(infoToGet)
        existingInfo = JSON.parse(existingInfo)
    }
   
   return existingInfo
}