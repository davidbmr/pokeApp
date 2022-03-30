const { default: axios } = require("axios");
const { Router } = require("express");
const { getAllPokemons } = require("../conections/conections");
const { Pokemon, Type } = require("../db");

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

routerPokemons.post("/", async (req, res) => {
	try {
		const { name, hp, attack, defense, speed, height, weight, imagen, types } = req.body;
		const createPokemon = await Pokemon.create({
			name,
			hp,
			attack,
			defense,
			speed,
			height,
			weight,
			imagen,
		});

		const typeDB = await Type.findAll({
			where: { name: types },
		});

		await createPokemon.addType(typeDB);
		res.send(`Personaje creado con exito papuuu!! sigue adelante!!`);
	} catch (error) {
		console.log(error);
	}
});

module.exports = routerPokemons;
