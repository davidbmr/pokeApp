import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/LogoImg.png";
import style from "./styles/NavHome.module.css";
import SearchBar from "./SearchBar";

const NavHome = ({ setCurrentPage }) => {
	return (
		<div className={style.navHomeContainer}>
			<div className={style.navHomeLogo}>
				<img className={style.logoImg} src={LogoImg} alt='logo-pokemon' />
				POKEAPP
			</div>
			<div className={style.searchContainer}>
				<SearchBar setCurrentPage={setCurrentPage} />
			</div>
			<Link className={style.navHomeButtonCreate} to='/create-pokemon/'>
				CREAR POKEMON
			</Link>
		</div>
	);
};

export default NavHome;
