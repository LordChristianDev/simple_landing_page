import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import Logo from "./others/logo";

const Header = () => {
	return (
		<header className="flex justify-between items-center pt-7 lg:px-24 px-6 py-3">
			<Logo />

			{/* Desktop Nav */}
			<nav className="hidden md:flex lg:gap-10 gap-4">
				<a href="#">Features</a>
				<a href="#">How it Works</a>
				<a href="#">Why Choose Us</a>
				<a href="#">Reviews</a>
				<a href="#">FAQs</a>
			</nav>

			<div className="hidden md:block">
				<Button size="lg">CTA Title</Button>
			</div>

			{/* Mobile Nav */}
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>

					<SheetContent side="right" className="w-3/4">
						<nav className="flex flex-col px-4 space-y-4 mt-6">
							<a href="#">Features</a>
							<a href="#">How it Works</a>
							<a href="#">Why Choose Us</a>
							<a href="#">Reviews</a>
							<a href="#">FAQs</a>
						</nav>

						<div className="mt-6 px-4">
							<Button className="w-full">CTA Title</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Header;
