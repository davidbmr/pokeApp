import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/actions";
import style from "./styles/SearchBar.module.css";

const SearchBar = ({ setCurrentPage }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handlerInputChange = (e) => {
		e.preventDefault();
		setName(e.target.value.toLowerCase());
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (name === "") {
			alert("Debes de ingresar el nombre del pokemon que deseas buscar");
		} else {
			dispatch(getNamePokemon(name));
			setCurrentPage(() => 1);
			setName("");
		}
	};

	return (
		<>
			<form>
				<input
					autoFocus
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
