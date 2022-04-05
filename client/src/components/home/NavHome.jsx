import React from "react";
import { Link } from "react-router-dom";
import logoPokemon from "../../assets/logoPokemon.png";
import style from "./styles/NavHome.module.css";

const NavHome = () => {
	return (
		<div className={style.navHomeContainer}>
			<img className={style.navHomeImg} src={logoPokemon} alt='logo-pokemon' />
			<Link className={style.navHomeButtonCreate} to='/create-pokemon/'>
				CREAR POKEMON
			</Link>
		</div>
	);
};

export default NavHome;
