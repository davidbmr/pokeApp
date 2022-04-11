const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error("Unable to connect to the database:", err);
		})
	);

	describe("Validators", () => {
		beforeEach(() => Pokemon.sync({ force: true }));
		describe("create a new pokemon", () => {
			it("should work when its a valid pokemon", () => {
				Pokemon.create({
					name: "test",
					hp: 12,
					attack: 12,
					defense: 12,
					speed: 12,
					height: 12,
					weight: 12,
					img: 12,
					types: ["fire", "water"],
				});
			});
		});
	});
});
