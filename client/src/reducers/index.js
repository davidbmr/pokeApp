const initialState = {
	pokemonsList: [], //render
	allPokemonsList: [], //all los pokes fijos
	createdPokemonFiltered: [],
	typePokemonFiltered: [],
	pokemon: {},
	typesList: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_POKEMONS":
			return {
				...state,
				pokemonsList: [...action.payload],
				allPokemonsList: [...action.payload],
				typePokemonFiltered: [...action.payload],
				createdPokemonFiltered: [...action.payload],
			};
		case "GET_ALL_TYPES":
			return {
				...state,
				typesList: action.payload,
			};

		case "FILTER_BY_TYPES":
			const allPokemons = [...state.createdPokemonFiltered];

			if (action.payload === "all") {
				return {
					...state,
					pokemonsList: allPokemons,
					typePokemonFiltered: allPokemons,
				};
			} else {
				const typesFiltered = allPokemons.filter(
					(pokemon) =>
						pokemon.types[0]?.name === action.payload ||
						pokemon.types[1]?.name === action.payload
				);

				return {
					...state,
					pokemonsList: typesFiltered,
					typePokemonFiltered: typesFiltered,
				};
			}

		case "FILTER_BY_ORDER":
			const currentPokemons = [...state.typePokemonFiltered];
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
				typePokemonFiltered: currentPokemons,
			};

		case "FILTER_BY_STRENGTH":
			const currentPokemons2 = [...state.typePokemonFiltered];
			if (action.payload === "default") {
				currentPokemons2.sort((obj1, obj2) => {
					if (obj1.id < obj2.id) {
						return -1;
					} else {
						return 1;
					}
				});
			}
			if (action.payload === "stronger") {
				currentPokemons2.sort((obj1, obj2) => {
					if (obj1.attack < obj2.attack) {
						return 1;
					} else if (obj1.attack > obj2.attack) {
						return -1;
					} else {
						return 0;
					}
				});
			}
			if (action.payload === "weaker") {
				currentPokemons2.sort((obj1, obj2) => {
					if (obj1.attack < obj2.attack) {
						return -1;
					} else if (obj1.attack > obj2.attack) {
						return 1;
					} else {
						return 0;
					}
				});
			}
			return {
				...state,
				typePokemonFiltered: currentPokemons2,
				pokemonsList: currentPokemons2,
			};

		case "FILTER_BY_CREATED":
			const currentPokemons3 = [...state.allPokemonsList];
			if (action.payload === "existing") {
				const pokemonFilteredCreated = currentPokemons3.filter(
					(pokemon) => pokemon.id < 1000
				);
				return {
					...state,
					pokemonsList: pokemonFilteredCreated,
					createdPokemonFiltered: pokemonFilteredCreated,
				};
			} else if (action.payload === "created") {
				const pokemonFilteredCreated = currentPokemons3.filter(
					(pokemon) => pokemon.id.length > 6
				);
				return {
					...state,
					pokemonsList: pokemonFilteredCreated,
					createdPokemonFiltered: pokemonFilteredCreated,
				};
			}
			return {
				...state,
				pokemonsList: currentPokemons3,
				createdPokemonFiltered: currentPokemons3,
			};

		case "GET_NAME_POKEMON":
			return {
				...state,
				pokemonsList: [action.payload],
			};

		case "GET_POKEMON_DETAILS":
			return {
				...state,
				pokemon: action.payload,
			};

		default:
			return state;
	}
}

export default rootReducer;
