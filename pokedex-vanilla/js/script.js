let isShiny = false;
let searchPokemon = 1;
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");
const buttonShiny = document.querySelector(".btn-shiny");
const pokemonName = document.querySelector(".pokemon__name"); // -----
const pokemonImage = document.querySelector(".pokemon__image"); // -----
const pokemonNumber = document.querySelector(".pokemon__number"); // ------>  Usando o querySelector para pegar as classes como referencia
const buttonsDefautl = document.querySelector(".btn-default");

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";

  if (isShiny) {
    buttonShiny.style.display = "none";
    buttonsDefautl.style.display = "block";
  } else {
    buttonShiny.style.display = "block";
    buttonsDefautl.style.display = "none";
  }

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = "block";
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    if (isShiny) {
      pokemonImage.src =
        data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
          "front_shiny"
        ];
    } else {
      pokemonImage.src =
        data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
          "front_default"
        ];
    }
    // pokemonImage.src = data['sprites']['other']['home']['front_default'];
    input.value = "";
    searchPokemon = data.id;
  } else {
    pokemonNumber.innerHTML = "";
    pokemonImage.style.display = "none";
    pokemonName.innerHTML = "Not found";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

buttonShiny.addEventListener("click", () => {
  isShiny = true;
  renderPokemon(searchPokemon);
});

buttonsDefautl.addEventListener("click", () => {
  isShiny = false;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
