import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, createPokemon } from "../actions";

const CreatePokemonPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTypes());
	}, [dispatch]);

	const allTypes = useSelector((state) => state.typesList);

	return (
		<div>
			<div className='container form'>
				<form>
					<div>
						<label>Nombre:</label>
						<input type='text' />
					</div>
					<div>
						<label>HP:</label>
						<input type='text' />
					</div>
					<div>
						<label>Attack:</label>
						<input type='text' />
					</div>
					<div>
						<label>Defense:</label>
						<input type='text' />
					</div>
					<div>
						<label>Speed:</label>
						<input type='text' />
					</div>
					<div>
						<label>Height:</label>
						<input type='text' />
					</div>
					<div>
						<label>Weight:</label>
						<input type='text' />
					</div>
					<div>
						<label>Img:</label>
						<input type='text' />
					</div>

					<div>
						<label value=''>Choose your first type:</label>
						<select>
							<option>First type</option>
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
						<label value=''>Choose your second type:</label>
						<select>
							<option>Second type</option>
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
					<button>CREAR POKEMON</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePokemonPage;
