import React, { Suspense, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import main from "../assets/servive_main.webp";
import img1 from "../assets/service_page1.webp";
import img2 from "../assets/service_page2.webp";
import img3 from "../assets/service_page3.webp";
import img4 from "../assets/service_page4.webp";
import img5 from "../assets/service_page5.webp";
import menu from "../assets/menu.png";
import close from "../assets/close.webp";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png";
import twitter from "../assets/twitter 3.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/logo-removebg-preview.webp";

const Footer = React.lazy(() => import("../components/Footer"));

const ServicesPage = () => {
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

	const datas = [
		{
			image: img1,
			title: "Audio Dubbing",
			content:
				"We provide high-quality audio services for corporate projects, IVRS, digital content, TV, and radio jingles. Our team ensures professional mixing and mastering in all languages, including international ones. We also specialize in dubbing for movies, series, and documentaries, delivering crystal-clear audio that enhances the overall production. Whether it's voice-over work or full-fledged dubbing, we guarantee top-notch results tailored to your specific needs.",
		},
		{
			image: img2,
			title: "Translation",
			content:
				"Our translation services offer fast turnaround times (TATs) with the help of highly skilled and professional translators. We provide precise and culturally accurate translations from any language to any other language. Whether it's business documents, subtitles, marketing materials, or technical content, we ensure clarity and consistency. Our team is experienced in handling complex translation projects efficiently, ensuring your message resonates with the intended audience.",
		},
		{
			image: img3,
			title: "Video Editing",
			content:
				"Our in-house video editor is highly skilled in transforming raw footage into polished, high-quality videos. Using industry-leading software like Adobe Premiere Pro, we refine videos to match your vision and enhance storytelling. Whether it’s corporate presentations, advertisements, social media content, or personal projects, we focus on seamless editing, color correction, special effects, and sound design to achieve professional results. Let us bring your creative ideas to life with precision and finesse.",
		},
		{
			image: img4,
			title: "Studio Booking",
			content:
				"Transform your ideas into compelling audio experiences with our expert podcast production services. At Taperfox Studio, we guide you through every step of the process—from brainstorming and scripting to recording, editing, and distribution. Our team ensures crisp, clear sound quality and engaging content that keeps your listeners coming back for more. We understand the Indian market’s nuances, helping you create podcasts that resonate with diverse audiences across the country.",
		},
		{
			image: img5,
			title: "Green Mat recording",
			content:
				"Transform your ideas into compelling audio experiences with our expert podcast production services. At Taperfox Studio, we guide you through every step of the process—from brainstorming and scripting to recording, editing, and distribution. Our team ensures crisp, clear sound quality and engaging content that keeps your listeners coming back for more. We understand the Indian market’s nuances, helping you create podcasts that resonate with diverse audiences across the country.",
		},
	];

	const images = [facebook, instagram, twitter, youtube];

	const [menuOpen, setMenuOpen] = useState(false);

	const [isClient, setIsClient] = useState(false);
	// Refs for animation targets
	const heroTitleRef = useRef(null);
	const heroRef = useRef(null);
	const servicesRef = useRef(null);
	const serviceItemsRef = useRef([]);

	// Set client-side rendering flag
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Hero section animations
	useEffect(() => {
		if (isClient && heroRef.current && heroTitleRef.current) {
			// Animate hero overlay
			gsap.from(heroRef.current, {
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
			});

			// Animate hero title
			gsap.from(heroTitleRef.current, {
				y: 50,
				opacity: 0,
				duration: 1,
				delay: 0.5,
				ease: "power3.out",
			});
		}
	}, [isClient]);

	// Services section animations
	useEffect(() => {
		if (isClient && servicesRef.current) {
			// Animate services container
			gsap.from(servicesRef.current, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: servicesRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		}
	}, [isClient]);

	// Service items staggered animations
	useEffect(() => {
		if (isClient && serviceItemsRef.current.length > 0) {
			const isMobile = window.innerWidth < 768;

			serviceItemsRef.current.forEach((item, index) => {
				if (!item) return;

				const imageElement = item.querySelector(".service-image");
				const textElement = item.querySelector(".service-text");

				// Timeline for each service item
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				});

				// Direction based on even/odd index
				const direction = index % 2 === 0 ? -1 : 1;

				// Image animation
				tl.from(imageElement, {
					x: direction * 50,
					opacity: 0,
					duration: 0.8,
					ease: "power3.out",
					stagger: isMobile ? 0.4 : 0.2,
				});

				// Text animation (slightly delayed)
				tl.from(
					textElement,
					{
						x: direction * -50,
						opacity: 0,
						duration: 0.8,
						stagger: isMobile ? 0.4 : 0.2,
						ease: "power3.out",
					},
					"-=0.5",
				);
			});
		}
	}, [isClient]);

	return (
		<div className="w-full">
			{/* Hero Section */}
			<div
				className="relative"
				ref={heroRef}>
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
								className="fixed top-0 left-0 w-full h-screen z-20 bg-menu_bg">
								<img
									onClick={(e) => {
										e.preventDefault();
										setMenuOpen(false);
									}}
									className="w-8 absolute right-4 top-8"
									src={close}
									alt="Close menu"
									loading="lazy"
								/>
								<div className="flex flex-col mt-28 pl-8 gap-4 text-white">
									{menuItems.map((item) => (
										<Link
											key={item.path}
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
									{images.map((image, index) => (
										<div key={index}>
											<img
												className="w-6"
												src={image}
												alt={`Social media ${index + 1}`}
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
					alt="Services hero"
					loading="lazy"
				/>
				<div className="absolute w-full h-screen bg-black top-0 bg-opacity-[26%]"></div>
				<h1
					ref={heroTitleRef}
					className="absolute z-10 text-[40px] lg:text-[72px] text-white font-bold font-jost
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					Services
				</h1>
			</div>

			{/* Services Content */}
			<div
				ref={servicesRef}
				className={`w-full p-4 lg:p-16 space-y-8 lg:space-y-16`}>
				{datas.map((data, index) => (
					<div
						className={`lg:flex ${
							index % 2 === 0 ? "flex-row" : "flex-row-reverse"
						}`}
						key={index}
						ref={(el) => (serviceItemsRef.current[index] = el)}>
						<div className="lg:w-[50%] service-image">
							<img
								src={data.image}
								alt={data.title}
								className="w-full h-auto"
								loading="lazy"
							/>
						</div>
						<div className="lg:w-[50%] text-left lg:p-8 mt-2 lg:mt-16 service-text">
							<p className="text-h4-mobile lg:text-h3-desktop font-jost text-choose_bg font-bold">
								{data.title}
							</p>
							<p className="font-jost text-body-mobile lg:text-body-desktop text-service_bg mt-2 lg:mt-4">
								{data.content}
							</p>
						</div>
					</div>
				))}
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				<Footer />
			</Suspense>
		</div>
	);
};

export default ServicesPage;
