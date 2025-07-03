const Hero = () => (
	<section className="top-section">
		<div className="hero-section">
			<div className="trusted-container">
				<div className="circle-container">
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
				</div>
				<div className="trusted-text">
					<small className="label-text-small">Trusted by</small>
					<p className="label-text-medium">200+ Customers</p>
				</div>
			</div>
			<div className="hero-text">
				<h1 className="headline-text-large">High Converting Heading Comes Here</h1>
			</div>
			<div className="hero-paragraph">
				<p className="body-text-small">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="hero-buttons">
				<button className="hero-action-btn">Primary CTA</button>
				<button className="hero-action-outlined-btn">Secondary CTA</button>
			</div>
		</div>
		<div className="video-image"></div>
	</section>
);

export default Hero;