import React, { Suspense, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import main from "../assets/studio_main.png";
import img1 from "../assets/studio_img1.png";
import img2 from "../assets/studio_img2.png";
import img3 from "../assets/studio_img3.png";
import img4 from "../assets/studio_img4.png";
import img5 from "../assets/studio_img5.png";
import img6 from "../assets/studio_img6.png";
import img7 from "../assets/studio_img7.png";
import img8 from "../assets/studio_img8.png";
import bottom from "../assets/studio_bottom.png";
import play from "../assets/play.png";
import design from "../assets/design.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png"; // Renamed to remove space
import twitter from "../assets/twitter 3.png"; // Renamed to remove space
import youtube from "../assets/youtube.png";
import logo from "../assets/logo-removebg-preview.png";


const Footer = React.lazy(() => import("../components/Footer"));

const StudioPage = () => {
	const location = useLocation();

	const menuItems = [
		{ name: "Home", path: "/", mobileOnly: true },
		{ name: "History", path: "/history" },
		{ name: "Services", path: "/services" },
		{ name: "Studio", path: "/studio" },
		{ name: "Portfolio", path: "/portfolio" },
		{ name: "Blogs", path: "/blogs" },
		{ name: "Book Now", path: "/book-now" },
	];

	const images = [
		{
			image: img1,
			title: "Live Sound Recording Studio ",
		},
		{
			image: img2,
			title: "Mastering Studio",
		},
		{
			image: img3,
			title: "Mastering Studio",
		},
		{
			image: img4,
			title: "Music Studio ",
		},
		{
			image: img5,
			title: "Multi-Track Recording Studio ",
		},
		{
			image: img6,
			title: "Binaural Recording Studio",
		},
		{
			image: img7,
			title: "Acoustic Recordings Studio",
		},
		{
			image: img8,
			title: "Sound Recording Studio",
		},
	];

	const images2 = [facebook, instagram, twitter, youtube];

	const [menuOpen, setMenuOpen] = useState(false);

	// Refs for animation targets
	const gridRef = useRef(null);
	const imageRefs = useRef([]);
	const infoSectionRef = useRef(null);
	const infoImageRef = useRef(null);
	const infoTitleRef = useRef(null);
	const infoTextRef = useRef(null);
	const statsBoxRef = useRef(null);
	const designElementRef = useRef(null);

	// Client-side check
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Grid section animations
	useEffect(() => {
		if (isClient && gridRef.current) {
			const isMobile = window.innerWidth < 768;
			// Animate the entire grid container
			gsap.from(gridRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: gridRef.current,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			});

			// Staggered animation for each image and text
			gsap.from(imageRefs.current, {
				opacity: 0,
				y: 80,
				scale: 0.9,
				duration: 1.2,
				stagger: isMobile ? 0.8 : 0.4,
				ease: "back.out(1.7)",
				scrollTrigger: {
					trigger: gridRef.current,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			});
		}
	}, [isClient]);

	// Info section animations
	useEffect(() => {
		if (isClient && infoSectionRef.current) {
			// Timeline for the info section
			const infoTl = gsap.timeline({
				scrollTrigger: {
					trigger: infoSectionRef.current,
					start: "top 70%",
					toggleActions: "play none none none",
				},
			});

			// Main container animation
			infoTl
				.from(infoSectionRef.current, {
					opacity: 0,
					scale: 0.95,
					duration: 0.8,
					ease: "power2.out",
				})

				// Image animation
				.from(
					infoImageRef.current,
					{
						opacity: 0,
						x: -50,
						duration: 0.8,
						ease: "power2.out",
					},
					"-=0.4",
				)

				// Title and text animations
				.from(
					infoTitleRef.current,
					{
						opacity: 0,
						y: 30,
						duration: 0.6,
						ease: "power3.out",
					},
					"-=0.3",
				)
				.from(
					infoTextRef.current,
					{
						opacity: 0,
						y: 20,
						duration: 0.6,
						ease: "power3.out",
					},
					"-=0.3",
				)

				// Stats box animation
				.from(
					statsBoxRef.current,
					{
						opacity: 0,
						y: 40,
						x: -20,
						duration: 1,
						ease: "back.out(1.4)",
					},
					"-=0.2",
				)

				// Design element animation
				.from(
					designElementRef.current,
					{
						opacity: 0,
						scale: 0,
						rotation: -45,
						duration: 1.2,
						ease: "elastic.out(1, 0.3)",
					},
					"-=0.6",
				);

			// Add hover effect for stats box
			if (statsBoxRef.current) {
				statsBoxRef.current.addEventListener("mouseenter", () => {
					gsap.to(statsBoxRef.current, {
						y: -5,
						boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
						duration: 0.3,
					});
				});

				statsBoxRef.current.addEventListener("mouseleave", () => {
					gsap.to(statsBoxRef.current, {
						y: 0,
						boxShadow: "none",
						duration: 0.3,
					});
				});
			}
		}
	}, [isClient]);

	return (
		<div className="w-full">
			{/* Top Div */}
			<div className="relative">
				<div className="hidden backdrop-blur-md absolute bg-navbar_bg w-full z-10 bg-opacity-[29%] text-white lg:flex items-center justify-between  px-16">
					{/* Logo on the Left */}
					<div className="flex items-center">
						<Link to="/">
							<img
								src={logo}
								alt="Logo"
								className="h-auto w-32"
								loading="lazy"
							/>
						</Link>
					</div>

					{/* Centered Menu Links */}
					<div className="flex justify-end mr-28 flex-1 gap-16 text-body-mobile lg:text-body-desktop">
						{menuItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`cursor-pointer ${
									location.pathname === item.path
										? "text-red-500 font-semibold"
										: ""
								} ${item.mobileOnly ? "lg:hidden" : ""}`}>
								{item.name}
							</Link>
						))}
					</div>

					{/* Empty Div to Balance Layout */}
					{/* <div className="w-[10%]"></div> */}
				</div>
				<div className="absolute z-20 top-8 right-4 lg:hidden">
					<img
						onClick={(e) => {
							e.preventDefault();
							setMenuOpen(true);
						}}
						src={menu}
						alt="Menu"
						loading="lazy"
					/>

					<AnimatePresence>
						{menuOpen && (
							<motion.div
								initial={{ x: "100%", opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: "100%", opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="fixed top-0 left-0 w-full h-screen  z-20 bg-menu_bg ">
								<img
									onClick={(e) => {
										e.preventDefault();
										setMenuOpen(false);
									}}
									className="w-8 absolute right-4 top-8"
									src={close}
									alt="Close Menu"
									loading="lazy"
								/>
								<div className="flex flex-col mt-28 pl-8 gap-4 text-white">
									{menuItems.map((item) => (
										<Link
											key={item.path} // Ensures unique key
											to={item.path}
											className={`cursor-pointer ${
												location.pathname === item.path
													? "text-red-500 font-semibold"
													: ""
											}`}>
											{item.name}
										</Link>
									))}
								</div>
								<div className="w-[90%] m-auto mt-4 border-b-2 border-white"></div>
								<div className="grid grid-cols-4 w-fit gap-4 items-center px-4 mt-4">
									{images2.map((image, index) => (
										<div key={index}>
											<img
												className="w-6"
												src={image}
												alt="image"
												loading="lazy"
											/>
										</div>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<img
					className="w-full h-screen object-cover"
					src={main}
					alt=""
				/>
				<div className="absolute w-full h-screen bg-black top-0 bg-opacity-[26%]"></div>
				<h1
					className="absolute z-10 text-[40px] lg:text-[72px] text-white font-bold font-jost
               top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					Studio
				</h1>
			</div>
			<div
				ref={gridRef}
				className="w-full p-4 lg:p-16 grid lg:grid-cols-2 text-center lg:gap-20 gap-10">
				{images.map((image, index) => (
					<div
						className="flex flex-col m-auto"
						key={index}
						ref={(el) => (imageRefs.current[index] = el)}>
						<img
							className="lg:h-[500px]"
							src={image.image}
							alt="image"
							loading="lazy"
						/>
						<p className="font-jost text-h3-mobile lg:text-h4-desktop font-bold text-choose_bg mt-2 lg:mt-8">
							{image.title}
						</p>
					</div>
				))}
			</div>

			{/* Info Section */}
			<div
				ref={infoSectionRef}
				className="hidden lg:block w-full h-full lg:px-8 px-4 py-8 lg:py-16 bg-choose_bg relative">
				<div className="relative w-full bg-service_bg lg:flex py-8 p-4 lg:p-8 rounded-[50px]">
					<div className="relative lg:w-1/2">
						<img
							ref={infoImageRef}
							className="lg:h-[300px] w-full"
							src={bottom}
							alt="bottom"
							loading="lazy"
						/>
					</div>
					<div className="lg:w-1/2 relative p-4">
						<p
							ref={infoTitleRef}
							className="font-jost text-white font-bold text-h1-mobile lg:text-h1-desktop">
							See How We Work
						</p>
						<p
							ref={infoTextRef}
							className="font-jost text-white text-body-mobile lg:text-body-desktop mt-4">
							VoiceBox Productions delivers crisp audio sound uniting 30 years
							of expertise with modern techniques to perfect every record.
						</p>
						<div
							ref={statsBoxRef}
							className="w-full lg:flex bg-white p-4 rounded-[85px] mt-4 absolute lg:-left-20">
							<div>
								<img
									className="rounded-full border-2 border-service_bg p-4 w-16"
									src={play}
									alt="play-icon"
									loading="lazy"
								/>
							</div>
							<div className="lg:flex w-full justify-center gap-10">
								<div className="text-center">
									<p className="text-subtext-mobile lg:text-subtext-desktop font-jost text-choose_bg">
										Mucisian Visit
									</p>
									<p className="text-h1-mobile lg:text-h1-mobile font-jost">
										350+
									</p>
								</div>
								<div className="text-center">
									<p className="text-subtext-mobile lg:text-subtext-desktop font-jost text-choose_bg">
										Mucisian Visit
									</p>
									<p className="text-h1-mobile lg:text-h1-mobile font-jost">
										350+
									</p>
								</div>
								<div className="text-center">
									<p className="text-subtext-mobile lg:text-subtext-desktop font-jost text-choose_bg">
										Mucisian Visit
									</p>
									<p className="text-h1-mobile lg:text-h1-mobile font-jost">
										350+
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					ref={designElementRef}
					className="absolute bottom-4 right-10">
					<img
						src={design}
						alt="design-img"
						loading="lazy"
					/>
				</div>
			</div>

			<Suspense>
				<Footer />
			</Suspense>
		</div>
	);
};

export default StudioPage;
