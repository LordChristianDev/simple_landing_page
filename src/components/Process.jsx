import SectionHeading from "@/components/others/sectionHeading";

const Process = () => (
	<section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
		{/* Heading */}
		<SectionHeading title="Process Section" />

		{/* Process Steps */}
		<div className="flex flex-wrap gap-8 justify-center lg:justify-between">
			{[1, 2, 3].map((i) => (
				<div
					key={i}
					className="w-full sm:w-[80%] lg:w-[32%] p-6 flex flex-col items-center lg:items-start text-center lg:text-left"
				>
					<div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gray-200 font-bold text-2xl shadow">
						?
					</div>
					<h3 className="text-3xl font-semibold mb-2">Title</h3>
					<p className="text-sm text-muted-foreground">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			))}
		</div>



	</section>
);

export default Process;
