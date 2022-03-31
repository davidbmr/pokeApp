import axios from "axios";

export function getAllPokemons() {
	return async function (dispatch) {
		let info = await axios.get("http://localhost:3001/pokemons");

		return dispatch({
			type: "GET_ALL_POKEMONS",
			payload: info.data,
		});
	};
}
