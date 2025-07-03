const Testimonials = () => (
	<section className="testimonial-section">
		<div className="section-heading">
			<h1 className="md-b headline-text-medium">Testimonial Section</h1>
			<p className="body-text-small">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div className="testimonial-all">
			{[1, 2, 3].map(i => (
				<div className="testimonial-container" key={i}>
					<div className="testimonial-video"></div>
					<div className="testimonial-details">
						<p className="md-b body-text-small">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<h3 className="ms-b title-text-medium">Name</h3>
						<p className="body-text-medium">CEO of Company {i}</p>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Testimonials;