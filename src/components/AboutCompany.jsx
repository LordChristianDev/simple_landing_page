const AboutCompany = () => (
	<section className="about-company-section">

		<div className="video-image about-company-image"></div>

		<div className="about-company-details">

			<div className="about-company-text">
				<h1 className="md-b headline-text-large">About Company</h1>
				<p className="body-text-small">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>

			<div className="about-company-data">
				{[1, 2, 3].map(i => (
					<div className="data-container" key={i}>
						<h2 className="headline-text-medium">55%</h2>
						<p className="body-text-medium">Data {i}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default AboutCompany;