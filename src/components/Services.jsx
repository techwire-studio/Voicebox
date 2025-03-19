import React, { useRef, useEffect, useState } from "react";
import img1 from "../assets/service1.webp";
import img2 from "../assets/service2.webp";
import img3 from "../assets/service3.webp";
import img4 from "../assets/service4.webp";
import arrow from "../assets/arrow.webp";

import gsap from "gsap";

const services = [
	{
		image: img1,
		title: "Sound Mixing",
		content: "Audio tones blended crisply with care, yielding purer clarity",
	},
	{
		image: img2,
		title: "Voice Recording",
		content: "Vocal takes taped using our clean noiselessly documented audio.",
	},
	{
		image: img3,
		title: "Audio Editing",
		content: "Sound tracks perfected precisely to craft flawless final cuts.",
	},
	{
		image: img4,
		title: "Track Mastering",
		content: "Sound layers harmonized exquisitely to yield a vibrant finish.",
	},
];

const Services = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const titleRef = useRef(null);
	const paraRef = useRef(null);
	const buttonRef = useRef(null);
	const cardsRef = useRef([]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient && sectionRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%", // Triggers when section is 80% visible
					toggleActions: "play none none none", // Play once
				},
			});

			tl.from(headingRef.current, {
				opacity: 0,
				x: -50, // Slide from left
				duration: 0.8,
				ease: "power3.out",
			})
				.from(
					titleRef.current,
					{
						opacity: 0,
						x: -50, // Slide from left
						duration: 0.8,
						ease: "power3.out",
					},
					"-=0.5",
				) // Overlap timing
				.from(
					paraRef.current,
					{
						opacity: 0,
						x: 50, // Slide from right
						duration: 0.8,
						ease: "power3.out",
					},
					"-=0.5",
				)
				.from(
					buttonRef.current,
					{
						opacity: 0,
						scale: 0.9, // Slight zoom-in effect
						duration: 0.6,
						ease: "power3.out",
					},
					"-=0.5",
				);
		}
	}, [isClient]);

	useEffect(() => {
		if (isClient && cardsRef.current.length > 0) {
			const isMobile = window.innerWidth < 768;

			gsap.from(cardsRef.current, {
				opacity: 0,
				y: 50, // Move up while appearing
				duration: 0.8,
				ease: "power3.out",
				stagger: isMobile ? 0.6 : 0.4, // Delay between each card
				scrollTrigger: {
					trigger: cardsRef.current[0]?.parentNode,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		}
	}, [isClient]);
	return (
		<div
			ref={sectionRef}
			className="w-full bg-service_bg px-8 lg:px-16 py-8 overflow-hidden">
			{/* Section Heading */}
			<p
				ref={headingRef}
				className="font-jost text-body-mobile lg:text-body-desktop text-service_heading border-b-2 border-b-service_heading w-fit">
				Our Service
			</p>

			{/* Div 1 */}
			<div className="w-full lg:flex h-fit py-8 border-b border-b-text_red">
				{/* Title */}
				<div className="w-full lg:w-[40%]">
					<h1
						ref={titleRef}
						className="text-h1-mobile lg:text-[72px] text-text_red font-jost font-semibold">
						The Best Studio <br /> Service Ever
					</h1>
				</div>

				{/* Description & Button */}
				<div className="w-full lg:w-[60%] lg:px-8">
					<p
						ref={paraRef}
						className="font-jost text-white text-body-mobile lg:text-body-desktop text-left mt-4">
						We specialize in comprehensive audio production—from studio booking
						and professional recording to expert mixing, mastering, and even
						video editing. Whether you’re creating corporate ads, digital
						content, TV or radio jingles, we have the tools and talent to
						elevate your project.
					</p>
					<button
						aria-label="know-more"
						ref={buttonRef}
						className="bg-white px-10 py-2 text-body-mobile lg:text-body-desktop rounded-[20px] font-jost mt-8">
						Know More
					</button>
				</div>
			</div>
			{/* Div 2 */}
			<div className="w-full h-fit grid lg:grid-cols-4 gap-4 lg:gap-10 pt-8 lg:pt-16 pb-0 lg:pb-8">
				{services.map((service, index) => (
					<div
						key={index}
						ref={(el) => (cardsRef.current[index] = el)}
						className="border-text_red border-opacity-[65%] border-2 rounded-[15px] p-4">
						<img
							className="rounded-full p-2 w-16 bg-text_red"
							src={service.image}
							alt="service-img"
							loading="lazy"
						/>
						<p className="font-jost text-white text-body-mobile lg:text-body-desktop mt-4">
							{service.title}
						</p>
						<p className="font-jost text-white text-subtext-mobile lg:text-subtext-desktop mt-4">
							{service.content}
						</p>
						<p className="font-jost text-service_heading text-subtext-mobile lg:text-subtext-desktop mt-4 flex items-center gap-4">
							Learn More{" "}
							<img
								className="h-2 w-8"
								src={arrow}
								alt="arrow-icon"
								loading="lazy"
							/>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
