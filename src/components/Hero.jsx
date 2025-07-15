import { Button } from "@/components/ui/button";

const Hero = () => (
	<section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 gap-10">

		{/*Hero Text */}
		<div className="flex-1 py-3 space-y-8">

			<div className="flex items-center gap-6">
				{/* Overlapping Circles */}
				<div className="flex -space-x-3">
					<span className="w-10 h-10 bg-gray-500 rounded-full inline-block opacity-70" />
					<span className="w-10 h-10 bg-gray-500 rounded-full inline-block opacity-70" />
					<span className="w-10 h-10 bg-gray-500 rounded-full inline-block opacity-70" />
				</div>

				<div>
					<p className="text-sm text-muted-foreground">Trusted by</p>
					<p className="text-base font-medium">200+ Customers</p>
				</div>
			</div>


			<h1 className="text-[4rem] md:text-[4rem] font-bold leading-tight">
				High Converting Heading Comes Here
			</h1>

			<p className="text-sm md:text-base text-muted-foreground">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<div className="flex gap-4 flex-wrap">
				<Button size="lg">Primary CTA</Button>
				<Button variant="outline" size="lg">Secondary CTA</Button>
			</div>
		</div>

		{/* Image Placeholder*/}
		<div className="flex-1 w-full aspect-[3/2] bg-gray-200 rounded-lg shadow-inner" />
	</section>
);

export default Hero;
