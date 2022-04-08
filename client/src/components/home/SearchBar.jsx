import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../actions";
import style from "./styles/SearchBar.module.css";

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
					className={style.inputSearchBar}
					type='text'
					placeholder='Busca tu pokemon aqui'
					value={name}
					onChange={(e) => handlerInputChange(e)}
				/>

				<button
					className={style.buttonSearchBar}
					type='submit'
					onClick={(e) => handlerSubmit(e)}
				>
					Buscar
				</button>
			</form>
		</>
	);
};

export default SearchBar;
