const ThankYou = ({ submit, thanks, selectedStar }) => {
	return (
		<div className="thank-you-container">
			<div className="re-rate" onClick={submit}>
				<i class="fa-solid fa-arrow-rotate-right reload"></i>
			</div>
			<img src={thanks} alt="thanks-illustrations" />
			<div className="stars-given">
				<p>You selected {selectedStar} out of 5</p>
			</div>
			<h2 className="thanks-heading">Thank you!</h2>
			<p className="thanks-para">
				We appreciate you taking the time to give a rating. if you ever need
				more support , don't hesitate to get in touch!
			</p>
		</div>
	);
};

export default ThankYou;
