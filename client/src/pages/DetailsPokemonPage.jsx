import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, getPokemonDetail } from "../redux/actions/index";
import { useParams } from "react-router-dom";
import style from "./styles/DetailsPokemonPage.module.css";
import TypesPokemonInfo from "../components/general/TypesPokemonInfo";
import NavSecundary from "../components/general/NavSecundary";
import Loading from "../components/general/Loading";

const DetailsPokemonPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(clearDetails());
		dispatch(getPokemonDetail(id));
	}, [dispatch, id]);

	const pokemonInfo = useSelector((state) => state.pokemon);
	const loading = useSelector((state) => state.loading);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className={style.detailsContainer}>
					<NavSecundary />

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
								<h1 className={style.titleInfo}>{pokemonInfo.name}</h1>
								<p>ID: {pokemonInfo.id}</p>
								<div className={style.rowInfo}>
									<p>
										<span className={style.iconHp}></span> HP: {pokemonInfo.hp}
									</p>
									<p>
										<span className={style.iconAttack}></span>Attack:{" "}
										{pokemonInfo.attack}
									</p>
								</div>
								<div className={style.rowInfo}>
									<p>
										<span className={style.iconDefense}></span>Defense:{" "}
										{pokemonInfo.defense}
									</p>
									<p>
										<span className={style.iconSpeed}></span>Speed:{" "}
										{pokemonInfo.speed}
									</p>
								</div>
								<div className={style.rowInfo}>
									<p>
										<span className={style.iconHeight}></span>Height:{" "}
										{pokemonInfo.height} m
									</p>
									<p>
										<span className={style.iconWeight}></span>Weight:{" "}
										{pokemonInfo.weight} kg
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailsPokemonPage;
