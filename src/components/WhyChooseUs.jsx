import { CheckCircle, XCircle } from "lucide-react";

import SectionHeading from "@/components/others/sectionHeading";

const WhyChooseUs = () => (
	<section className="px-6 md:px-12 lg:px-24 py-20">
		{/* Heading */}
		<SectionHeading title="Why Choose Us Section" />


		<div className="flex flex-col lg:flex-row gap-6 w-full">
			{/* What Others Provide */}
			<div className="flex-1 p-6 rounded-xl shadow bg-white space-y-6">
				<h3 className="text-2xl font-semibold">What Others Provide</h3>
				<div className="flex flex-col gap-4">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="flex items-start gap-5">
							{/* X Icon */}
							<span className="relative w-4 h-4">
								<span className="absolute w-full h-[2px] bg-gray-300 top-1/2 left-0 rotate-45"></span>
								<span className="absolute w-full h-[2px] bg-gray-300 top-1/2 left-0 -rotate-45"></span>
							</span>
							<p className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt.
							</p>
						</div>
					))}
				</div>
			</div>

			{/* What We Provide */}
			<div className="flex-1 p-6 rounded-xl bg-gray-100 space-y-6">
				<h3 className="text-2xl font-semibold">What We Provide</h3>
				<div className="flex flex-col gap-4">
					{[1, 2, 3, 4].map((i) => (
						<div key={i} className="flex items-start gap-5">
							<span className="relative w-4 h-4">
								<span className="absolute left-1 top-[1px] w-[6px] h-[12px] border-[2px] border-gray-500 border-t-0 border-l-0 rotate-45"></span>
							</span>
							<p className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt.
							</p>
						</div>
					))}
				</div>
			</div>
		</div>

	</section>
);

export default WhyChooseUs;
