import React from "react";
import ".././assets/sass/main.css";
import emoji1 from ".././assets/images/1star.png";
import emoji2 from ".././assets/images/2star.png";
import emoji3 from ".././assets/images/3star.png";
import emoji4 from ".././assets/images/4star.png";
import emoji5 from ".././assets/images/5star.png";

const Stars = () => {
	return (
		<div className="stars">
			<div className="star">
				1
				<img src={emoji1} alt="emoji1" />
			</div>
			<div className="star">
				2
				<img src={emoji2} alt="emoji2" />
			</div>
			<div className="star">
				3
				<img src={emoji3} alt="emoji3" />
			</div>
			<div className="star">
				4
				<img src={emoji4} alt="emoji4" />
			</div>
			<div className="star">
				5
				<img src={emoji5} alt="emoji5" />
			</div>
		</div>
	);
};

export default Stars;
