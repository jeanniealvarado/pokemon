
let pokeCard = document.getElementById('pokemon')
const pokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => res.json())
        .then(data => {
            pokeCard.innerText = JSON.stringify(data.name)
            const experience = document.createElement('p')
            experience.innerText = 'experiencia ' + JSON.stringify(data.base_experience)
            pokeCard.appendChild(experience)
            const pokeImg = document.createElement('img');
            pokeImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            pokeCard.appendChild(pokeImg)
        })

}
pokemon()