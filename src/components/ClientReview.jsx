import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/review1.webp";
import img2 from "../assets/review2.webp";
import img3 from "../assets/review3.webp";
import ring from "../assets/ring.webp";
import star from "../assets/stars.png";

gsap.registerPlugin(ScrollTrigger);

const datas = [
	{
		image: img1,
		name: "Balaji Manu",
		review:
			"Wonder set, great place to have a voice recording done. Experienced professional",
	},
	{
		image: img2,
		name: "Neehar N L N",
		review:
			"Excellent studio for media production. Best sound engineer I have worked with. Definitely, one of the best in the business.",
	},
	{
		image: img3,
		name: "Srikanth Shroff",
		review:
			"Good Works and amazing sound quality recording know for many years and recommend to work on continues projects.",
	},
];

const ClientReview = () => {
	const [isClient, setIsClient] = useState(false);

	// Create refs for all elements that need animation
	const titleRef = useRef(null);
	const headingRef = useRef(null);
	const descriptionRef = useRef(null);
	const leftButtonRef = useRef(null);
	const rightButtonRef = useRef(null);
	const reviewsContainerRef = useRef(null);
	const reviewRefs = useRef([]);

	// Set isClient to true on component mount
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Run animations when isClient is true
	useEffect(() => {
		if (isClient) {
			const isMobile = window.innerWidth < 768;
			// Left side animations
			gsap.from(titleRef.current, {
				opacity: 0,
				x: -50,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 85%",
				},
			});

			gsap.from(headingRef.current, {
				opacity: 0,
				y: 30,
				duration: 1.2,
				ease: "power3.out",
				delay: 0.2,
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top 85%",
				},
			});

			gsap.from(descriptionRef.current, {
				opacity: 0,
				y: 30,
				duration: 1,
				ease: "power3.out",
				delay: 0.4,
				scrollTrigger: {
					trigger: descriptionRef.current,
					start: "top 85%",
				},
			});

			// Button animations
			if (leftButtonRef.current) {
				gsap.from(leftButtonRef.current, {
					opacity: 0,
					scale: 0.5,
					duration: 0.8,
					ease: "back.out(1.7)",
					delay: 0.6,
					scrollTrigger: {
						trigger: leftButtonRef.current,
						start: "top 85%",
					},
				});
			}

			if (rightButtonRef.current) {
				gsap.from(rightButtonRef.current, {
					opacity: 0,
					scale: 0.5,
					duration: 0.8,
					ease: "back.out(1.7)",
					delay: 0.6,
					scrollTrigger: {
						trigger: rightButtonRef.current,
						start: "top 85%",
					},
				});
			}

			// Review cards animations
			if (reviewsContainerRef.current) {
				gsap.from(reviewRefs.current, {
					opacity: 0,
					y: 50,
					stagger: isMobile ? 0.6 : 0.2,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: reviewsContainerRef.current,
						start: "top 80%",
					},
				});
			}
		}
	}, [isClient]);

	return (
		<div className="w-full px-4 lg:px-8 py-4 lg:py-8 lg:flex">
			<div className="lg:w-1/2 lg:px-8">
				<p
					ref={titleRef}
					className="font-jost text-body-mobile lg:text-body-desktop text-service_heading border-b-2 border-b-service_heading w-fit">
					Client Review
				</p>
				<h1
					ref={headingRef}
					className="text-text_red font-jost text-h4-mobile lg:text-[64px] font-semibold leading-[1.2] mt-6">
					What They Say About Us?
				</h1>
				<p
					ref={descriptionRef}
					className="text-subtext-mobile lg:text-body-desktop font-jost text-left mt-2 lg:mt-6">
					Clients always praise our precise sound and prompt service, noting our
					clear dedication and superb audio quality every time. They
					consistently admire our service for its truly brilliant sound
				</p>
				<button
					ref={leftButtonRef}
					aria-label="know-more"
					className="hidden lg:block font-jost mt-6 px-6 py-2 text-white bg-black_button rounded-[20px]">
					Know More
				</button>
			</div>
			<div className="lg:w-1/2 mt-4 lg:mt-0">
				<div
					ref={reviewsContainerRef}
					className="grid lg:grid-cols-1 gap-8 lg:px-32">
					{datas.map((data, index) => (
						<div
							key={index}
							ref={(el) => (reviewRefs.current[index] = el)}
							className="border-2 border-text_red rounded-[15px] border-opacity-[65%] p-2 lg:p-4 bg-review_bg bg-opacity-[10%]">
							<div className="flex relative justify-left gap-4">
								<img
									className="relative w-16"
									src={ring}
									alt="ring-img"
									loading="lazy"
								/>
								<img
									className="absolute w-12 left-2 top-2"
									src={data.image}
									alt="data-img"
									loading="lazy"
								/>
								<div>
									<p className="text-body-mobile lg:text-body-desktop font-jost mt-2 lg:mt-1">
										{data.name}
									</p>
									<img
										className="h-4"
										src={star}
										alt="star-img"
										loading="lazy"
									/>
								</div>
							</div>
							<p className="font-jost text-[10px] lg:text-[14px] mt-2">
								{data.review}
							</p>
						</div>
					))}
				</div>
				<button
					ref={rightButtonRef}
					aria-label="know-more"
					className="lg:hidden font-jost mt-6 px-6 py-2 text-white bg-black_button rounded-[20px]">
					Know More
				</button>
			</div>
		</div>
	);
};

export default ClientReview;
