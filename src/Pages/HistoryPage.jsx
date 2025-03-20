import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";

import main1 from "../assets/history_main1.png";
import main2 from "../assets/history_main2.png";
import line from "../assets/line.png";
import bg from "../assets/history_bg.png";
import img1 from "../assets/history1.png";
import img2 from "../assets/history2.png";
import img3 from "../assets/history3.png";
import img4 from "../assets/history4.png";
import img5 from "../assets/history5.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png"; // Renamed to remove space
import twitter from "../assets/twitter 3.png"; // Renamed to remove space
import youtube from "../assets/youtube.png";
import logo from "../assets/logo-removebg-preview.png";


const Footer = React.lazy(() => import("../components/Footer"));

const menuItems = [
	{ name: "Home", path: "/", mobileOnly: true },
	{ name: "History", path: "/history" },
	{ name: "Services", path: "/services" },
	{ name: "Studio", path: "/studio" },
	{ name: "Portfolio", path: "/portfolio" },
	{ name: "Blogs", path: "/blogs" },
	{ name: "Book Now", path: "/book-now" },
];

const images = [facebook, instagram, twitter, youtube];

const timelineData = [
	{
		image: img1,
		year: "2009-2011",
		title: "Founding Years: Gowri C.'s Journey from Freelancer to Entrepreneur",
		content:
			"From 2009 to 2011, the company was established by Gowri C., who initially started her journey as a freelancer. During this period, she collaborated with various independent studios, providing specialized services and honing her expertise in the industry. Working on diverse projects, she gained valuable experience and built a strong professional network, laying the foundation for the company's future growth. Her dedication and commitment during these formative years played a crucial role in shaping the company's direction and establishing its reputation in the field.",
	},
	{
		image: img2,
		year: "2012-2015",
		title: "Expanding Horizons with Major Brands",
		content:
			"Between 2012 and 2015, the company took a significant leap forward by securing projects with some of the biggest brands in the industry, including Amazon, Myntra, Flipkart, Bosch, and Infosys. This period marked a turning point in its growth, as it transitioned from working with independent studios to collaborating with renowned corporations. Despite having minimal resources and support, Gowri C. persevered with the strong backing of Vasanth, a skilled sound engineer. Together, they tackled high-profile projects, delivering exceptional quality and establishing the company's credibility in the market. This phase not only expanded their portfolio but also reinforced their reputation as a trusted service provider in the industry.",
	},
	{
		image: img3,
		year: "2015-2018",
		title: "Building a Studio and Expanding the Team",
		content:
			"Between 2015 and 2018, the company took a major step forward by renting a small space and setting up its very own studio. This milestone marked the beginning of a more structured and professional workspace, allowing for better collaboration and efficiency. In addition to its existing services, the company expanded its offerings to include video editing, further diversifying its capabilities to meet the growing demands of clients.",
		content2:
			"With this expansion came the need for a stronger workforce, leading to the team growing from just two members—Gowri C. and Vasanth—to a dedicated group of six talented professionals. This period was crucial in shaping the company's identity, as it moved from a small-scale operation to an emerging creative powerhouse. The growth in both infrastructure and talent paved the way for bigger opportunities, setting the stage for further success in the years to come.",
	},
	{
		image: img4,
		year: "2019-2023",
		title: "Major Breakthroughs and Industry Recognition",
		content:
			"Between 2019 and 2023, the company reached a significant milestone by securing a prestigious deal to work on Discovery Kannada, a major breakthrough that propelled its reputation in the industry. As part of this collaboration, the team successfully dubbed over 1,000 episodes, demonstrating their expertise and commitment to delivering high-quality content. This project not only showcased their technical and creative capabilities but also opened the doors to even greater opportunities.",
		content2:
			"Following this achievement, the company continued its upward trajectory, earning the trust of several major brands. They went on to work with renowned names such as Herbalife, OLA, Tanishq, and Cleartrip, further solidifying their position in the market. These collaborations highlighted the company's ability to cater to diverse industries, from e-commerce and jewelry to travel and wellness.",
		content3:
			"This period was marked by exponential growth, expanding the company’s reach and establishing it as a leading player in the industry. With a strong portfolio of successful projects and an ever-growing list of prestigious clients, the company set new benchmarks, paving the way for even greater achievements in the future.",
	},
	{
		image: img5,
		year: "2019-2023",
		title: "New Multi-Million Dollar Facility Grand Opening",
		content:
			"New As the company moves into 2024 and beyond, it continues to build on its legacy of excellence by collaborating with some of the world's most recognized brands. With an impressive track record and a growing reputation, the team is currently working on high-profile projects for Toyota, Hyundai, KPMG, and Discovery, further reinforcing its expertise across multiple industries, including automotive, finance, and media.",
		content2:
			"This ongoing phase reflects the company's unwavering commitment to delivering top-tier content and maintaining strong relationships with leading global brands. With a dedicated team and an ever-evolving approach to innovation, the company remains focused on scaling new heights, embracing emerging technologies, and expanding its influence in the industry. Looking ahead, the company is poised for even greater success, continuously pushing boundaries to set new standards of excellence.",
	},
];

const HistoryPage = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const [isClient, setIsClient] = useState(false);

	// Refs for animation targets
	const headingRef = useRef(null);
	const buttonRef = useRef(null);
	const paraRef = useRef(null);
	const titleRef = useRef(null);
	const lineRef = useRef(null);
	const desktopTimelineRef = useRef(null);
	const mobileTimelineItemsRef = useRef([]);

	// Set client-side rendering flag
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Clear refs for unmounting
	useEffect(() => {
		return () => {
			mobileTimelineItemsRef.current = [];
		};
	}, []);

	// Apply animations once component is mounted
	useEffect(() => {
		if (isClient) {
			// Heading Ref
			gsap.from(headingRef.current, {
				opacity: 0,
				y: -50,
				duration: 0.8,
				ease: "power3.out",
			});

			// Button Ref
			gsap.from(buttonRef.current, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				delay: 0.4,
				ease: "power3.out",
			});

			// Para ref
			gsap.from(paraRef.current, {
				opacity: 0,
				x: 50,
				duration: 0.8,
				ease: "power3.out",
				delay: 0.4,
				scrollTrigger: {
					trigger: paraRef.current,
					start: "top 90%",
				},
			});

			// Title animation
			gsap.from(titleRef.current, {
				opacity: 0,
				y: -30,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 80%",
				},
			});

			// Timeline line animation (desktop only)
			if (lineRef.current) {
				gsap.from(lineRef.current, {
					height: 0,
					duration: 3,
					ease: "power1.inOut",
					stagger: 0.2,
					scrollTrigger: {
						trigger: lineRef.current,

						start: "top 90%",
						// end: "bottom 20%",
						scrub: 1,
					},
				});
			}

			// Desktop timeline items animation
			if (desktopTimelineRef.current) {
				const timelineItems =
					desktopTimelineRef.current.querySelectorAll(".timeline-item");

				timelineItems.forEach((item, index) => {
					const direction = index % 2 === 0 ? -1 : 1;

					gsap.from(item, {
						opacity: 0,
						x: 50 * direction,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: item,
							start: "top 75%",
							toggleActions: "play none none none",
						},
					});

					// Animate year label with slight delay
					const yearLabel = item.querySelector(".year-label");
					if (yearLabel) {
						gsap.from(yearLabel, {
							opacity: 0,
							scale: 0.8,
							duration: 0.6,
							delay: 0.3,
							ease: "back.out(1.7)",
							scrollTrigger: {
								trigger: item,
								start: "top 75%",
								toggleActions: "play none none none",
							},
						});
					}

					// Animate content with slight delay
					const content = item.querySelector(".timeline-content");
					if (content) {
						gsap.from(content, {
							opacity: 0,
							y: 30,
							duration: 0.8,
							delay: 0.5,
							ease: "power3.out",
							scrollTrigger: {
								trigger: item,
								start: "top 75%",
								toggleActions: "play none none none",
							},
						});
					}
				});
			}

			// Mobile timeline items animation
			if (mobileTimelineItemsRef.current.length > 0) {
				mobileTimelineItemsRef.current.forEach((item) => {
					if (!item) return;

					// Stagger the entire item animation
					gsap.from(item, {
						opacity: 0,
						y: 40,
						duration: 0.8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: item,
							start: "top 95%",
							toggleActions: "play none none none",
						},
					});

					// Find elements within each timeline item
					const yearLabel = item.querySelector(".mobile-year");
					const title = item.querySelector(".mobile-title");
					const image = item.querySelector("img");
					const contentItems = item.querySelectorAll(".mobile-content");

					// Year label animation
					if (yearLabel) {
						gsap.from(yearLabel, {
							backgroundColor: "rgba(83, 19, 31, 0)",
							color: "rgba(255, 255, 255, 0)",
							duration: 0.6,
							delay: 0.4,
							ease: "power2.inOut",
							scrollTrigger: {
								trigger: item,
								start: "top 85%",
							},
						});
					}

					// Title animation
					if (title) {
						gsap.from(title, {
							opacity: 0,
							x: -20,
							duration: 0.6,
							delay: 0.6,
							ease: "power3.out",
							scrollTrigger: {
								trigger: item,
								start: "top 85%",
							},
						});
					}

					// Image animation
					if (image) {
						gsap.from(image, {
							opacity: 0,
							scale: 0.9,
							duration: 0.8,
							delay: 0.8,
							ease: "power3.out",
							scrollTrigger: {
								trigger: item,
								start: "top 85%",
							},
						});
					}

					// Content items animation with increasing delay
					if (contentItems.length > 0) {
						gsap.from(contentItems, {
							opacity: 0,
							y: 15,
							duration: 0.6,
							stagger: 0.4,
							delay: 0.9,
							ease: "power3.out",
							scrollTrigger: {
								trigger: item,
								start: "top 85%",
							},
						});
					}
				});
			}
		}
	}, [isClient]);

	// Add refs to timeline items
	const addToMobileRefs = (el) => {
		if (el && !mobileTimelineItemsRef.current.includes(el)) {
			mobileTimelineItemsRef.current.push(el);
		}
	};

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
						alt="menu"
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
									alt="close"
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
									{images.map((image, index) => (
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
					src={main1}
					alt="main1"
					loading="lazy"
				/>
				<div className="absolute w-full h-screen bg-black top-0 bg-opacity-[26%]"></div>
				<h1
					ref={headingRef}
					className="w-full absolute flex flex-col items-center z-10 text-[40px] lg:text-[72px] text-white font-bold font-jost
               top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					The History of Voice Box
				</h1>
				<button
					ref={buttonRef}
					aria-label="know-more"
					className="absolute w-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 px-8 mt-28 rounded-[20px] py-3 text-body-mobile bg-service_heading text-white  font-jost">
					Know more
				</button>
			</div>
			<div className="relative flex justify-center">
				<div
					ref={paraRef}
					className="lg:right-28 -translate-y-1/2 top-1/2 absolute  w-[90%] lg:w-[40%] font-jost text-white font-semibold text-body-mobile lg:text-body-desktop bg-black bg-opacity-[70%] rounded-[15px] text-left px-4 py-8">
					<p>
						Founded by industry veteran Gowri, VoiceBox has grown into one of
						Bangalore’s premier audio studios. With over 30 years of expertise
						in the audio industry, we have delivered more than 15,000 recordings
						over the past fifteen years, bringing smiles to countless clients. A
						milestone achievement includes dubbing over 1,000 episodes for
						Discovery Kannada, solidifying our reputation as a trusted name in
						the industry.
					</p>{" "}
					<br />
					<p>
						Renowned for our quick response times, exceptional turnaround rates,
						and unwavering commitment to quality, we have built lasting
						relationships with clients by offering flexibility, seamless
						coordination, and the expertise of skilled sound engineers.
					</p>
				</div>
				<img
					className="h-[600px] w-full object-cover"
					src={main2}
					alt="main2"
					loading="lazy"
				/>
			</div>
			{/* Content */}
			<div className="w-full py-8 lg:py-16 relative">
				<h1
					ref={titleRef}
					className="text-center px-4 text-choose_bg font-jost font-bold text-h2-mobile lg:text-h1-desktop">
					The Studios Voice Box History
				</h1>

				<img
					ref={lineRef}
					className="hidden lg:block absolute left-1/2 mt-10 -translate-x-1/2 h-[2850px]"
					src={line}
					alt="line"
					loading="lazy"
				/>

				{/* TimeLine - Desktop */}
				<div
					ref={desktopTimelineRef}
					className="hidden lg:block relative w-full px-16 mt-10">
					{timelineData.map((data, index) => (
						<div
							key={index}
							className={`timeline-item flex gap-20 ${
								index % 2 === 0 ? "flex-row-reverse" : "flex-row"
							}`}>
							<div className="w-1/2 px-20 space-y-4 relative">
								<div
									className={`absolute w-[120px] top-10 border-b-2 border-service_bg ${
										index % 2 === 0 ? "-left-[34px]" : "-right-[34px]"
									}`}></div>
								<div className="year-label text-center py-2 text-white font-bold font-jost text-h4-mobile lg:text-h4-desktop bg-service_bg">
									<p>{data.year}</p>
								</div>
								<div className="timeline-content">
									<div>
										<p className="font-jost text-body-mobile lg:text-h4-desktop font-bold text-choose_bg">
											{data.title}
										</p>
									</div>
									<div>
										<img
											className=""
											src={data.image}
											alt="data-img"
											loading="lazy"
										/>
									</div>
									<div className="space-y-4 text-left mt-4">
										<p className="font-jost text-subtext-mobile lg:text-subtext-tablet text-service_bg text-left">
											{data.content}
										</p>
										<p className="font-jost text-subtext-mobile lg:text-subtext-tablet text-service_bg text-left">
											{data.content2}
										</p>
										<p className="font-jost text-subtext-mobile lg:text-subtext-tablet text-service_bg text-left">
											{data.content3}
										</p>
									</div>
								</div>
							</div>
							<div className="w-1/2"></div>
						</div>
					))}
				</div>

				{/* TimeLine Mobile */}
				<div className="lg:hidden px-4 space-y-4">
					{timelineData.map((data, index) => (
						<div
							key={index}
							ref={addToMobileRefs}
							className="font-jost space-y-2">
							<div className="mobile-year py-2 bg-service_bg text-center">
								<p className="text-white font-bold text-h2-mobile">
									{data.year}
								</p>
							</div>
							<div>
								<p className="mobile-title font-bold text-choose_bg text-h3-mobile">
									{data.title}
								</p>
							</div>
							<div>
								<img
									src={data.image}
									alt="data-img"
									loading="lazy"
								/>
							</div>
							<div className="space-y-2 text=left">
								<p className="mobile-content text-service_bg text-subtext-mobile">
									{data.content}
								</p>
								<p className="mobile-content text-service_bg text-subtext-mobile">
									{data.content2}
								</p>
								<p className="mobile-content text-service_bg text-subtext-mobile">
									{data.content3}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<Suspense>
				<Footer />
			</Suspense>
		</div>
	);
};

export default HistoryPage;
