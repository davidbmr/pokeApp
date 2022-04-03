import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../actions";

const SearchBar = ({ setCurrentPage }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handlerInputChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch(getNamePokemon(name));
		setCurrentPage(() => 1);
		setName("");
	};

	return (
		<>
			<form>
				<input
					type='text'
					placeholder='Busca tu pokemon aqui'
					value={name}
					onChange={(e) => handlerInputChange(e)}
				/>

				<button type='submit' onClick={(e) => handlerSubmit(e)}>
					Buscar
				</button>
			</form>
		</>
	);
};

export default SearchBar;
