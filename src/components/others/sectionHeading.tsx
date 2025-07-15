interface SectionHeadingProps {
	title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => (
	<div className={`mb-16 text-center max-w-3xl mx-auto gap-3`}>
		<h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
		<p className="text-muted-foreground text-base md:text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.
		</p>
	</div>
);

export default SectionHeading;
