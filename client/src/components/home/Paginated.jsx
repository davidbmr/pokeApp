import React from "react";
import styles from "./Paginated.module.css";

const Paginated = ({ pageNumber, amountPerPage, totalAmount }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<div>
				<button className={styles.currentButton}>prev</button>
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
				<button className={styles.currentButton}>next</button>
			</div>
		</div>
	);
};

export default Paginated;
