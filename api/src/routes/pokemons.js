const { Router } = require("express");
const { getAllPokemons } = require("../conections/conections");

const routerPokemons = Router();

routerPokemons.get("/", async (req, res) => {
	const allPokes = await getAllPokemons();
	//pokemons?name=
	const { name } = req.query;
	if (name) {
		const pokeFilter = allPokes.find((element) => element.name == name);
		res.status(200).json(pokeFilter);
	} else {
		res.status(200).json(allPokes);
	}
});

routerPokemons.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const allPokes = await getAllPokemons();
		const pokeFilter = allPokes.find((element) => element.id == id);
		if (pokeFilter) {
			res.status(200).json(pokeFilter);
		} else {
			res.status(404).send("Ese pokemon no existe");
		}
	} catch (error) {
		console.log(error);
	}
});
routerPokemons.post("/", (req, res) => {});

module.exports = routerPokemons;
