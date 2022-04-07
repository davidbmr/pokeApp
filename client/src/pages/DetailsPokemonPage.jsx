import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, getPokemonDetail } from "../actions/index";
import { useParams } from "react-router-dom";
import style from "./styles/DetailsPokemonPage.module.css";
import TypesPokemonInfo from "../components/general/TypesPokemonInfo";
import NavSecundary from "../components/general/NavSecundary";

const DetailsPokemonPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(clearDetails());
		dispatch(getPokemonDetail(id));
	}, [dispatch, id]);

	const pokemonInfo = useSelector((state) => state.pokemon);

	return (
		<div className={style.detailsContainer}>
			<NavSecundary />
			{pokemonInfo ? (
				<div className={style.pokeInfoContainer}>
					<div className={style.pokeInfoImgContainer}>
						<img
							className={style.pokeInfoImg}
							src={pokemonInfo.img}
							alt={pokemonInfo.name}
						/>
						<TypesPokemonInfo types={pokemonInfo.types} />
					</div>
					<div className={style.pokeInfoDetailsContainer}>
						<div className={style.tableInfoContainer}>
							<h1>{pokemonInfo.name}</h1>
							<div>N° {pokemonInfo.id}</div>
							<div className={style.rowInfo}>
								<div>HP: {pokemonInfo.hp}</div>
								<div>Attack: {pokemonInfo.attack}</div>
							</div>
							<div className={style.rowInfo}>
								<div>Defense: {pokemonInfo.defense}</div>
								<div>Speed: {pokemonInfo.speed}</div>
							</div>
							<div className={style.rowInfo}>
								<div>Height: {pokemonInfo.height}</div>
								<div>Weight: {pokemonInfo.weight}</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>cargando</div>
			)}
		</div>
	);
};

export default DetailsPokemonPage;
