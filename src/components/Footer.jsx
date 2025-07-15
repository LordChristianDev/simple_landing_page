
import Logo from "./others/logo";

const Footer = () => (
	<footer className="w-full bg-muted px-6 md:px-12 lg:px-24 py-16 space-y-12">
		{/* Top section */}
		<div className="flex flex-wrap gap-10">
			<div className="flex-1 min-w-[260px] space-y-5">

				<Logo />

				<p className="text-sm text-muted-foreground max-w-[60ch]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>

			</div>

			{/* Link columns */}
			<div className="flex flex-wrap justify-start gap-10">
				{["Pages", "Contact", "Socials"].map((cat) => (
					<div key={cat} className="min-w-[120px] space-y-3">
						<h3 className="text-sm font-semibold">{cat}</h3>
						{Array.from({ length: 3 }).map((_, n) => (
							<a
								key={n}
								href="#"
								className="text-sm text-muted-foreground hover:underline block"
							>
								Sample {cat}
							</a>
						))}
					</div>
				))}
			</div>


		</div>

		<hr className="border-border" />

		{/* Bottom metadata */}
		<div className="flex flex-wrap items-center justify-center md:justify-between lg:justify-between gap-5 text-sm text-muted-foreground">
			<p>&copy; 2025 Company Name. All rights reserved.</p>

			<div className="flex gap-6">
				<a href="#" className="hover:underline">
					Privacy&nbsp;Policy
				</a>
				<a href="#" className="hover:underline">
					Terms&nbsp;&amp;&nbsp;Conditions
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
