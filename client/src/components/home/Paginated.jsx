import React from "react";
import styles from "./Paginated.module.css";

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
		<div>
			<div>
				<button className={styles.currentButton} onClick={() => prevHandler()}>
					Prev
				</button>
				{pageNumbers &&
					pageNumbers.map((num) => {
						return (
							<button
								key={num}
								className={styles.numberButton}
								onClick={() => pageNumber(num)}
							>
								{num}
							</button>
						);
					})}
				<button className={styles.currentButton} onClick={() => nextHandler()}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Paginated;
