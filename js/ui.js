function showModal(pokemon) {

    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');

    let pokemonSprite = document.createElement('img');
        pokemonSprite.classList.add ('sprite');
        pokemonSprite.src = pokemon.imageUrl;
    
    let pokemonHeight = document.createElement('p');
        pokemonHeight.innerText =('Height: ' + (pokemon.height * 10) + 'cm.' +'\n');

    /*Below, added a pokemonTypes variable, which creates a <p> element. 
    Then, the constant "types" is set to retrieve the type names from the types object, and join them with ", ". 
    Finally, the inner text of the variable is set to display "Types: " followed by the types const.*/
    let pokemonTypes = document.createElement('p');
    const types = pokemon.types.map((item) => item.type.name).join(", ");
    pokemonTypes.innerText = 'Types: ' + types;

    /*Below, set innerHTML of Title and Body to be strings.*/
    modalTitle.innerHTML = "";
    modalBody.innerHTML = "";

    modalTitle.append(pokemon.name);
    modalBody.append(pokemonSprite);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonTypes);
}