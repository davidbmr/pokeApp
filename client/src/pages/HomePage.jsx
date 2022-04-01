import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../actions";
import Card from "../components/home/Card";

const HomePage = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemonsList);

	console.log(allPokemons);

	useEffect(() => {
		dispatch(getAllPokemons());
	}, [dispatch]);

	return (
		<div>
			<h1>Pokemons</h1>
			<ul>
				{allPokemons?.map((pokemon) => (
					<Card
						key={pokemon.id}
						id={pokemon.id}
						name={pokemon.name}
						img={pokemon.img}
						types={pokemon.types}
					/>
				))}
			</ul>
		</div>
	);
};

export default HomePage;
