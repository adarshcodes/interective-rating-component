import React from "react";
import "./assets/sass/main.css";
import Rate from "./components/Rate";
import ThankYou from "./components/ThankYou";

import starIcon from "./assets/images/icon-star.svg";
import thanks from "./assets/images/illustration-thank-you.svg";
import emoji1 from "./assets/images/1star.png";
import emoji2 from "./assets/images/2star.png";
import emoji3 from "./assets/images/3star.png";
import emoji4 from "./assets/images/4star.png";
import emoji5 from "./assets/images/5star.png";

function App() {
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

	const [selectedStar, setSelectedStar] = React.useState(() => "");

	function currentStar(event, starId) {
		setSelectedStar(starId);
	}

	const [ratePage, setRatePage] = React.useState(true);

	function submitRatings() {
		if (selectedStar > 0) {
			setRatePage(!ratePage);

			if (!ratePage) {
				setSelectedStar(0);
			}
		}
	}

	return (
		<main className="card-container">
			<div className="card">
				{ratePage ? (
					<Rate
						starIcon={starIcon}
						starData={starData}
						selectedStar={selectedStar}
						currentStar={currentStar}
						submit={submitRatings}
					/>
				) : (
					<ThankYou
						submit={submitRatings}
						thanks={thanks}
						selectedStar={selectedStar}
					/>
				)}
			</div>
		</main>
	);
}

export default App;
