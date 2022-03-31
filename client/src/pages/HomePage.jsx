import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../actions";
import { Link } from "react-router-dom";

const HomePage = () => {
	const dispatch = useDispatch();
	// const allPokemons = useSelector((state) => state.pokemons);

	useEffect(() => {
		dispatch(getAllPokemons());
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getAllPokemons);
	}

	return (
		<div>
			<Link to='/pokemons'>Crear pokemon</Link>
			<h1>Aguante Pokemon</h1>
			<button
				onClick={(e) => {
					handleClick(e);
				}}
			>
				Volver a cargar todos los pokemons
			</button>
			<div></div>
		</div>
	);
};

export default HomePage;
