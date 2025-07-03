const Process = () => (
	<section className="process-section">
		<div className="section-heading">
			<h1 className="md-b headline-text-medium">Process Section</h1>
			<p className="body-text-small">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div className="process-all">
			{[1, 2, 3].map(i => (
				<div className="process-container" key={i}>
					<div className="question-circle">?</div>
					<div className="process-label">
						<h3 className="ms-b title-text-medium">Title</h3>
						<p className="body-text-small">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Process;
