import React from "react";
import style from "./styles/Card.module.css";
const Card = ({ id, name, img, types }) => {
	return (
		<li className={style.cardContainer}>
			<div className={style.cardImageContainer}>
				<img className={style.cardImg} src={img} alt={name} />
			</div>
			<div className={style.cardInfo}>
				<h3 className={style.name}>{name}</h3>
				<ul className={style.cardTypes}>
					{types?.map((type) => (
						<li key={type} className={style.type} value={type}>
							{type}
						</li>
					))}
				</ul>
			</div>
		</li>
	);
};

export default Card;
