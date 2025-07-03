const FAQ = () => (
	<section className="faq-section">
		<div className="start-heading faq-title">
			<h1 className="md-b headline-text-medium">FAQ Section</h1>
			<p className="body-text-small">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div className="faq-all">
			<div className="faq-open">
				<div className="minus-icon"></div>
				<div className="faq-details">
					<h3 className="title-text-medium">Question 1</h3>
					<p className="ms-t body-text-small">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
			{[2, 3, 4].map(i => (
				<div className="faq-closed" key={i}>
					<div className="plus-icon"></div>
					<div className="faq-details">
						<h3 className="title-text-medium">Question {i}</h3>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default FAQ;