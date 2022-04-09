import React from "react";
import psyduckNotFoundPage from "../assets/psyduckNotFoundPage.jpg";
import style from "./styles/NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className={style.notFoundContainer}>
			<div className={style.notFoundTextContainer}>
				<p className={style.notFoundTextError}>
					Error 404 - ha ocurrido un problema
				</p>
				<h2>
					La pagina que estas intentando acceder no se encuentra disponible
				</h2>
				<p>
					Posiblemente se encuentra en proceso de mantenimiento, descuida que
					nuestro maestro pokemon esta dando lo mejor de el para solucionarlo
				</p>
			</div>
			<Link className={style.notFoundButton} to='/home/'>
				REGRESAR AL HOME
			</Link>
			<img
				className={style.notFoundImg}
				src={psyduckNotFoundPage}
				alt='psyduck frente a la pc'
			/>
		</div>
	);
};

export default NotFoundPage;
