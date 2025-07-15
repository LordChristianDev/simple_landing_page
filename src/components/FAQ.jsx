import { Plus, Minus } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => (
	<section className="flex flex-col lg:flex-row gap-[3.75rem] px-[5vw] pt-[9.375rem]">

		<div className="flex-1 flex flex-col items-start space-y-4">
			<h1 className="text-4xl font-bold">FAQ Section</h1>
			<p className="text-muted-foreground text-base">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>

		{/* Accordion Column */}
		<div className="flex-2 w-full space-y-4">
			<Accordion type="single" collapsible defaultValue="item-1">

				{/* Opened by default */}
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-2xl font-semibold hover:no-underline">
						<span className="flex items-center gap-4">
							<Plus className="w-5 h-5 shrink-0" />
							Question 1
						</span>
					</AccordionTrigger>
					<AccordionContent className="text-muted-foreground text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</AccordionContent>
				</AccordionItem>

				{/* Closed Items */}
				{[2, 3, 4].map((i) => (
					<AccordionItem key={i} value={`item-${i}`}>
						<AccordionTrigger className="text-2xl font-semibold hover:no-underline">
							<span className="flex items-center gap-4">
								<Minus className="w-5 h-5 shrink-0" />Question {i}
							</span>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	</section>
);

export default FAQ;
