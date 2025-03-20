import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import main from "../assets/history_main.webp";

gsap.registerPlugin(ScrollTrigger);

const historyData = [
	{
		number: "1000+",
		text: "Episodes",
	},
	{
		number: "1500+",
		text: "Recordings",
	},
	{
		number: "150+",
		text: "Brands",
	},
];

const History = () => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const textRef = useRef(null);
	const statsRef = useRef([]);
	const buttonRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			// Image Animation
			gsap.from(imageRef.current, {
				opacity: 0,
				x: -50,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: imageRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});

			// Title Animation
			gsap.from(titleRef.current, {
				opacity: 0,
				y: -50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});

			// Text Animation
			gsap.from(textRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
				delay: 0.2,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});

			// Stats Animation (Staggered)
			gsap.from(statsRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.2,
				scrollTrigger: {
					trigger: statsRef.current[0],
					start: "top 90%",
					toggleActions: "play none none none",
				},
			});

			// Button Animation (Scale-up effect)
			gsap.from(buttonRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 0.5,
				ease: "power3.out",
				delay: 0.5,
				scrollTrigger: {
					trigger: buttonRef.current,
					start: "top 95%",
					toggleActions: "play none none none",
				},
			});
		}
	}, [isClient]);

	return (
		<div className="bg-white w-full px-4 lg:px-8 py-4 lg:py-8 lg:flex h-fit">
			<p className="lg:hidden font-jost text-body-mobile lg:text-body-desktop text-service_heading border-b-2 border-b-service_heading w-fit">
				History
			</p>
			<div className="w-full lg:w-[45%] mt-4 lg:mt-0 lg:flex lg:justify-center lg:items-center relative">
				{/* Top-Left Arrow */}
				<div className="absolute top-0 lg:top-2 left-2 lg:left-4 w-14 h-14 border-t-2 border-l-2 border-text_red"></div>

				{/* Bottom-Right Arrow */}
				<div className="absolute bottom-4 lg:bottom-8 right-2 lg:right-4 w-14 h-14 border-b-2 border-r-2 border-text_red"></div>

				<img
					ref={imageRef}
					src={main}
					alt="main-image"
					className="w-full h-auto"
					loading="lazy"
				/>
			</div>

			<div className="w-full lg:w-[55%]">
				<p className="hidden lg:block mt-8 font-jost text-body-mobile lg:text-body-desktop text-service_heading border-b-2 border-b-service_heading w-fit">
					History
				</p>
				<p
					ref={titleRef}
					className="mt-4 font-jost text-[40px] lg:text-[72px] text-text_red font-semibold w-full lg:w-[80%] leading-[1.2]">
					Our Legacy in Audio Excellence
				</p>
				<p
					ref={textRef}
					className="font-jost text-body-mobile lg:text-body-desktop text-left mt-4 leading-[2.5]">
					Founded by industry veteran Gowri with more than 30 years of
					experience, VoiceBox Productions has become one of Bangalore’s most
					trusted names in audio dubbing. With over 15,000 recordings and a
					landmark achievement of dubbing 1,000+ episodes for Discovery Kannada,
					we turn every project into a masterpiece of sound.
				</p>
				<div className="w-full grid grid-cols-3 mt-10">
					{historyData.map((data, index) => (
						<div
							key={index}
							ref={(el) => (statsRef.current[index] = el)}
							className="border-l-2 border-service_heading text-h1-mobile lg:text-h1-desktop font-jost pb-2 pl-2">
							{data.number}
							<p className="text-subtext-mobile lg:text-subtext-[10px] font-jost text-service_heading">
								{data.text}
							</p>
						</div>
					))}
				</div>
				<button
					aria-label="know-more"
					ref={buttonRef}
					className="bg-black text-white font-jost px-6 py-2 rounded-[20px] mt-10">
					Know More
				</button>
			</div>
		</div>
	);
};

export default History;
