import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTypes, createPokemon } from "../actions";
import style from "./styles/CreatePokemonPage.module.css";

const CreatePokemonPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const allTypes = useSelector((state) => state.typesList);

	useEffect(() => {
		dispatch(getAllTypes());
	}, [dispatch]);

	const [newPokemon, setNewPokemon] = useState({
		name: "",
		hp: "",
		attack: "",
		defense: "",
		speed: "",
		height: "",
		weight: "",
		img: "",
		types: [],
	});

	/**Errores */
	const [error, setError] = useState({});

	function validate(newPokemon) {
		let errors = {};
		if (!newPokemon.name) errors.name = "Nombre Requerido";
		if (newPokemon.hp < 1) errors.hp = "Agregar un numero en la vida!";
		if (newPokemon.attack < 1) errors.attack = "Agrega un numero en el ataque!";
		if (newPokemon.defense < 1)
			errors.defense = "Agrega un numero en la defensa!";
		if (newPokemon.speed < 1)
			errors.speed = "Agrega un numero en la velocidad!";
		if (newPokemon.height < 1) errors.height = "Agrega un numero en el tamaño!";
		if (newPokemon.weight < 1) errors.weight = "Agrega un numero en el peso!";
		if (!newPokemon.img) errors.img = "Se requiere una URL de la imagen";
		return errors;
	}

	/**Handlers */
	const handlerChange = (e) => {
		setNewPokemon({
			...newPokemon,
			[e.target.name]: e.target.value,
		});
		setError(
			validate({
				//validamos los errores
				...newPokemon,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handlerFirstSelect = (e) => {
		if (newPokemon.types.length <= 1) {
			setNewPokemon({
				...newPokemon,
				types: [e.target.value],
			});
		} else if (e.target.value === newPokemon.types[1]) {
			setNewPokemon({
				...newPokemon,
				types: [e.target.value],
			});
		} else {
			setNewPokemon({
				...newPokemon,
				types: [e.target.value, newPokemon.types[1]],
			});
		}
	};

	const handlerSecondSelect = (e) => {
		if (newPokemon.types.length === 0) {
			alert("Primero debes de escoger tu primer tipo");
		} else if (e.target.value === "removeType") {
			setNewPokemon({
				...newPokemon,
				types: [newPokemon.types[0]],
			});
		} else if (e.target.value === newPokemon.types[0]) {
			setNewPokemon({
				...newPokemon,
				types: [newPokemon.types[0]],
			});
		} else {
			setNewPokemon({
				...newPokemon,
				types: [newPokemon.types[0], e.target.value],
			});
		}
	};

	/**Create Button*/

	const handlerCreatePokemon = (e) => {
		e.preventDefault();
		dispatch(createPokemon(newPokemon));
		alert("Personaje creado exitosamente");
		setNewPokemon({
			name: "",
			hp: "",
			attack: "",
			defense: "",
			speed: "",
			height: "",
			weight: "",
			img: "",
			types: [],
		});
		setTimeout(() => {
			navigate("/home");
		}, 1000);
	};

	const [disabledButton, setDisabledButton] = useState(true);

	useEffect(() => {
		if (
			newPokemon.name.length === "" ||
			newPokemon.types.length < 1 ||
			error.hasOwnProperty("img") ||
			error.hasOwnProperty("hp") ||
			error.hasOwnProperty("attack") ||
			error.hasOwnProperty("defense") ||
			error.hasOwnProperty("speed") ||
			error.hasOwnProperty("height") ||
			error.hasOwnProperty("weight")
		) {
			setDisabledButton(true);
		} else {
			setDisabledButton(false);
		}
	}, [error, newPokemon, setDisabledButton]);

	return (
		<div>
			<div className='container form'>
				<form>
					<div>
						<label>Nombre:</label>
						<input
							type='text'
							name='name'
							value={newPokemon.name}
							onChange={(e) => handlerChange(e)}
						/>
						{error.name && <p className={style.error}>{error.name}</p>}
					</div>
					<div>
						<label>HP:</label>
						<input
							type='number'
							name='hp'
							value={newPokemon.hp}
							onChange={(e) => handlerChange(e)}
						/>
						{error.hp && <p className={style.error}>{error.hp}</p>}
					</div>
					<div>
						<label>Attack:</label>
						<input
							type='number'
							name='attack'
							value={newPokemon.attack}
							onChange={(e) => handlerChange(e)}
						/>
						{error.attack && <p className={style.error}>{error.attack}</p>}
					</div>
					<div>
						<label>Defense:</label>
						<input
							type='number'
							name='defense'
							value={newPokemon.defense}
							onChange={(e) => handlerChange(e)}
						/>
						{error.defense && <p className={style.error}>{error.defense}</p>}
					</div>
					<div>
						<label>Speed:</label>
						<input
							type='number'
							name='speed'
							value={newPokemon.speed}
							onChange={(e) => handlerChange(e)}
						/>
						{error.speed && <p className={style.error}>{error.speed}</p>}
					</div>
					<div>
						<label>Height:</label>
						<input
							type='number'
							name='height'
							value={newPokemon.height}
							onChange={(e) => handlerChange(e)}
						/>
						{error.height && <p className={style.error}>{error.height}</p>}
					</div>
					<div>
						<label>Weight:</label>
						<input
							type='number'
							name='weight'
							value={newPokemon.weight}
							onChange={(e) => handlerChange(e)}
						/>
						{error.weight && <p className={style.error}>{error.weight}</p>}
					</div>
					<div>
						<label>Img:</label>
						<input
							type='text'
							name='img'
							value={newPokemon.img}
							onChange={(e) => handlerChange(e)}
						/>
						{error.img && <p className={style.error}>{error.img}</p>}
					</div>

					<div>
						<label>Choose first type:</label>
						<select
							defaultValue={"DEFAULT"}
							onChange={(e) => handlerFirstSelect(e)}
						>
							<option value='DEFAULT' disabled>
								Choose first type
							</option>
							{allTypes &&
								allTypes.map((type) => {
									return (
										<option key={type.name} value={type.name}>
											{type.name}
										</option>
									);
								})}
						</select>
						{error.types && <p className={style.error}>{error.types}</p>}
					</div>

					<div>
						<label>Choose second type:</label>
						<select
							defaultValue={"DEFAULT"}
							onChange={(e) => handlerSecondSelect(e)}
						>
							<option value='DEFAULT' disabled>
								Second type
							</option>
							{allTypes &&
								allTypes.map((type) => {
									return (
										<option key={type.name} value={type.name}>
											{type.name}
										</option>
									);
								})}
							<option value='removeType'>Remove second type</option>
						</select>
						<ul>
							<li>{newPokemon.types.map((type) => type + " ,")}</li>
						</ul>
					</div>
					<button
						disabled={disabledButton}
						onClick={(e) => handlerCreatePokemon(e)}
					>
						CREAR POKEMON
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePokemonPage;
