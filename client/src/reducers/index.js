const initialState = {
	pokemonsList: [],
	allPokemonsList: [],
	pokemonsFiltered: [],
	pokemon: {},
	typesList: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_POKEMONS":
			return {
				...state,
				pokemonsList: action.payload,
				allPokemonsList: [...action.payload],
				pokemonsFiltered: [...action.payload],
			};

		case "GET_POKEMON_BY_ID":
			return {
				...state,
				pokemon: action.payload,
			};

		case "GET_ALL_TYPES":
			return {
				...state,
				typesList: action.payload,
			};

		case "FILTER_BY_TYPES":
			const allPokemons = [...state.allPokemonsList];

			if (action.payload === "all") {
				return {
					...state,
					pokemonsList: allPokemons,
					pokemonsFiltered: allPokemons,
				};
			} else {
				const typesFiltered = allPokemons.filter((pokemon) =>
					pokemon.types.includes(action.payload)
				);

				return {
					...state,
					pokemonsList: typesFiltered,
					pokemonsFiltered: typesFiltered,
				};
			}

		case "FILTER_BY_ORDER":
			const currentPokemons = [...state.pokemonsFiltered];

			if (action.payload === "pokedex") {
				currentPokemons.sort((obj1, obj2) => {
					if (obj1.id < obj2.id) {
						return -1;
					} else {
						return 1;
					}
				});
			}

			if (action.payload === "ascending") {
				currentPokemons.sort((obj1, obj2) => {
					if (obj1.name < obj2.name) {
						return -1;
					} else {
						return 1;
					}
				});
			}

			if (action.payload === "descending") {
				currentPokemons.sort((obj1, obj2) => {
					if (obj1.name < obj2.name) {
						return 1;
					} else {
						return -1;
					}
				});
			}

			return {
				...state,
				pokemonsList: currentPokemons,
			};

		default:
			return state;
	}
}

export default rootReducer;
