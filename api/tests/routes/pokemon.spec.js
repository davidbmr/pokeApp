/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
	name: "testname",
	hp: 12,
	attack: 12,
	defense: 12,
	speed: 12,
	height: 12,
	weight: 12,
	img: 12,
	types: ["fire", "water"],
};

describe("Pokemon routes", () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error("Unable to connect to the database:", err);
		})
	);
	beforeEach(() =>
		Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
	);
	/**Test /pokemons */
	describe("GET /pokemons", () => {
		it("should get 200", () => agent.get("/pokemons").expect(200));
	});
	describe("GET /pokemons?name=testname", () => {
		it("should get 200", () =>
			agent.get("/pokemons?name=testname").expect(200));
	});
	describe("GET /pokemons/:id", () => {
		it("should get 200", () => agent.get("/pokemons/1").expect(200));
	});
	describe("GET /pokemons/:id", () => {
		it("should get 404", () => agent.get("/pokemons/12345").expect(404));
	});
	/**Test /types */
	describe("GET /types", () => {
		it("should get 200", () => agent.get("/types").expect(200));
	});
});
