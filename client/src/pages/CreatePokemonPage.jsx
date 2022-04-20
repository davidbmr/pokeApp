import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTypes, createPokemon, getAllPokemons } from "../redux/actions";
import NavSecundary from "../components/general/NavSecundary";
import style from "./styles/CreatePokemonPage.module.css";

const CreatePokemonPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const allTypes = useSelector((state) => state.typesList);
	const allPokemons = useSelector((state) => state.allPokemonsList);

	useEffect(() => {
		dispatch(getAllTypes());
		dispatch(getAllPokemons());
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
		if (
			allPokemons.find(
				(pokemon) =>
					pokemon.name.toUpperCase() === newPokemon.name.toUpperCase()
			)
		)
			errors.name =
				"Ya existe un pokemon con ese nombre, prueba con escoger otro";
		if (!newPokemon.name)
			errors.name = "Tu poke necesita un nombre, escoge el mejor";
		if (/[1-9]/.test(newPokemon.name))
			errors.name = "El nombre de tu poke no puede contener numeros";
		if (/[\s]/.test(newPokemon.name))
			errors.name = "El nombre de tu poke no puede contener espacios";
		if (/[^\w\s]/.test(newPokemon.name))
			errors.name =
				"El nombre de tu poke no puede contener caracteres especiales";

		if (newPokemon.hp < 1)
			errors.hp = "Necesitas colocar un valor mayor o igual a 1";
		if (newPokemon.hp === "")
			errors.hp = "No te olvides de colocar la vida de tu poke";
		if (newPokemon.hp > 200) errors.hp = "La vida no puede ser superior a 200";

		if (newPokemon.attack < 1)
			errors.attack = "Necesitas colocar un valor mayor o igual a 1";
		if (newPokemon.attack === "")
			errors.attack = "Coloca que tan poderoso es tu poke";
		if (newPokemon.attack > 200)
			errors.attack = "El ataque no puede ser superior a 200";

		if (newPokemon.defense < 1)
			errors.defense = "Necesitas colocar un valor mayor o igual a 1";
		if (newPokemon.defense === "")
			errors.defense = "Coloca que tan resistente es tu poke";
		if (newPokemon.defense > 200)
			errors.defense = "La defensa no puede ser superior a 200";

		if (newPokemon.speed < 1)
			errors.speed = "Necesitas colocar un valor mayor o igual a 1";
		if (newPokemon.speed === "")
			errors.speed = "Coloca que tan rapido es tu poke";
		if (newPokemon.speed > 200)
			errors.speed = "La velocidad no puede ser superior a 200";

		if (newPokemon.height < 1)
			errors.height = "Necesitas colocar un valor mayor o igual a 1";
		if (newPokemon.height === "")
			errors.height = "No te olvides colocar que tan grande es tu poke";
		if (newPokemon.height > 200)
			errors.height = "La tamanio no puede ser superior a 200";

		if (newPokemon.weight < 1)
			errors.weight = "Necesitas colocar un valor mayor o igual a 1";
		if (newPokemon.weight === "")
			errors.weight = "Cuentanos que tan pesado es tu poke";
		if (newPokemon.weight > 200)
			errors.weight = "El peso no puede ser superior a 200";

		if (!/\.(jpg|png|gif)$/i.test(newPokemon.img))
			errors.img = "La url que intentas colocar no es valida";
		if (!newPokemon.img)
			errors.img = "Se requiere una URL para la imagen de tu poke";
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
			e.target.value = "DEFAULT";
			return;
		}
		if (e.target.value === "removeType") {
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
		dispatch(
			createPokemon({ ...newPokemon, name: newPokemon.name.toLowerCase() })
		);
		alert("Tu pokemon ha sido creado exitosamente");
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
			newPokemon.name === "" ||
			newPokemon.types.length < 1 ||
			error.hasOwnProperty("name") ||
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
		<div className={style.createPokemonContainer}>
			<NavSecundary />
			<div className={style.formContainer}>
				<form className={style.form}>
					<h1 className={style.titleCreatePokemon}>Create a new pokemon</h1>

					<div className={style.columnsContainer}>
						{/**PRIMERA COLUMNA */}
						<div className={style.columnInfo}>
							<div className={style.rowInfo}>
								<label>Name:</label>
								<input
									id='nameInput'
									type='text'
									name='name'
									value={newPokemon.name}
									placeholder='Ejm: david'
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.name && <p className={style.error}>{error.name}</p>}
							<div className={style.rowInfo}>
								<label>HP:</label>
								<input
									id='hpInput'
									type='number'
									name='hp'
									placeholder='Ejm: 12'
									value={newPokemon.hp}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.hp && <p className={style.error}>{error.hp}</p>}
							<div className={style.rowInfo}>
								<label>Attack:</label>
								<input
									id='attackInput'
									type='number'
									name='attack'
									placeholder='Ejm: 12'
									value={newPokemon.attack}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.attack && <p className={style.error}>{error.attack}</p>}
							<div className={style.rowInfo}>
								<label>Defense:</label>
								<input
									id='defenseInput'
									type='number'
									name='defense'
									placeholder='Ejm: 12'
									value={newPokemon.defense}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.defense && <p className={style.error}>{error.defense}</p>}
							<div className={style.rowInfo}>
								<label>Speed:</label>
								<input
									id='speedInput'
									type='number'
									name='speed'
									placeholder='Ejm: 12'
									value={newPokemon.speed}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.speed && <p className={style.error}>{error.speed}</p>}
						</div>

						{/**SEGUNDA COLUMNA */}
						<div className={style.columnInfo}>
							<div className={style.rowInfo}>
								<label>Height:</label>
								<input
									id='heightInput'
									type='number'
									name='height'
									placeholder='Ejm: 12'
									value={newPokemon.height}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.height && <p className={style.error}>{error.height}</p>}
							<div className={style.rowInfo}>
								<label>Weight:</label>
								<input
									id='weightInput'
									type='number'
									name='weight'
									placeholder='Ejm: 12'
									value={newPokemon.weight}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.weight && <p className={style.error}>{error.weight}</p>}
							<div className={style.rowInfo}>
								<label>Img:</label>
								<input
									type='text'
									name='img'
									placeholder='Url de tu imagen'
									value={newPokemon.img}
									onChange={(e) => handlerChange(e)}
									autoComplete='off'
								/>
							</div>
							{error.img && <p className={style.error}>{error.img}</p>}

							<div className={style.selectInfo}>
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
							</div>

							<div className={style.selectInfo}>
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
							</div>
						</div>
					</div>

					<button
						disabled={disabledButton}
						className={style.buttonCreatePokemon}
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
