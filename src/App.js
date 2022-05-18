import "./assets/sass/main.css";
import Stars from "./components/Stars";
import starIcon from "./assets/images/icon-star.svg";

function App() {
	return (
		<main className="card-container">
			<div className="card">
				<div className="card-first-page">
					<div className="star-img">
						<img src={starIcon} alt="star" />
					</div>
					<div className="text">
						<h2 className="heading-main">How did we do?</h2>
						<p className="review-text">
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>
						<Stars />
					</div>
					<div className="submit-button">Submit</div>
				</div>
			</div>
		</main>
	);
}

export default App;
