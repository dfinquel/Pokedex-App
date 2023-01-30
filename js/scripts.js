let pokemonRepository = (function () {
    let pokemonList = [];
    
    /*Below, determined API url where data will be fetched from.*/
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
 
/* 
    Below, created an add function with a condition, that checks whether the input is an object, and if all of the object keys are correct. 
    If so, object is pushed to the list. Otherwise, an error message triggers in the console.
*/

    function add(pokemon) {
        const keys = Object.keys(pokemon);
        if (
            typeof pokemon === 'object' 
            /*&& 
            keys.includes('name') && 
            keys.includes('height') && 
            keys.includes('types')*/
            ) {
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

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-item');

        /*Below, added event listener to button, that shows details when the button is clicked.*/
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });

        /*Below, button is appended to listItem(it becomes its child).*/
        listItem.appendChild(button);

        /*Below, listItem is appended to list(it becomes its child).*/
        list.appendChild(listItem);
    }

    function showDetails(item) {
        loadDetails(item).then(function () {
            
            /*Set DOM's modalContainer to be equal to first element in document with id "modal-container'.*/
            let modalContainer = document.querySelector ('#modal-container');

            modalContainer.innerHTML = '';

            /*Set DOM's modal to create a div element with class "modal".*/
            let modal = document.createElement('div');
            modal.classList.add ('modal');

            /*Set DOM's sprite to create an img element with class "sprite", and assigned img source to it.*/
            let sprite = document.createElement('img');
            sprite.classList.add ('sprite');
            sprite.src = item.imageUrl;

            /*Set DOM's closeButtonElement to create a button element with class "modal-close", 
            and added event listener to hide modal when user clicks button.*/
            let closeButtonElement = document.createElement ('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'X';
            closeButtonElement.addEventListener ('click', hideModal)

            /*Set DOM's titleElement to create a heading element with the pokemon's name as its inner text.*/
            let titleElement = document.createElement ('h1');
            titleElement.innerText =  (item.name);

            /*Set DOM's contentElement to create a paragraph element with the pokemon's height and types data as its inner text.*/
            let contentElement = document.createElement ('p');
            contentElement.innerText =('Height: ' + item.height + '<br>' + '<br>' + 'Types: ' + item.types);

            /*Set closeButtonElement as a child of modal.*/
            modal.appendChild (closeButtonElement);
            /*Set titleElement as a child of modal.*/
            modal.appendChild (titleElement);
            /*Set contentElement as a child of modal.*/
            modal.appendChild (contentElement);
            /*Set sprite as a child of modal.*/
            modal.appendChild (sprite);
            /*Set modal as a child of modalContainer.*/
            modalContainer.appendChild (modal);

            /*Add "is-visible" class to modalContainer.*/
            modalContainer.classList.add('is-visible');

            /*Below, added hideModal function, which removes the "is-visible" class from modalContainer.*/
            function hideModal () {
                modalContainer.classList.remove ('is-visible');
            }

            /*Below, added event listener to window, so when user presses the ESC key
            and the modalContainer's class is "is-visible", the modal gets hidden.*/
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
                  hideModal();
                }
            });

            /*Below, added event listener to modalContainer, so when user clicks within 
            the modalContainer but outside the modal itself, the modal gets hidden.*/
            modalContainer.addEventListener('click', (e) => {
                let target = e.target;
                if (target === modalContainer) {
                    hideModal();
                }
            });
        });
    }

    /*Below, added a loadList function to fetch data from the API.
    It will then add each Pokémon in the fetched data to pokemonList with the add function above.*/

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
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
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