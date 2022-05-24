import Stars from "./Stars";

export default function Rate({
	starIcon,
	starData,
	selectedStar,
	currentStar,
	submit,
}) {
	return (
		<div className="card-first-page">
			<div className="star-img">
				<img src={starIcon} alt="star" />
			</div>
			<div className="text">
				<h2 className="heading-main">How did we do?</h2>
				<p className="review-text">
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
				<Stars
					starData={starData}
					currentStar={currentStar}
					selectedStar={selectedStar}
				/>
			</div>
			<div className="submit-button" onClick={submit}>
				Submit
			</div>
		</div>
	);
}
