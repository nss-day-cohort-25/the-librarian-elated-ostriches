
function addToDom (string) {
const bodySelector = document.querySelector("body")
 const section = document.createElement('div')
                 section.classList = "card"

const pTag = document.createElement('p')
             pTag.classList = "p-card"
             pTag.textContent = string
             section.appendChild(pTag)   
             bodySelector.appendChild(section)
                 
}


