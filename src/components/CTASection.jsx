import { Button } from "@/components/ui/button";

const CTASection = () => (
	<section className="w-full px-6 md:px-12 lg:px-24 py-16">
		<div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-muted rounded-2xl p-10">
			{/* Text Content */}
			<div className="flex-1 space-y-6">
				<h1 className="text-3xl font-bold">CTA Heading</h1>
				<p className="text-muted-foreground text-base">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<Button size="lg">Primary CTA</Button>
			</div>

			{/* Image Box */}
			<div className="flex-1 bg-white rounded-xl min-h-[25rem] w-full" />
		</div>
	</section>
);

export default CTASection;
