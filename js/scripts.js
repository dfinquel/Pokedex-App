let pokemonRepository = (function () {
    let pokemonList = [];
    
    /*Below, determined API url where data will be fetched from.*/
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1271';
 
/* 
    Below, created an add function with a condition, that checks whether the input is an object, and if all of the object keys are correct. 
    If so, object is pushed to the list. Otherwise, an error message triggers in the console.
*/

    function add(pokemon) {
        const keys = Object.keys(pokemon);
        if (
            typeof pokemon === 'object' && 
            keys.includes('name') && 
            keys.includes('detailsUrl') ) {
        pokemonList.push(pokemon);
        } else {
            console.log('Not valid. Please make sure that parameter is an object, and keys include name, height, and types.')
        }
    }
    
    function getAll() {
        return pokemonList;
    }
    
    function addListItem(pokemon) {

        let list = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');
        listItem.classList.add('group-list-item');

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-item', 'btn-lg', 'btn-primary');
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#modal-container");
        
        /*Below, button is appended to listItem(it becomes its child).*/
        listItem.appendChild(button);

        /*Below, listItem is appended to list(it becomes its child).*/
        list.appendChild(listItem);

        /*Below, added event listener to button, that shows details when the button is clicked.*/
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
    }

/*
    Below, added a loadList function to fetch data from the API.
    It will then add each Pokémon in the fetched data to pokemonList with the add function above.
    */

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    /*Below, added a loadDetails function to load the detailed data for a given pokemon.*/

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            /*Below, added the details to the item.*/
            item.imageUrl = details.sprites.other["official-artwork"].front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
      }

    //const movies = await axios("http://david.com/getmovies");
    // or
    /*   axios("http://david.com/getmovies")
    .then(movies => { // callback fn
        //logic here
    })
    .catch(e => console.log(e)) */

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    return {
        add,
        getAll,
        addListItem,
        showDetails,
        loadList,
        loadDetails
    }
})();


/*Below, call loadList function from inside the IIFE, in order to load the data.*/

pokemonRepository.loadList().then(function() {

    /* 
        Below, created a forEach loop that iterates over each item in pokemonList, which includes a conditional.
        Updated code to call pokemonRepository.getAll(); and be able to access and display array contained by IIFE.
    */

    pokemonRepository.getAll().forEach(function(pokemon) {

        pokemonRepository.addListItem(pokemon);

        /*Old loop block with conditional. Commented out and replaced by code above.

        if (pokemon.height <=30){
            document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + " - Pretty tiny!" + "<br>");
        } else if (pokemon.height >152 && pokemon.height <853) {
            document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + " - This is a big one" + "<br>");
        } else if (pokemon.height >=853) {
            document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + " - Wow, that\’s big!" + "<br>");
        } else {
            document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + "<br>");   
        }*/
    });
});