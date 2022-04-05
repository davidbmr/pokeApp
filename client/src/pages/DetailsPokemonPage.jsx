import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../actions/index";
import { useParams, Link } from "react-router-dom";
import style from "./styles/DetailsPokemonPage.module.css";
import TypesPokemonInfo from "../components/general/TypesPokemonInfo";

const DetailsPokemonPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPokemonDetail(id));
	}, [dispatch, id]);

	const pokemonInfo = useSelector((state) => state.pokemon);

	return (
		<>
			<nav>
				<Link to='/home'>REGRESAR AL INICIO</Link>
			</nav>
			{pokemonInfo ? (
				<div className={style.pokeInfoContainer}>
					<div className={style.pokeInfoImgContainer}>
						<img src={pokemonInfo.img} alt={pokemonInfo.name} />
						<TypesPokemonInfo types={pokemonInfo.types} />
					</div>
					<div className={style.pokeInfoDetailsContainer}>
						<div>N° {pokemonInfo.id}</div>
						<div>Name: {pokemonInfo.name}</div>
						<div>Attack: {pokemonInfo.attack}</div>
						<div>Defense: {pokemonInfo.defense}</div>
						<div>Speed: {pokemonInfo.speed}</div>
						<div>Height: {pokemonInfo.height}</div>
						<div>Weight: {pokemonInfo.weight}</div>
					</div>
				</div>
			) : (
				<div>cargando</div>
			)}
		</>
	);
};

export default DetailsPokemonPage;
