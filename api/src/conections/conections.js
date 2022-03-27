const axios = require("axios");

const url = "https://pokeapi.co/api/v2/pokemon";

const getFirstCallPokemonApi = () => {
	return axios.get(url).then((response) => response.data);
};

const getSecondCallPokemonApi = async () => {
	let url = await getFirstCallPokemonApi();
	return axios.get(url.next).then((response) => response.data);
};

const getAllPokemonsApi = async () => {
	let data1 = await getFirstCallPokemonApi();
	let data2 = await getSecondCallPokemonApi();

	let allData = data1.results.concat(data2.results);
	return allData;
};

module.exports = { getAllPokemonsApi };
