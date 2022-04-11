import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllTypes,
	filterByTypes,
	filterByOrder,
	filterByStrength,
	filterByCreated,
} from "../../redux/actions";

import style from "./styles/MenuFilter.module.css";

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

	const handlerFilterByOrder = (e) => {
		e.preventDefault();
		dispatch(filterByOrder(e.target.value));
		setCurrentPage(() => 1);
	};

	const handlerFilterByStrength = (e) => {
		e.preventDefault();
		dispatch(filterByStrength(e.target.value));
		setCurrentPage(() => 1);
	};

	const handlerFilterByCreated = (e) => {
		e.preventDefault();
		dispatch(filterByCreated(e.target.value));
		setCurrentPage(() => 1);
	};

	return (
		<div className={style.menuFilterContainer}>
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
				<select onChange={(e) => handlerFilterByCreated(e)}>
					<option value='all'>all</option>
					<option value='existing'>existing</option>
					<option value='created'>created</option>
				</select>
			</div>

			<div>
				<label>Order: </label>
				<select onChange={(e) => handlerFilterByOrder(e)}>
					<option value='pokedex'>pokedex</option>
					<option value='ascending'>a-z</option>
					<option value='descending'>z-a</option>
				</select>
			</div>

			<div>
				<label>Tipo de fuerza: </label>
				<select onChange={(e) => handlerFilterByStrength(e)}>
					<option value='default'>default</option>
					<option value='stronger'>stronger</option>
					<option value='weaker'>weaker</option>
				</select>
			</div>
		</div>
	);
};

export default MenuFilter;
