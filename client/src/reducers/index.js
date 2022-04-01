const initialState = {
	pokemonsList: [],
	pokemon: {},
	typesList: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_POKEMONS":
			return {
				...state,
				pokemonsList: action.payload,
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
		default:
			return state;
	}
}

export default rootReducer;
