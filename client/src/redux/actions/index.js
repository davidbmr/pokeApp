import axios from "axios";

export function getAllPokemons() {
	return async function (dispatch) {
		dispatch({
			type: "POKEMON_LIST_LOADING",
		});
		try {
			let pokemonList = await axios.get("/pokemons");

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
			let typeList = await axios.get("/types");
			return dispatch({
				type: "GET_ALL_TYPES",
				payload: typeList.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getNamePokemon(name) {
	return async function (dispatch) {
		try {
			let pokemonName = await axios.get(`/pokemons?name=${name}`);
			return dispatch({
				type: "GET_NAME_POKEMON",
				payload: pokemonName.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getPokemonDetail(id) {
	return async function (dispatch) {
		dispatch({
			type: "POKEMON_LIST_LOADING",
		});
		try {
			let pokeInfo = await axios.get(`/pokemons/${id}`);
			return dispatch({
				type: "GET_POKEMON_DETAILS",
				payload: pokeInfo.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function createPokemon(payload) {
	return async function (dispatch) {
		const newPokemon = await axios.post("/pokemons", payload);
		return newPokemon;
	};
}

export function clearDetails() {
	return {
		type: "CLEAR_DETAILS",
		payload: {},
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

export function filterByStrength(payload) {
	return {
		type: "FILTER_BY_STRENGTH",
		payload,
	};
}

export function filterByCreated(payload) {
	return {
		type: "FILTER_BY_CREATED",
		payload,
	};
}
