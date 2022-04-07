import React from "react";
import style from "./styles/TypesPokemonInfo.module.css";

const TypesPokemonInfo = ({ types }) => {
	return (
		<ul className={style.cardTypes}>
			{types?.map((type) => (
				<li key={type.name} className={style.type} value={type.name}>
					{type.name}
				</li>
			))}
		</ul>
	);
};

export default TypesPokemonInfo;
