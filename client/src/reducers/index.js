const initialState = {
	pokemonsList: [],
	allPokemonsList: [],
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
			const allPokemons = state.allPokemonsList;

			if (action.payload === "all") {
				return {
					...state,
					pokemonsList: allPokemons,
				};
			} else {
				const typesFiltered = allPokemons.filter((pokemon) =>
					pokemon.types.includes(action.payload)
				);

				return {
					...state,
					pokemonsList: typesFiltered,
				};
			}

		default:
			return state;
	}
}

export default rootReducer;
