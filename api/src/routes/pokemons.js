const { Router } = require("express");

const routerPokemons = Router();

routerPokemons.get("/", (req, res) => {});
routerPokemons.get("/:id", (req, res) => {});
//parametros get /pokemons?name="..."
routerPokemons.post("/", (req, res) => {});

module.exports = routerPokemons;
