import rootReducer, { initialState } from "../redux/reducers";

describe("Reducer", () => {
	it("Debería retornar el estado inicial si no se pasa un type valido", () => {
		expect(rootReducer(undefined, {})).toEqual(initialState);
	});
});
