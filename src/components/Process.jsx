import SectionHeading from "@/components/others/sectionHeading";

const Process = () => (
	<section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
		{/* Heading */}
		<SectionHeading title="Process Section" />

		{/* Process Steps */}
		<div className="flex gap-6 overflow-x-auto lg:overflow-visible pb-5 scrollbar-hide">
			{[1, 2, 3].map((i) => (
				<div
					key={i}
					className="min-w-[250px] lg:min-w-0 flex-1 max-w-sm lg:max-w-none lg:w-[32%] p-6 flex flex-col items-start text-left"
				>
					<div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-muted font-bold text-2xl shadow">
						?
					</div>
					<h3 className="text-2xl font-semibold mb-2">Title</h3>
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
