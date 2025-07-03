const Services = () => (
	<section className="services-section">

		<div className="section-heading">
			<h1 className="md-b headline-text-medium">Services Section</h1>
			<p className="body-text-small">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>

		<div className="services-all">
			{[1, 2, 3, 4].map(i => (
				<div className="service-container" key={i}>
					<div className="service-label">
						<h3 className="md-b headline-text-small">Service {i}</h3>
						<p className="body-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>

					<div className="service-button">
						<button className="action-outlined-btn service-outlined-btn">Call to Action</button>
					</div>
					<div className="md-b service-image"></div>
				</div>
			))}
		</div>
	</section>
);

export default Services;