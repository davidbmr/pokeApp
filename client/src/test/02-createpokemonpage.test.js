import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CreatePokemonPage from "../pages/CreatePokemonPage.jsx";
import store from "../redux/store/index";

describe("<CreatePokemonPage/>", () => {
	const page = () => {
		const { container } = render(
			<Provider store={store}>
				<BrowserRouter>
					<CreatePokemonPage />
				</BrowserRouter>
			</Provider>
		);
		return container;
	};
	it('El form debe tener un label que diga: "Name:"', () => {
		const element = page().querySelectorAll("label")[0];
		expect(element.innerHTML).toBe("Name:");
	});
	it("Los inputos de hp, attack, defense, speed, height y weight deben de ser de tipo number", () => {
		const hp = page().querySelector("#hpInput");
		const attack = page().querySelector("#attackInput");
		const defense = page().querySelector("#defenseInput");
		const speed = page().querySelector("#speedInput");
		const height = page().querySelector("#heightInput");
		const weight = page().querySelector("#weightInput");
		expect(hp.type).toBe("number");
		expect(attack.type).toBe("number");
		expect(defense.type).toBe("number");
		expect(speed.type).toBe("number");
		expect(height.type).toBe("number");
		expect(weight.type).toBe("number");
	});

	it("El boton debe de encontrarse deshabilitado", () => {
		const element = page().querySelector(".buttonCreatePokemon");
		expect(element.disabled).toBe(true);
	});
});
