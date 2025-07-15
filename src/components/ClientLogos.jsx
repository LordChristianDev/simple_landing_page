const ClientLogos = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center lg:items-center py-12 px-6 md:px-12 lg:px-24 gap-8">
			{/* Heading */}
			<div className="w-full lg:w-[40%] text-center lg:text-left">
				<h2 className="text-[1.5rem] font-semibold">
					WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE
				</h2>
			</div>

			{/* Carousel */}
			<div className="relative w-full lg:w-[60%]">
				<div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
				<div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

				<div className="flex gap-12 overflow-x-auto scroll-smooth whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					{[...Array(10)].map((_, i) => (
						<img
							key={i}
							src="#"
							alt={`Logo ${i + 1}`}
							className="w-[4.5rem] sm:w-[4.75rem] h-[3.75rem] object-contain opacity-80 hover:opacity-100"
						/>
					))}
				</div>
			</div>
		</section>

	);
};

export default ClientLogos;
