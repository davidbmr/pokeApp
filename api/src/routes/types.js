const { Router } = require("express");
const { Type } = require("../db");
const axios = require("axios");

const routerType = Router();

// /types
routerType.get("/", async (req, res) => {
	try {
		const typesDb = await Type.findAll();

		if (!typesDb.length) {
			let typesAPI = await axios.get(`https://pokeapi.co/api/v2/type`);
			typesAPI = await typesAPI.data.results.map((type) => {
				return { name: type.name };
			});

			await Type.bulkCreate(typesAPI);
			const newCallTypesDb = await Type.findAll();
			return res.status(200).json(newCallTypesDb);
		}

		res.status(200).json(typesDb);
	} catch (error) {
		console.log(error);
	}
});

module.exports = routerType;
