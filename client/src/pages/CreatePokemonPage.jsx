import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTypes, createPokemon } from "../actions";

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

	const handlerChange = (e) => {
		setNewPokemon({
			...newPokemon,
			[e.target.name]: e.target.value,
		});
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
		navigate("/home");
	};

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
					</div>
					<div>
						<label>HP:</label>
						<input
							type='text'
							name='hp'
							value={newPokemon.hp}
							onChange={(e) => handlerChange(e)}
						/>
					</div>
					<div>
						<label>Attack:</label>
						<input
							type='text'
							name='attack'
							value={newPokemon.attack}
							onChange={(e) => handlerChange(e)}
						/>
					</div>
					<div>
						<label>Defense:</label>
						<input
							type='text'
							name='defense'
							value={newPokemon.defense}
							onChange={(e) => handlerChange(e)}
						/>
					</div>
					<div>
						<label>Speed:</label>
						<input
							type='text'
							name='speed'
							value={newPokemon.speed}
							onChange={(e) => handlerChange(e)}
						/>
					</div>
					<div>
						<label>Height:</label>
						<input
							type='text'
							name='height'
							value={newPokemon.height}
							onChange={(e) => handlerChange(e)}
						/>
					</div>
					<div>
						<label>Weight:</label>
						<input
							type='text'
							name='weight'
							value={newPokemon.weight}
							onChange={(e) => handlerChange(e)}
						/>
					</div>
					<div>
						<label>Img:</label>
						<input
							type='text'
							name='img'
							value={newPokemon.img}
							onChange={(e) => handlerChange(e)}
						/>
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
					<button onClick={(e) => handlerCreatePokemon(e)}>
						CREAR POKEMON
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePokemonPage;
