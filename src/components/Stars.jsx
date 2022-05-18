import React from "react";
import ".././assets/sass/main.css";
import emoji1 from ".././assets/images/1star.png";
import emoji2 from ".././assets/images/2star.png";
import emoji3 from ".././assets/images/3star.png";
import emoji4 from ".././assets/images/4star.png";
import emoji5 from ".././assets/images/5star.png";

const Stars = () => {
	const starData = [
		{
			id: 1,
			value: 1,
			imgSrc: emoji1,
		},
		{
			id: 2,
			value: 2,
			imgSrc: emoji2,
		},
		{
			id: 3,
			value: 3,
			imgSrc: emoji3,
		},
		{
			id: 4,
			value: 4,
			imgSrc: emoji4,
		},
		{
			id: 5,
			value: 5,
			imgSrc: emoji5,
		},
	];

	// const [selectedStar, setSelectedStar] = React.useState([]);

	return (
		<div className="stars">
			{starData.map((stars) => {
				return (
					<div className="star" key={stars.id}>
						{stars.value}
						<img src={stars.imgSrc} alt="emojies" />
					</div>
				);
			})}
		</div>
	);
};

export default Stars;
