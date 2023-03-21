const pokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((res) => Response.json(res))
        .then((json => (console.log(json))))

}
pokemon()