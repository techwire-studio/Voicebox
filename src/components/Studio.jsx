import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import img1 from "../assets/studio1.png";
import img2 from "../assets/BHFO.gif";
import img3 from "../assets/studio3.png";
import img4 from "../assets/studio4.png";
import img5 from "../assets/studio5.png";
import img6 from "../assets/studio6.png";
import img7 from "../assets/studio7.png";
import img8 from "../assets/studio8.png";
import img9 from "../assets/studio9.png";
import img10 from "../assets/studio10.png";

const Studio = () => {
	const [isClient, setIsClient] = useState(false);

	// Refs for top section
	const topLeftMainRef = useRef(null);
	const topLeftSecondaryRef = useRef(null);
	const topRightMainTopRef = useRef(null);
	const topRightMainBottomRef = useRef(null);
	const topRightSecondaryTopRef = useRef(null);
	const topRightSecondaryBottomRef = useRef(null);

	// Refs for bottom section
	const bottomTopLeftRef = useRef(null);
	const bottomTopRightRef = useRef(null);
	const bottomBottomLeftRef = useRef(null);
	const bottomBottomRightRef = useRef(null);

	// Refs for animation targets
	const galleryRef = useRef(null);
	const div1Ref = useRef(null);
	const div2Ref = useRef(null);
	const div3Ref = useRef(null);

	// Set isClient to true after component mounts
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Apply animations when on client
	useEffect(() => {
		if (isClient) {
			// Top Left Main card animation
			gsap.from(topLeftMainRef.current, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: topLeftMainRef.current,
					start: "top 85%",
				},
			});

			// Top Left Secondary card animation
			gsap.from(topLeftSecondaryRef.current, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				delay: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: topLeftSecondaryRef.current,
					start: "top 90%",
				},
			});

			// Top Right Main Top card animation
			gsap.from(topRightMainTopRef.current, {
				opacity: 0,
				x: 50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: topRightMainTopRef.current,
					start: "top 85%",
				},
			});

			// Top Right Main Bottom card animation
			gsap.from(topRightMainBottomRef.current, {
				opacity: 0,
				x: 50,
				duration: 0.8,
				delay: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: topRightMainBottomRef.current,
					start: "top 90%",
				},
			});

			// Top Right Secondary Top card animation
			gsap.from(topRightSecondaryTopRef.current, {
				opacity: 0,
				x: 50,
				duration: 0.8,
				delay: 0.3,
				ease: "power3.out",
				scrollTrigger: {
					trigger: topRightSecondaryTopRef.current,
					start: "top 85%",
				},
			});

			// Top Right Secondary Bottom card animation
			gsap.from(topRightSecondaryBottomRef.current, {
				opacity: 0,
				x: 50,
				duration: 0.8,
				delay: 0.4,
				ease: "power3.out",
				scrollTrigger: {
					trigger: topRightSecondaryBottomRef.current,
					start: "top 90%",
				},
			});

			// ====== BOTTOM SECTION ANIMATIONS ======

			// Bottom Top Left card animation
			gsap.from(bottomTopLeftRef.current, {
				opacity: 0,
				scale: 0.95,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: bottomTopLeftRef.current,
					start: "top 85%",
				},
			});

			// Bottom Top Right card animation with slight delay
			gsap.from(bottomTopRightRef.current, {
				opacity: 0,
				scale: 0.95,
				duration: 1,
				delay: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: bottomTopRightRef.current,
					start: "top 85%",
				},
			});

			// Bottom row animations with stagger effect (right to left)
			gsap.from(bottomBottomLeftRef.current, {
				opacity: 0,
				x: -50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: bottomBottomLeftRef.current,
					start: "top 85%",
				},
			});

			gsap.from(bottomBottomRightRef.current, {
				opacity: 0,
				x: 50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: bottomBottomRightRef.current,
					start: "top 85%",
				},
			});

			// Text animations for all cards
			const textElements = document.querySelectorAll(".card-title");
			textElements.forEach((el) => {
				gsap.from(el, {
					opacity: 0,
					y: 15,
					duration: 0.6,
					delay: 0.4,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
				});
			});

			// Main gallery container animation
			gsap.from(galleryRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: galleryRef.current,
					start: "top 90%",
				},
			});

			// First div animations with staggered items
			gsap.from(div1Ref.current.querySelectorAll(".gallery-item"), {
				opacity: 0,
				scale: 0.9,
				y: 20,
				duration: 0.7,
				stagger: 0.15,
				ease: "back.out(1.2)",
				scrollTrigger: {
					trigger: div1Ref.current,
					start: "top 85%",
				},
			});

			// Second div animations
			gsap.from(div2Ref.current.querySelectorAll(".gallery-item"), {
				opacity: 0,
				scale: 0.9,
				y: 20,
				duration: 0.7,
				stagger: 0.15,
				ease: "back.out(1.2)",
				delay: 0.3,
				scrollTrigger: {
					trigger: div2Ref.current,
					start: "top 85%",
				},
			});

			// Third div animations
			gsap.from(div3Ref.current.querySelectorAll(".gallery-item"), {
				opacity: 0,
				scale: 0.9,
				y: 20,
				duration: 0.7,
				stagger: 0.15,
				ease: "back.out(1.2)",
				delay: 0.5,
				scrollTrigger: {
					trigger: div3Ref.current,
					start: "top 85%",
				},
			});

			// Optional: Subtle parallax effect for images on scroll
			const imageContainers = document.querySelectorAll(".studio-card");
			imageContainers.forEach((container) => {
				const image = container.querySelector("img");
				if (image) {
					ScrollTrigger.create({
						trigger: container,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
						onUpdate: (self) => {
							gsap.to(image, {
								y: self.progress * 20, // Subtle 20px movement
								duration: 0.1,
							});
						},
					});
				}
			});
		}
	}, [isClient]);

	return (
		<div className="w-full py-8 px-8 flex flex-col justify-center items-center bg-service_bg">
			<p className=" font-jost text-body-mobile lg:text-body-desktop text-service_heading border-b-2 border-b-service_heading w-fit">
				Studio Branch
			</p>
			<h1 className="text-choose_bg font-jost font-semibold text-h1-mobile lg:text-h1-desktop mt-4">
				Visit Our Studio Branch
			</h1>
			<p className="mt-4 font-jost text-body-mobile lg:text-body-desktop text-white">
				Visit our modern studio branch featuring advanced equipment, dedicated
				expert support, and exceptional recording environments.
			</p>
			{/* Gallery */}
			<div className="hidden lg:block w-full px-4 py-4 lg:px-8 lg:py-8 space-y-8">
				{/* Top */}
				<div className="w-full h-[900px] flex gap-8">
					{/* top-left */}
					<div className="h-full w-1/3 flex flex-col gap-8">
						<div
							ref={topLeftMainRef}
							className="studio-card w-full h-2/3 relative shadow-[0_0_25px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
							<div className="absolute z-20 w-full h-full bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="relative h-full w-full object-cover"
								src={img1}
								alt="img1"
								loading="lazy"
							/>
							<p className="card-title absolute text-white font-jost z-30 text-h2-desktop w-1/2 bottom-12 left-6">
								Live Sound Recording
							</p>
						</div>

						<div
							ref={topLeftSecondaryRef}
							className="studio-card w-full h-1/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
							<div className="absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
							<img
								className="h-full w-full"
								src={img3}
								alt="img3"
								loading="lazy"
							/>
							<p className="card-title absolute text-white font-jost z-30 text-h2-desktop bottom-12 left-6">
								Multi-Track Recording
							</p>
						</div>
					</div>

					{/* Top-right */}
					<div className="h-full w-2/3 flex gap-8">
						<div className="h-full w-1/2 flex flex-col gap-8">
							<div
								ref={topRightMainTopRef}
								className="studio-card w-full h-1/3 relative flex justify-center items-center shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
								<div className="absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
								<img
									className="h-full w-full object-cover"
									src={img2}
									alt="img2"
									loading="lazy"
								/>
								<p className="card-title absolute text-white font-jost z-30 text-h2-desktop w-2/3 text-center top-20">
									The Studio Experience We Provide
								</p>
							</div>

							<div
								ref={topRightMainBottomRef}
								className="studio-card w-full h-2/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
								<div className="absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
								<img
									className="h-full w-full object-cover"
									src={img4}
									alt="img4"
									loading="lazy"
								/>
								<p className="card-title absolute text-white font-jost z-30 text-h2-desktop bottom-12 left-6">
									Music Studio
								</p>
							</div>
						</div>

						<div className="h-full w-1/2 flex flex-col gap-8">
							<div
								ref={topRightSecondaryTopRef}
								className="studio-card w-full h-1/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
								<div className="absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
								<img
									className="h-full w-full"
									src={img5}
									alt="img5"
									loading="lazy"
								/>
								<p className="card-title absolute text-white font-jost z-30 text-h2-desktop bottom-12 left-6">
									Mastering Studio
								</p>
							</div>

							<div
								ref={topRightSecondaryBottomRef}
								className="studio-card w-full h-2/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
								<div className="absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
								<img
									className="h-[600px] w-full object-cover"
									src={img6}
									alt="img6"
									loading="lazy"
								/>
								<p className="card-title absolute text-white font-jost z-30 text-h2-desktop bottom-12 left-6">
									Binaural Recording
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Bottom */}
				<div className="w-full h-[600px] space-y-8">
					<div className="w-full h-1/2 flex gap-8">
						<div
							ref={bottomTopLeftRef}
							className="studio-card h-full w-1/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
							<div className="card-overlay absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
							<img
								className="h-full w-full object-cover"
								src={img7}
								alt="img7"
								loading="lazy"
							/>
							<p className="card-title absolute text-white font-jost z-30 text-h2-desktop w-1/2 bottom-12 left-6">
								Electronic Recordings
							</p>
						</div>

						<div
							ref={bottomTopRightRef}
							className="studio-card h-full w-2/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
							<div className="card-overlay absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
							<img
								className="h-full w-full object-cover"
								src={img8}
								alt="img8"
								loading="lazy"
							/>
							<p className="card-title absolute text-white font-jost z-30 text-h2-desktop bottom-12 left-6">
								Overdubbing Studio
							</p>
						</div>
					</div>

					<div className="w-full h-1/2 flex gap-8">
						<div
							ref={bottomBottomLeftRef}
							className="studio-card h-full w-2/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
							<div className="card-overlay absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
							<img
								className="h-full w-full object-cover object-[50%_30%]"
								src={img9}
								alt="img9"
								loading="lazy"
							/>
							<p className="card-title absolute text-white font-jost z-30 text-h2-desktop bottom-12 left-6">
								Acoustic Recordings <br /> Studio
							</p>
						</div>

						<div
							ref={bottomBottomRightRef}
							className="studio-card h-full w-1/3 relative shadow-[0_0_15px_rgba(0,0,0,0.8)] shadow-red-500 rounded-[15px] overflow-hidden">
							<div className="card-overlay absolute z-20 w-full h-full bg-black bg-opacity-[50%]"></div>
							<img
								className="h-full w-full object-cover"
								src={img10}
								alt="img10"
								loading="lazy"
							/>
							<p className="card-title absolute text-white font-jost z-30 text-h2-desktop w-2/3 bottom-12 left-6">
								Sound Recording Studio
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Galley Mobile */}
			<div
				ref={galleryRef}
				className="lg:hidden w-full flex flex-col gap-4 mt-8">
				{/* Div 1 */}
				<div
					ref={div1Ref}
					className="w-full h-[600px] flex gap-4">
					<div className="h-full w-1/2 space-y-4">
						<div className="gallery-item relative w-full h-2/3">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img1}
								alt="img1"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Live Sound <br /> Recording
							</p>
						</div>
						<div className="gallery-item w-full h-1/3 relative">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img3}
								alt="img3"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Multi-Track <br /> Recording
							</p>
						</div>
					</div>
					<div className="h-full w-1/2 space-y-4">
						<div className="gallery-item w-full h-1/3 relative flex justify-center items-center">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img2}
								alt="img2"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 text-center">
								The Studio Experience We Provide
							</p>
						</div>
						<div className="gallery-item w-full h-2/3 relative">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img4}
								alt="img4"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Music Studio{" "}
							</p>
						</div>
					</div>
				</div>

				{/* Div 2 */}
				<div
					ref={div2Ref}
					className="w-full h-[400px] flex gap-4 mt-4">
					<div className="gallery-item h-full w-1/2 relative">
						<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
						<img
							className="h-full w-full object-cover object-[50%_30%] relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
							src={img6}
							alt="img6"
							loading="lazy"
						/>
						<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
							Binaural Recording
						</p>
					</div>
					<div className="h-full w-1/2 flex flex-col gap-4">
						<div className="gallery-item w-full h-1/2 relative">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img5}
								alt="img5"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Mastering Studio{" "}
							</p>
						</div>
						<div className="gallery-item w-full h-1/2 relative">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img7}
								alt="img7"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Electronic Recordings
							</p>
						</div>
					</div>
				</div>

				{/* Div 3 */}
				<div
					ref={div3Ref}
					className="w-full h-[400px] space-y-4">
					<div className="gallery-item w-full h-1/2 relative">
						<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
						<img
							className="h-full w-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
							src={img8}
							alt="img8"
							loading="lazy"
						/>
						<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
							Overdubbing <br /> Studio{" "}
						</p>
					</div>
					<div className="w-full h-1/2 flex gap-4">
						<div className="gallery-item h-full w-1/2 relative">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img9}
								alt="img9"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Sound Recording Studio{" "}
							</p>
						</div>
						<div className="gallery-item h-full w-1/2 relative">
							<div className="absolute w-full h-full z-10 bg-black bg-opacity-[50%] rounded-[15px]"></div>
							<img
								className="w-full h-full relative shadow-[0_0_15px_rgba(0,0,0,0.4)] shadow-red-500 rounded-[15px] overflow-hidden"
								src={img10}
								alt="img10"
								loading="lazy"
							/>
							<p className="absolute text-white font-jost text-h2-mobile z-20 bottom-8 left-2">
								Acoustic Recordings Studio{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Studio;
