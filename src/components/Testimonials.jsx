import SectionHeading from "@/components/others/sectionHeading";

const Testimonials = () => (
	<section className="px-6 md:px-12 lg:px-24 py-20">
		{/* Heading */}
		<SectionHeading title="Testimonial Section" />

		{/* Testimonials List */}
		<div className="flex flex-col md:flex-row gap-8">
			{['Fun with Flags', 'Breaking Bad', 'Peaky Curtains'].map((i) => (
				<div key={i} className="flex-1 flex flex-col gap-6 bg-muted rounded-xl p-6">

					<div className="relative w-full aspect-[3/2] bg-white rounded-lg flex items-center justify-center">
						<div className="absolute w-0 h-0 border-l-[1rem] border-l-black border-t-[0.625rem] border-t-transparent border-b-[0.625rem] border-b-transparent" />
					</div>

					<div className="space-y-2">
						<p className="text-sm text-muted-foreground leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<h3 className="text-lg font-semibold">Name</h3>
						<p className="text-md text-muted-foreground">CEO of {i}</p>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default Testimonials;
