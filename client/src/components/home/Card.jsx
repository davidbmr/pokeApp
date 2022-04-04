import React from "react";
import style from "./styles/Card.module.css";
import { Link } from "react-router-dom";
import TypesPokemonInfo from "../general/TypesPokemonInfo";

const Card = ({ id, name, img, types }) => {
	return (
		<li className={style.cardContainer}>
			<div className={style.cardImageContainer}>
				<img className={style.cardImg} src={img} alt={name} />
			</div>
			<div className={style.cardInfo}>
				<Link to={`/details/${id}`}>
					<h3 className={style.name}>{name}</h3>
				</Link>
				<TypesPokemonInfo types={types} />
			</div>
		</li>
	);
};

export default Card;
