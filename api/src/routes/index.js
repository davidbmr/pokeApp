const { Router } = require("express");
const { getAllPokemonsApi } = require("../conections/conections.js");
const router = Router();

// Importar todos los routers;
const routerPokemons = require("./pokemons");
const routerTypes = require("./types");

// Configurar los routers

router.use("/pokemons", routerPokemons);
router.use("/types", routerTypes);

router.get("/test", async (req, res) => {
	const arr = await getAllPokemonsApi();
	console.log(arr);
	return res.json(arr);
});

module.exports = router;
