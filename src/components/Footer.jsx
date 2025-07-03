const Footer = () => (
	<footer className="footer-section">
		<div className="footer-info">
			<div className="footer-title">
				<div className="logo"></div>
				<p className="body-text-small">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<div className="footer-data">
				{["Pages", "Contact", "Socials"].map((cat, i) => (
					<div className="footer-category" key={i}>
						<h3 className="ms-b title-text-small">{cat}</h3>
						{[1, 2, 3].map(n => (
							<a key={n} href="#">Sample {cat}</a>
						))}
					</div>
				))}
			</div>
		</div>
		<hr className="horizontal-line" />
		<div className="footer-metadata">
			<div className="footer-copyright">
				<p>&copy; 2025 Company Name. All Rights Reserved.</p>
			</div>
			<div className="footer-agreements">
				<a className="privacy-policy" href="#">Privacy Policy</a>
				<a className="terms-and-conditions" href="#">Terms & Conditions</a>
			</div>
		</div>
	</footer>
);

export default Footer;