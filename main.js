const getResidentsButton = document.querySelector(`#get-residents-button`)
const axios = require('axios')
function handleClick() {
    axios
    .get(`http://swapi.dev/api/planets/2/`)
    .then((response) => {
        const residents = response.data.residents
    })
    .catch((error) => {
        console.log(`Error`, error)
    })
    console.log("Button clicked")
}
residents.forEach((residentURL) => {
    axios
    .get(residentURL)
    .then((response) => {
        const residentName = response.data.name
    })
    .catch((error) => {
console.error(`Error`, error)
    })
})
const h2 = document.createElement(`h2`)
h2.textContent = residentName
document.body.appendChild(h2)
getResidentsButton.addEventListener("click", handleClick)