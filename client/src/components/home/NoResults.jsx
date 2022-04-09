import React from "react";
import style from "./styles/NoResults.module.css";
import imgNoResults from "../../assets/imgNoResults.jpg";

const NoResults = () => {
	return (
		<div className={style.noResultsContainer}>
			<p className={style.noResultsText}>
				Lo sentimos, no se pudo encontrar el pokemon o la lista de pokemones que
				estabas buscando
			</p>
			<img
				className={style.noResultsImg}
				src={imgNoResults}
				alt='pikachu triste'
			/>
		</div>
	);
};

export default NoResults;
