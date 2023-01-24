let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', height: 60, types: ['Grass', 'Poison']},
        { name: 'Ivysaur', height: 91, types: ['Grass', 'Poison']},
        { name: 'Venusaur', height: 182, types: ['Grass', 'Poison']},
        { name: 'Charmander', height: 61, types: ['Fire']},
        { name: 'Charmeleon', height: 91, types: ['Fire']},
        { name: 'Charizard', height: 152, types: ['Fire', 'Flying']},
        { name: 'Squirtle', height: 30, types: ['Water']},
        { name: 'Wartortle', height: 91, types: ['Water']},
        { name: 'Blastoise', height: 152, types: ['Water']},
        { name: 'Caterpie', height: 30, types: ['Bug']},
        { name: 'Metapod', height: 61, types: ['Bug']},
        { name: 'Butterfree', height: 91, types: ['Bug', 'Flying']},
        { name: 'Weedle', height: 30, types: ['Bug', 'Poison']},
        { name: 'Kakuna', height: 61, types: ['Bug', 'Poison']},
        { name: 'Beedrill', height: 91, types: ['Bug', 'Poison']},
        { name: 'Pidgey', height: 30, types: ['Normal', 'Flying']},
        { name: 'Pidgeotto', height: 91, types: ['Normal', 'Flying']},
        { name: 'Pidgeot', height: 122, types: ['Normal', 'Flying']},
        { name: 'Rattata', height: 30, types: ['Normal']},
        { name: 'Raticate', height: 61, types: ['Normal']},
        { name: 'Spearow', height: 30, types: ['Normal', 'Flying']},
        { name: 'Fearow', height: 91, types: ['Normal', 'Flying']},
        { name: 'Ekans', height: 182, types: ['Poison']},
        { name: 'Arbok', height: 335, types: ['Poison']},
        { name: 'Pikachu', height: 30, types: ['Electric']},
        { name: 'Raichu', height: 61, types: ['Electric']},
        { name: 'Sandshrew', height: 61, types: ['Ground']},
        { name: 'Sandslash', height: 91, types: ['Ground']},
        { name: 'Nidoran♀', height: 30, types: ['Poison']},
        { name: 'Nidorina', height: 61, types: ['Poison']},
        { name: 'Nidoqueen', height: 122, types: ['Poison', 'Ground']},
        { name: 'Nidoran♂', height: 30, types: ['Poison']},
        { name: 'Nidorino', height: 61, types: ['Poison']},
        { name: 'Nidoking', height: 122, types: ['Poison', 'Ground']},
        { name: 'Clefairy', height: 61, types: ['Fairy']},
        { name: 'Clefable', height: 122, types: ['Fairy']},
        { name: 'Vulpix', height: 61, types: ['Fire']},
        { name: 'Ninetales', height: 91, types: ['Fire']},
        { name: 'Jigglypuff', height: 30, types: ['Normal', 'Fairy']},
        { name: 'Wigglytuff', height: 91, types: ['Normal', 'Fairy']},
        { name: 'Zubat', height: 61, types: ['Poison', 'Flying']},
        { name: 'Golbat', height: 152, types: ['Poison', 'Flying']},
        { name: 'Oddish', height: 30, types: ['Grass', 'Poison']},
        { name: 'Gloom', height: 61, types: ['Grass', 'Poison']},
        { name: 'Vileplume', height: 91, types: ['Grass', 'Poison']},
        { name: 'Paras', height: 30, types: ['Bug', 'Grass']},
        { name: 'Parasect', height: 91, types: ['Bug', 'Grass']},
        { name: 'Venonat', height: 91, types: ['Bug', 'Poison']},
        { name: 'Venomoth', height: 122, types: ['Bug', 'Poison']},
        { name: 'Diglett', height: 0, types: ['Ground']},
        { name: 'Dugtrio', height: 61, types: ['Ground']},
        { name: 'Meowth', height: 30, types: ['Normal']},
        { name: 'Persian', height: 91, types: ['Normal']},
        { name: 'Psyduck', height: 61, types: ['Water']},
        { name: 'Golduck', height: 152, types: ['Water']},
        { name: 'Mankey', height: 30, types: ['Fighting']},
        { name: 'Primeape', height: 91, types: ['Fighting']},
        { name: 'Growlithe', height: 61, types: ['Fire']},
        { name: 'Arcanine', height: 183, types: ['Fire']},
        { name: 'Poliwag', height: 61, types: ['Water']},
        { name: 'Poliwhirl', height: 91, types: ['Water']},
        { name: 'Poliwrath', height: 122, types: ['Water', 'Fighting']},
        { name: 'Abra', height: 61, types: ['Psychic']},
        { name: 'Kadabra', height: 122, types: ['Psychic']},
        { name: 'Alakazam', height: 122, types: ['Psychic']},
        { name: 'Machop', height: 61, types: ['Fighting']},
        { name: 'Machoke', height: 122, types: ['Fighting']},
        { name: 'Machamp', height: 152, types: ['Fighting']},
        { name: 'Bellsprout', height: 61, types: ['Grass', 'Poison']},
        { name: 'Weepinbel', height: 91, types: ['Grass', 'Poison']},
        { name: 'Victreebel', height: 152, types: ['Grass', 'Poison']},
        { name: 'Tentacool', height: 61, types: ['Water', 'Poison']},
        { name: 'Tentacruel', height: 152, types: ['Water', 'Poison']},
        { name: 'Geodude', height: 30, types: ['Rock', 'Ground']},
        { name: 'Graveler', height: 91, types: ['Rock', 'Ground']},
        { name: 'Golem', height: 122, types: ['Rock', 'Ground']},
        { name: 'Ponyta', height: 91, types: ['Fire']},
        { name: 'Rapidash', height: 152, types: ['Fire']},
        { name: 'Slowpoke', height: 91, types: ['Water', 'Psychic']},
        { name: 'Slowbro', height: 152, types: ['Water', 'Psychic']},
        { name: 'Magnemite', height: 30, types: ['Electric', 'Steel']},
        { name: 'Magneton', height: 91, types: ['Electric', 'Steel']},
        { name: 'Farfetch\’d', height: 61, types: ['Normal', 'Flying']},
        { name: 'Doduo', height: 122, types: ['Normal', 'Flying']},
        { name: 'Dodrio', height: 152, types: ['Normal', 'Flying']},
        { name: 'Seel', height: 91, types: ['Water']},
        { name: 'Dewgong', height: 152, types: ['Water', 'Ice']},
        { name: 'Grimer', height: 61, types: ['Poison']},
        { name: 'Muk', height: 91, types: ['Poison']},
        { name: 'Shellder', height: 30, types: ['Water']},
        { name: 'Cloyster', height: 122, types: ['Water', 'Ice']},
        { name: 'Gastly', height: 122, types: ['Ghost', 'Poison']},
        { name: 'Haunter', height: 152, types: ['Ghost', 'Poison']},
        { name: 'Gengar', height: 122, types: ['Ghost', 'Poison']},
        { name: 'Onix', height: 853, types: ['Rock', 'Ground']},
        { name: 'Drowzee', height: 91, types: ['Psychic']},
        { name: 'Hypno', height: 152, types: ['Psychic']},
        { name: 'Krabby', height: 30, types: ['Water']},
        { name: 'Kingler', height: 122, types: ['Water']},
        { name: 'Voltorb', height: 30, types: ['Electric']},
        { name: 'Electrode', height: 91, types: ['Electric']},
        { name: 'Exeggcute', height: 30, types: ['Grass', 'Psychic']},
        { name: 'Exeggutor', height: 183, types: ['Grass', 'Psychic']},
        { name: 'Cubone', height: 30, types: ['Ground']},
        { name: 'Marowak', height: 91, types: ['Ground']},
        { name: 'Hitmonlee', height: 122, types: ['Fighting']},
        { name: 'Hitmonchan', height: 122, types: ['Fighting']},
        { name: 'Lickitung', height: 91, types: ['Normal']},
        { name: 'Koffing', height: 61, types: ['Poison']},
        { name: 'Weezing', height: 91, types: ['Poison']},
        { name: 'Rhyhorn', height: 91, types: ['Ground', 'Rock']},
        { name: 'Rhydon', height: 183, types: ['Ground', 'Rock']},
        { name: 'Chansey', height: 91, types: ['Normal']},
        { name: 'Tangela', height: 91, types: ['Grass']},
        { name: 'Kangaskhan', height: 213, types: ['Normal']},
        { name: 'Horsea', height: 30, types: ['Water']},
        { name: 'Seadra', height: 91, types: ['Water']},
        { name: 'Goldeen', height: 61, types: ['Water']},
        { name: 'Seaking', height: 122, types: ['Water']},
        { name: 'Staryu', height: 61, types: ['Water']},
        { name: 'Starmie', height: 91, types: ['Water', 'Psychic']},
        { name: 'Mr. Mime', height: 122, types: ['Psychic', 'Fairy']},
        { name: 'Scyther', height: 122, types: ['Bug', 'Flying']},
        { name: 'Jynx', height: 122, types: ['Water', 'Psychic']},
        { name: 'Electabuzz', height: 91, types: ['Electric']},
        { name: 'Magmar', height: 122, types: ['Fire']},
        { name: 'Pinsir', height: 122, types: ['Bug']},
        { name: 'Tauros', height: 122, types: ['Normal']},
        { name: 'Magikarp', height: 61, types: ['Water']},
        { name: 'Gyarados', height: 640, types: ['Water', 'Flying']},
        { name: 'Lapras', height: 244, types: ['Water', 'Ice']},
        { name: 'Ditto', height: 30, types: ['Normal']},
        { name: 'Eevee', height: 30, types: ['Normal']},
        { name: 'Vaporeon', height: 91, types: ['Water']},
        { name: 'Jolteon', height: 61, types: ['Electric']},
        { name: 'Flareon', height: 61, types: ['Fire']},
        { name: 'Porygon', height: 61, types: ['Normal']},
        { name: 'Omanyte', height: 30, types: ['Rock', 'Water']},
        { name: 'Omastar', height: 91, types: ['Rock', 'Water']},
        { name: 'Kabuto', height: 30, types: ['Rock', 'Water']},
        { name: 'Kabutops', height: 122, types: ['Rock', 'Water']},
        { name: 'Aerodactyl', height: 152, types: ['Rock', 'Flying']},
        { name: 'Snorlax', height: 183, types: ['Normal']},
        { name: 'Articuno', height: 152, types: ['Ice', 'Flying']},
        { name: 'Zapdos', height: 152, types: ['Electric', 'Flying']},
        { name: 'Moltres', height: 183, types: ['Fire', 'Flying']},
        { name: 'Dratini', height: 152, types: ['Dragon']},
        { name: 'Dragonair', height: 396, types: ['Dragon']},
        { name: 'Dragonite', height: 213, types: ['Dragon', 'Flying']},
        { name: 'Mewtwo', height: 183, types: ['Psychic']},
        { name: 'Mew', height: 30, types: ['Psychic']},
    ];

 
/* 
Note: 
    Below, created an add function with a condition, that checks whether the input is an object, and if all of the object keys are correct. 
    If so, object is pushed to the list. Otherwise, an error message triggers in the console.
*/

    function add(addPokemon) {
        const keys = Object.keys(addPokemon);
        if (
            typeof pokemon === 'object' && 
            keys.includes('name') && 
            keys.includes('height') && 
            keys.includes('types'))
        pokemonList.push(addPokemon);
        } else {
            console.log('Not valid. Please make sure that parameter is an object, and keys include name, height, and types.')
        }
    
    function getAll() {
        return pokemonList;
    }
    
    return {
        add,
        getAll
    };
})();


/* 
Note: 
    Below, created a forEach loop that iterates over each item in pokemonList, which includes a conditional.
    Updated code to call pokemonRepository.getAll(); and be able to access and display array contained by IIFE.
*/

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height <=30){
        document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + " - Pretty tiny!" + "<br>");
    } else if (pokemon.height >152 && pokemon.height <853) {
        document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + " - This is a big one" + "<br>");
    } else if (pokemon.height >=853) {
        document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + " - Wow, that\’s big!" + "<br>");
    } else {
        document.write(pokemon.name + " " + "(height: " + pokemon.height + "cm" + ")" + "<br>");
    }
});