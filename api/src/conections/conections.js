const axios = require("axios");
const { Pokemon, Type } = require("../db");

/**Haciendo peticiones sin usar limit 40 */
// const url = "https://pokeapi.co/api/v2/pokemon";
// const getFirstCallPokemonApi = () => {
// 	return axios.get(url).then((response) => response.data);
// };

// const getSecondCallPokemonApi = async () => {
// 	let url = await getFirstCallPokemonApi();
// 	return axios.get(url.next).then((response) => response.data);
// };

// const getAllPokemonsApi = async () => {
// 	let data1Api = await getFirstCallPokemonApi();
// 	let data2Api = await getSecondCallPokemonApi();

// 	let allDataApi = [...data1Api.results, ...data2Api.results];
// 	return allDataApi;
// };

/** Haciendo una peticion usando limit */
const url = "https://pokeapi.co/api/v2/pokemon?limit=40";

// axios.get(url).then((res) => res.data.results);

const getAllPokemonsApi = () => {
	return axios
		.get(url)
		.then((response) => response.data.results)
		.catch((error) => console.log(error));
};

/** Peticiones a la url de cada pokemon */
const getAllPokemonsInfoApi = async () => {
	try {
		const arrPokemonsApi = await getAllPokemonsApi();

		const arrPromeses = arrPokemonsApi.map((element) => {
			return axios.get(element.url);
		});

		const arrPokemonInfo = await Promise.all(arrPromeses).then(
			(responsePromeses) => {
				const pokeArray = responsePromeses.map((element) => {
					return {
						id: element.data.id,
						name: element.data.name,
						hp: element.data.stats[0].base_stat,
						attack: element.data.stats[1].base_stat,
						defense: element.data.stats[2].base_stat,
						speed: element.data.stats[5].base_stat,
						height: element.data.height / 10,
						weight: element.data.weight / 10,
						types: element.data.types.map((element) => {
							return { name: element.type.name };
						}),
						img: element.data.sprites.other.home.front_default,
					};
				});
				return pokeArray;
			}
		);
		return arrPokemonInfo;
	} catch (error) {
		console.log(error);
	}
};

/** Trayendome la info de la db */

const getAllPokemonsInfoDb = async () => {
	try {
		const pokes = await Pokemon.findAll({
			include: {
				model: Type,
				attributes: ["name"],
				through: {
					attributes: [],
				},
			},
		});
		return pokes;
	} catch (error) {
		console.log(error);
	}
};

const getAllPokemons = async () => {
	try {
		const dataApi = await getAllPokemonsInfoApi();
		const dataDb = await getAllPokemonsInfoDb();
		const allData = [...dataApi, ...dataDb];
		return allData;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllPokemonsInfoApi,
	getAllPokemonsInfoDb,
	getAllPokemons,
};
