import { Button } from "@/components/ui/button";

import SectionHeading from "@/components/others/sectionHeading";

const Services = () => (
	<section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
		{/* Heading */}
		<SectionHeading title="Services Section" />

		{/* Services Grid */}
		<div className="flex flex-wrap gap-10">
			{[1, 2, 3, 4].map((i) => (
				<div
					key={i}
					className="rounded-2xl p-6 bg-gray-200 bg-card flex flex-col gap-4"
				>
					<div>
						<h3 className="text-3xl font-semibold mb-2">Service {i}</h3>
						<p className="text-muted-foreground text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className="mt-auto">
						<Button variant="outline" className="border-2 border-gray-800">
							Call to Action
						</Button>

					</div>

					<div className="bg-white h-40 rounded-xl w-full aspect-[3/2]" />

				</div>
			))}
		</div>
	</section>
);

export default Services;
