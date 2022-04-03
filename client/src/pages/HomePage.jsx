import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../actions";
import Card from "../components/home/Card";
import MenuFilter from "../components/home/MenuFilter";
import Paginated from "../components/home/Paginated";
import SearchBar from "../components/home/SearchBar";
import style from "./styles/HomePage.module.css";

const HomePage = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemonsList);

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
		<div>
			<h1>Pokemons</h1>

			<div className={style.subMenuContainer}>
				<div className={style.searchContainer}>
					<SearchBar setCurrentPage={setCurrentPage} />
				</div>
				<div className={style.filtersContainer}>
					<MenuFilter setCurrentPage={setCurrentPage} />
				</div>
			</div>

			<hr />

			<div className={style.pokeListContainer}>
				<div className={style.paginatedList}>
					<Paginated
						currentPage={currentPage}
						pageNumber={pages}
						amountPerPage={pokemonsPerPage}
						totalAmount={allPokemons.length}
					/>
				</div>
				<ul className={style.pokeList}>
					{currentPokemons?.map((pokemon) => (
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
		</div>
	);
};

export default HomePage;
