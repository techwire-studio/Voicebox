import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import main from "../assets/connect_main.png";

gsap.registerPlugin(ScrollTrigger);

const Connect = () => {
	const titleRef = useRef(null);
	const imageRef = useRef(null);
	const formRef = useRef(null);
	const inputRefs = useRef([]);
	const buttonRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			// Title Animation
			gsap.from(titleRef.current, {
				opacity: 0,
				y: -50,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});

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

			// Form Fade-in
			gsap.from(formRef.current, {
				opacity: 0,
				y: 30,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});

			// Staggered Input Animation
			gsap.from(inputRefs.current, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.2,
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 95%",
					toggleActions: "play none none none",
				},
			});

			// Button Animation
			gsap.from(buttonRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 0.5,
				ease: "power3.out",
				delay: 0.5,
				scrollTrigger: {
					trigger: buttonRef.current,
					start: "top 100%",
					toggleActions: "play none none none",
				},
			});
		}
	}, [isClient]);

	return (
		<div className="bg-choose_bg w-full p-4 lg:p-8 lg:flex">
			<div className="lg:w-1/2">
				<h1
					ref={titleRef}
					className="font-jost text-h1-mobile lg:text-[72px] font-bold leading-[1.2] text-white lg:px-16">
					Get Free <br />
					Estimation!!
				</h1>
				<img
					ref={imageRef}
					className="h-[250px] lg:h-[400px]"
					src={main}
					alt="main-img"
					loading="lazy"
				/>
			</div>
			<div className="lg:w-1/2 lg:px-16">
				<p className="lg:mt-20 text-left lg:text-right border-b-2 pb-4 lg:pb-8 text-white font-jost text-body-mobile lg:text-body-desktop">
					Please fill out the form and we will get back to <br /> you in 24
					hours
				</p>
				<form
					ref={formRef}
					className="w-full mt-4 lg:mt-8 space-y-2 lg:space-y-6">
					<div className="hidden w-full lg:flex gap-8">
						<div className="w-1/2">
							<input
								type="text"
								placeholder="Full Name"
								className="py-4 px-4 w-full rounded-[7px]"
								ref={(el) => (inputRefs.current[0] = el)}
							/>
						</div>
						<div className="w-1/2">
							<input
								type="text"
								placeholder="Phone Number"
								className="py-4 px-4 w-full rounded-[7px]"
								ref={(el) => (inputRefs.current[1] = el)}
							/>
						</div>
					</div>
					<div className="lg:hidden w-full">
						<input
							type="text"
							placeholder="Email (optional)"
							className="py-4 px-4 w-full rounded-[7px]"
							ref={(el) => (inputRefs.current[2] = el)}
						/>
					</div>
					<div className="w-full">
						<input
							type="text"
							placeholder="Email (optional)"
							className="py-4 px-4 w-full rounded-[7px]"
							ref={(el) => (inputRefs.current[3] = el)}
						/>
					</div>
					<div className="w-full">
						<textarea
							placeholder="Message (optional)"
							className="py-4 px-4 w-full rounded-[7px] h-32"
							ref={(el) => (inputRefs.current[4] = el)}
						/>
					</div>
					<button
						ref={buttonRef}
						aria-label="stay-connected"
						className="text-white bg-black rounded-[20px] px-4 py-2 font-jost">
						Stay Connected
					</button>
				</form>
			</div>
		</div>
	);
};

export default Connect;
