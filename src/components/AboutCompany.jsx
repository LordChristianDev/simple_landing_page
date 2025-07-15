const AboutCompany = () => (
	<section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-24 py-20">
		{/* Image */}
		<div className="flex-1 w-full aspect-[3/2] bg-muted rounded-lg" />

		<div className="w-full lg:w-1/2 space-y-8">

			<div className="space-y-4">
				<h1 className="text-4xl md:text-5xl font-bold leading-tight">About Company</h1>
				<p className="text-muted-foreground text-base leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>

			{/* Data Boxes */}
			<div className="flex justify-between items-start gap-10 pt-5 overflow-x-auto">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="min-w-[2.375rem] flex flex-col gap-2 rounded-xl"
					>
						<h2 className="text-4xl font-bold text-primary">55%</h2>
						<p className="text-md text-muted-foreground">Data {i}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default AboutCompany;
