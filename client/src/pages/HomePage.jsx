import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import NavHome from "../components/home/NavHome";
import Card from "../components/home/Card";
import MenuFilter from "../components/home/MenuFilter";
import Paginated from "../components/home/Paginated";
import style from "./styles/HomePage.module.css";
import Loading from "../components/general/Loading";
import NoResults from "../components/home/NoResults";

const HomePage = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemonsList);
	const loading = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(getAllPokemons());
	}, [dispatch]);

	/** Paginado */
	const [currentPage, setCurrentPage] = useState(1);

	const pokemonsPerPage = 12;
	const indexOfLastPokemon = currentPage * pokemonsPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
	const currentPokemons = allPokemons.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon
	);

	const pages = (pageNum) => {
		setCurrentPage(pageNum);
	};

	/**Final del paginado */

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className={style.homeContainer}>
					<div className={style.menuContainer}>
						<NavHome setCurrentPage={setCurrentPage} />

						<div className={style.subMenuContainer}>
							<div className={style.filtersContainer}>
								<MenuFilter setCurrentPage={setCurrentPage} />
							</div>
						</div>
					</div>

					<div className={style.paginatedList}>
						<Paginated
							currentPage={currentPage}
							pageNumber={pages}
							amountPerPage={pokemonsPerPage}
							totalAmount={allPokemons.length}
						/>
					</div>
					<div className={style.pokeListContainer}>
						<ul className={style.pokeList}>
							{currentPokemons[0] !== "" && currentPokemons.length > 0 ? (
								currentPokemons.map((pokemon) => (
									<Card
										key={pokemon.id}
										id={pokemon.id}
										name={pokemon.name}
										img={pokemon.img}
										types={pokemon.types}
									/>
								))
							) : (
								<NoResults />
							)}
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
