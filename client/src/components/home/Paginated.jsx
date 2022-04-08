import React from "react";
import style from "./styles/Paginated.module.css";

const Paginated = ({ pageNumber, amountPerPage, totalAmount, currentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
		pageNumbers.push(i);
	}

	const prevHandler = () => {
		if (currentPage <= 1) return;
		pageNumber(currentPage - 1);
	};
	const nextHandler = () => {
		if (currentPage >= pageNumbers.length) return;
		pageNumber(currentPage + 1);
	};

	return (
		<div className={style.paginatedContainer}>
			<div>
				<button className={style.currentButton} onClick={() => prevHandler()}>
					Prev
				</button>
				{pageNumbers &&
					pageNumbers.map((num) => {
						return (
							<button
								key={num}
								className={
									currentPage === num ? style.buttonActive : style.numberButton
								}
								onClick={() => pageNumber(num)}
							>
								{num}
							</button>
						);
					})}
				<button className={style.currentButton} onClick={() => nextHandler()}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Paginated;
