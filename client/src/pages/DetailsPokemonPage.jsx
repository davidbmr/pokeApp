import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../actions/index";
import { useParams } from "react-router-dom";

const DetailsPokemonPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPokemonDetail(id));
	}, [dispatch, id]);

	const pokemonInfo = useSelector((state) => state.pokemon);
	console.log(pokemonInfo);
	return (
		<>
			{pokemonInfo ? (
				<div>
					<div>{pokemonInfo.name}</div>
					<img src={pokemonInfo.img} alt={pokemonInfo.name} />
					<div>{pokemonInfo.attack}</div>
					<div>{pokemonInfo.defense}</div>
				</div>
			) : (
				<div>cargando</div>
			)}
		</>
	);
};

export default DetailsPokemonPage;
