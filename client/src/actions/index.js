import axios from "axios";

export function getAllPokemons() {
	return async function (dispatch) {
		try {
			let pokemonList = await axios.get("http://localhost:3001/pokemons");

			return dispatch({
				type: "GET_ALL_POKEMONS",
				payload: pokemonList.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getAllTypes() {
	return async function (dispatch) {
		try {
			let typeList = await axios.get("http://localhost:3001/types");
			return dispatch({
				type: "GET_ALL_TYPES",
				payload: typeList.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getPokemonById(id) {
	return async function (dispatch) {
		try {
			let pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
			return dispatch()({
				type: "GET_POKE_BY_ID",
				payload: pokemon.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function filterByTypes(payload) {
	return {
		type: "FILTER_BY_TYPES",
		payload,
	};
}

export function filterByOrder(payload) {
	return {
		type: "FILTER_BY_ORDER",
		payload,
	};
}
