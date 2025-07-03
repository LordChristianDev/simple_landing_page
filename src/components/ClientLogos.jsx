const ClientLogos = () => (
	<section className="client-section">
		<div className="client-text">
			<h2 className="title-text-small client-text-content">
				WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE.
			</h2>
		</div>
		<div className="client-wrapper">
			<div className="fade fade-left"></div>
			<div className="fade fade-right"></div>
			<div className="client-carousel">
				{[...Array(10)].map((_, i) => (
					<img key={i} src="#" alt={`Logo ${i + 1}`} className="client-logo" />
				))}
			</div>
		</div>
	</section>
);

export default ClientLogos;
