import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterByTypes, { getAllTypes } from "../../actions";

const MenuFilter = ({ setCurrentPage }) => {
	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.typesList);

	useEffect(() => {
		dispatch(getAllTypes());
	}, [dispatch]);

	const handlerFilterByTypes = (e) => {
		e.preventDefault();
		dispatch(filterByTypes(e.target.value));
		setCurrentPage(() => 1);
	};

	return (
		<>
			<div>
				<label>Tipo de pokemon: </label>

				<select onChange={(e) => handlerFilterByTypes(e)}>
					<option value='all'>all</option>
					{allTypes?.map((type) => (
						<option key={type.name} value={type.name}>
							{type.name}
						</option>
					))}
				</select>
			</div>

			<div>
				<label>Tipo de creacion: </label>
				<select className='tipos de creacion'>
					<option value='all'>all</option>
					<option value='existing'>existing</option>
					<option value='created'>created</option>
				</select>
			</div>

			<div>
				<label>Order: </label>
				<select className='orden al renderizar'>
					<option value='pokedex'>pokedex</option>
					<option value='ascending'>a-z</option>
					<option value='descending'>z-a</option>
				</select>
			</div>

			<div>
				<label>Tipo de fuerza: </label>
				<select className='orden al renderizar'>
					<option value='default'>default</option>
					<option value='stronger'>stronger</option>
					<option value='weaker'>weaker</option>
				</select>
			</div>
		</>
	);
};

export default MenuFilter;
