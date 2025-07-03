const WhyChooseUs = () => (
	<section className="why-choose-us-section">
		<div className="section-heading">
			<h1 className="md-b headline-text-medium">Why Choose Us Section</h1>
			<p className="body-text-small">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div className="why-choose-us-info">
			<div className="other-provide-container">
				<h3 className="title-text-medium">What Others Provide</h3>
				<div className="provide-details">
					{[1, 2, 3, 4].map(i => (
						<div className="provide-line" key={i}>
							<div className="wrong-icon"></div>
							<p className="body-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt..</p>
						</div>
					))}
				</div>
			</div>
			<div className="we-provide-container">
				<h3 className="title-text-medium">What We Provide</h3>
				<div className="provide-details">
					{[1, 2, 3, 4].map(i => (
						<div className="provide-line" key={i}>
							<div className="check-icon"></div>
							<p className="body-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt.</p>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default WhyChooseUs;