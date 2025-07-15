import { Button } from "@/components/ui/button";

import SectionHeading from "@/components/others/sectionHeading";

const Services = () => (
	<section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
		{/* Heading */}
		<SectionHeading title="Services Section" />

		{/* Services Grid */}
		<div className="flex flex-wrap gap-6">
			{[1, 2, 3, 4].map((i) => (
				<div
					key={i}
					className="flex-shrink-0 grow basis-full sm:basis-[calc(50%-0.75rem)] bg-muted p-6 rounded-xl flex flex-col justify-between"
				>
					<div className="text-left mb-4">
						<h3 className="text-2xl font-semibold mb-2">Service {i}</h3>
						<p className="text-muted-foreground text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className="text-left mt-auto mb-4">
						<Button variant="outline" className="border-2 border-gray-800">
							Call to Action
						</Button>
					</div>

					<div className="aspect-[3/2] bg-white rounded-md w-full" />
				</div>
			))}
		</div>

	</section>
);

export default Services;
