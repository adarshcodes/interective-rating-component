import React from "react";
import ".././assets/sass/main.css";

const Stars = ({ starData, currentStar, selectedStar }) => {
	return (
		<div className="stars">
			{starData.map((stars) => {
				return (
					<div
						className={`star ${
							selectedStar === stars.id ? "star-selected" : ""
						}`}
						key={stars.id}
						id={`star-${stars.id}`}
						onClick={(event) => currentStar(event, stars.id)}
					>
						{stars.value}
						<img src={stars.imgSrc} alt="emojies" />
					</div>
				);
			})}
		</div>
	);
};

export default Stars;
