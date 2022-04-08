import React from "react";
import "./styles/Loading.css";

const Loading = () => {
	return (
		<div className='loader' role='progressbar' aria-label='loading pokethings'>
			<div className='pokeball-container'>
				<div className='pokeball'></div>
			</div>
		</div>
	);
};

export default Loading;
