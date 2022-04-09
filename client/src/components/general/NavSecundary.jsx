import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/NavSecundary.module.css";

const NavSecundary = () => {
	return (
		<nav className={style.navSecondaryContainer}>
			<Link className={style.linkNavSecondary} to='/home'>
				REGRESAR AL HOME
			</Link>
		</nav>
	);
};

export default NavSecundary;
