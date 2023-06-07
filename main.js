const residentsBtn = document.querySelector(`#getResidents`)
const mainContainer =document.querySelector(`main`)
const residentsContainer = document.querySelector(`#residentsContainer`)

const btnEvent = (evt) => {
    axios.get(`https://swapi.dev/api/planets?search=Alderaan`)
    .then(response => {
        let planet = response.data.results
        let people = planet[0].residents

        residentsContainer.innerHTML = ``

        for(let i = 0; i < people.length; i++) {
            axios.get(people[i])
                .then(response => {

                    let header = document.createElement(`h2`)
                    header.textContent = response.data.name
                    residentsContainer.appendChild(header)
                })
                .catch(err => console.log(err))
        }

    })
    .catch(err => console.log(err))
}

residentsBtn.addEventListener(`click`, btnEvent)