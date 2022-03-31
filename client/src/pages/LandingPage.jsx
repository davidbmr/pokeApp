import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<h1>Bievenidos a pokeApi</h1>
			<Link to='/home'>
				<button>Ingresar</button>
			</Link>
		</div>
	);
};

export default LandingPage;
