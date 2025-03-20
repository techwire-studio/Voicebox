import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import logo from "../assets/footer_logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png";
import twitter from "../assets/twitter 3.png";
import youtube from "../assets/youtube.png";
import mail from "../assets/mail.png";
import logo from "../assets/logo-removebg-preview.png";

import gmail from "../assets/email_footer.png";
import mobile from "../assets/phone-call_footer.png";
import gps from "../assets/gps_footer.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const images = [facebook, instagram, twitter, youtube];

const Footer = () => {
	const [isClient, setIsClient] = useState(false);

	// Refs for animation targets
	const logoRef = useRef(null);
	const descriptionRef = useRef(null);
	const socialIconsRef = useRef(null);
	const subscribeTopRef = useRef(null);
	const inputRef = useRef(null);
	const subscribeButtonRef = useRef(null);
	const copyrightRef = useRef(null);

	const servicesRef = useRef(null);
	const servicesItemsRef = useRef(null);

	const workWithUsRef = useRef(null);
	const workWithUsItemsRef = useRef(null);

	const companyRef = useRef(null);

	const companyItemsRef = useRef(null);
	const companyItemsRef2 = useRef(null);

	const mobileSubscribeRef = useRef(null);

	// Set isClient to true after component mounts
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Apply animations when on client
	useEffect(() => {
		if (isClient) {
			// Logo and description animations
			gsap.from(logoRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: logoRef.current,
					start: "top 95%",
				},
			});

			gsap.from(descriptionRef.current, {
				opacity: 0,
				y: 20,
				duration: 0.8,
				delay: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: descriptionRef.current,
					start: "top 95%",
				},
			});

			// Social icons animation
			gsap.from(socialIconsRef.current.children, {
				opacity: 0,
				scale: 0,
				stagger: 0.1,
				duration: 0.5,
				ease: "back.out(1.7)",
				delay: 0.4,
				scrollTrigger: {
					trigger: socialIconsRef.current,
					start: "top 95%",
				},
			});

			// Desktop subscribe section animations
			if (subscribeTopRef.current) {
				gsap.from(subscribeTopRef.current, {
					opacity: 0,
					y: 20,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: subscribeTopRef.current,
						start: "top 90%",
					},
				});
			}

			if (inputRef.current) {
				gsap.from(inputRef.current, {
					opacity: 0,
					width: 0,
					duration: 0.8,
					delay: 0.3,
					ease: "power3.out",
					scrollTrigger: {
						trigger: inputRef.current,
						start: "top 90%",
					},
				});
			}

			if (subscribeButtonRef.current) {
				gsap.from(subscribeButtonRef.current, {
					opacity: 0,
					x: -20,
					duration: 0.8,
					delay: 0.6,
					ease: "power3.out",
					scrollTrigger: {
						trigger: subscribeButtonRef.current,
						start: "top 90%",
					},
				});
			}

			if (copyrightRef.current) {
				gsap.from(copyrightRef.current, {
					opacity: 0,
					y: 10,
					duration: 0.8,
					delay: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: copyrightRef.current,
						start: "top 95%",
					},
				});
			}

			// Services section animations
			gsap.from(servicesRef.current, {
				opacity: 0,
				x: -50,
				duration: 0.8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: servicesRef.current,
					start: "top 85%",
				},
			});

			gsap.from(servicesItemsRef.current.children, {
				opacity: 0,
				x: -20,
				stagger: 0.1,
				duration: 0.6,
				ease: "power3.out",
				delay: 0.3,
				scrollTrigger: {
					trigger: servicesItemsRef.current,
					start: "top 85%",
				},
			});

			// Work with us section animations
			gsap.from(workWithUsRef.current, {
				opacity: 0,
				x: -50,
				duration: 0.8,
				ease: "power3.out",
				delay: 0.2,
				scrollTrigger: {
					trigger: workWithUsRef.current,
					start: "top 85%",
				},
			});

			gsap.from(workWithUsItemsRef.current.children, {
				opacity: 0,
				x: -20,
				stagger: 0.1,
				duration: 0.6,
				ease: "power3.out",
				delay: 0.5,
				scrollTrigger: {
					trigger: workWithUsItemsRef.current,
					start: "top 85%",
				},
			});

			// Company section animations
			gsap.from(companyRef.current, {
				opacity: 0,
				x: -50,
				duration: 0.8,
				ease: "power3.out",
				delay: 0.4,
				scrollTrigger: {
					trigger: companyRef.current,
					start: "top 85%",
				},
			});

			gsap.from(companyItemsRef.current.children, {
				opacity: 0,
				x: -20,
				stagger: 0.1,
				duration: 0.6,
				ease: "power3.out",
				delay: 0.7,
				scrollTrigger: {
					trigger: companyItemsRef.current,
					start: "top 85%",
				},
			});
			gsap.from(companyItemsRef2.current.children, {
				opacity: 0,
				x: -20,
				stagger: 0.1,
				duration: 0.6,
				ease: "power3.out",
				delay: 0.7,
				scrollTrigger: {
					trigger: companyItemsRef.current,
					start: "top 85%",
				},
			});

			// Mobile subscribe section animation
			if (mobileSubscribeRef.current) {
				gsap.from(mobileSubscribeRef.current.children, {
					opacity: 0,
					y: 20,
					stagger: 0.2,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: mobileSubscribeRef.current,
						start: "top 90%",
					},
				});
			}
		}
	}, [isClient]);

	return (
		<div className="w-full py-4 lg:py-8 px-8 lg:px-16  bg-service_bg">
			<div className="w-full lg:flex">
				<div className="lg:w-[30%]">
					<div className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:mt-10">
						<div
							className=" flex justify-center w-[80%]"
							ref={logoRef}>
							<img
								className="w-[120px] lg:w-[200px]"
								src={logo}
								alt="logo"
								loading="lazy"
							/>
						</div>
						<p
							ref={descriptionRef}
							className=" text-white font-jost text-body-mobile lg:text-body-desktop text-center w-[80%]">
							Audio Recording, Podcast studio, and video room in Bangalore
						</p>
						<div
							ref={socialIconsRef}
							className="grid grid-cols-4 justify-center items-center gap-8 mt-4 lg:ml-10">
							{images.map((image, index) => (
								<div
									key={index}
									className="">
									<img
										className="w-6 lg:w-8"
										src={image}
										alt="data-img"
										loading="lazy"
									/>
								</div>
							))}
						</div>
					</div>
					<div className="hidden lg:block mt-20">
						<p
							ref={subscribeTopRef}
							className="font-jost text-white text-body-mobile lg:text-body-desktop">
							Subscribe to be updated
						</p>
						<div className="relative mt-4 flex items-center">
							<input
								ref={inputRef}
								type="text"
								placeholder="Email Id"
								className="relative bg-subscribe bg-opacity-[3%] border border-subscribe_border py-4 w-[90%] pl-4 placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:text-subscribe_text placeholder:font-jost placeholder:font-light"
							/>
							<button
								ref={subscribeButtonRef}
								aria-label="subscribe"
								className="absolute right-16 text-choose_bg font-jost font-sermibold text-body-mobile lg:text-h4-desktop">
								Subscribe
							</button>
						</div>
						<p
							ref={copyrightRef}
							className="font-jost text-body-mobile lg:text-body-desktop text-white text-opacity-[46%] mt-4">
							© 2025 VoiceBox Productions. All rights reserved.
						</p>
					</div>
				</div>
				<div className="lg:w-[70%] ">
					<div className="w-full grid lg:grid-cols-3 mt-10 lg:mt-0 lg:pl-20 gap-10">
						{/* Div 1 */}
						<div>
							<p
								ref={servicesRef}
								className="text-text_red font-jost text-h2-mobile lg:text-h2-desktop font-medium">
								<span className="border-b-2 mb-1 border-b-text_red"> Ser</span>
								vices
							</p>
							<ul
								ref={servicesItemsRef}
								className="font-jost text-white space-y-4 mt-8 text-body-mobile lg:text-body-desktop font-medium">
								<li>Home</li>
								<li>History</li>
								<li>Services</li>
								<li>Studio</li>
								<li>Portfolio</li>
								<li>Blogs</li>
								<li>Book Now</li>
							</ul>
						</div>
						{/* Div 2 */}
						<div>
							<p
								ref={workWithUsRef}
								className="text-text_red font-jost text-h2-mobile lg:text-h2-desktop font-medium">
								<span className="border-b-2 mb-1 border-b-text_red"> Wor</span>k
								With Us
							</p>
							<ul
								ref={workWithUsItemsRef}
								className="font-jost text-white space-y-4 mt-8 text-body-mobile lg:text-body-desktop font-medium">
								<li>Career</li>
								<li>Voice Artist </li>
								<li>Video Editor</li>
								<li>Digital</li>
								<li>TV ads</li>
								<li>Radio Jingles & AVs </li>
								<li>Mixing </li>
								<li>Mastering</li>
							</ul>
						</div>
						{/* Div 3 */}
						<div>
							<p
								ref={companyRef}
								className="text-text_red font-jost text-h2-mobile lg:text-h2-desktop font-medium">
								<span className="border-b-2 mb-1 border-b-text_red">Com</span>
								pany
							</p>
							<ul
								ref={companyItemsRef}
								className="font-jost text-white space-y-4 mt-8 text-body-mobile lg:text-body-desktop font-medium">
								<li>Privacy Policy </li>
								<li>Terms of Service </li>
								<li>Refund & Cancellation Policies </li>
								<li>Booking Terms</li>
								<li className="flex gap-4   text-choose_bg pt-4">
									<img
										className="w-8 h-8"
										src={gmail}
										alt=""
									/>
									Gowric.vc@gmail.com <br />
									rajeshvenkatesh.vbp@gmail.com
								</li>
							</ul>
							<ul
								ref={companyItemsRef2}
								className=" font-jost text-choose_bg space-y-4 mt-4 text-body-mobile lg:text-body-desktop font-medium">
								<li className="flex gap-4">
									<img
										className="w-8 h-8"
										src={mobile}
										alt="mobile-img"
										loading="lazy"
									/>
									+91 96112 60260 <br />
									+91 99168 35990
								</li>
								<li className="flex gap-4  text-subtext-mobile lg:text-[14px]">
									<img
										className="w-8 h-8"
										src={gps}
										alt="gps-img"
										loading="lazy"
									/>
									Street Address: #1681, Shree Sai Tulip Street Address Line 2:
									4th cross, 8th main, HAL 3rd stage, New Thippasandra City:
									Banglore State / Province: Karnataka Postal / Zip Code: 560075
								</li>
							</ul>
						</div>
					</div>

					<div
						ref={mobileSubscribeRef}
						className="lg:hidden mt-4">
						<p className="font-jost text-white text-body-mobile lg:text-body-desktop">
							Subscribe to be updated
						</p>
						<div className="relative mt-4 flex items-center">
							<input
								type="text"
								placeholder="Email Id"
								className="relative bg-subscribe bg-opacity-[3%] border border-subscribe_border py-4 w-full m-auto pl-4 placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:text-subscribe_text placeholder:font-jost placeholder:font-light"
							/>
							<button
								aria-label="subscribe"
								className="absolute right-4 lg:right-16 text-choose_bg font-jost font-sermibold text-body-mobile lg:text-h4-desktop">
								Subscribe
							</button>
						</div>
						<p className="font-jost text-subtext-mobile lg:text-body-desktop text-white text-opacity-[46%] mt-4 text-center">
							© 2025 VoiceBox Productions. All rights reserved.
						</p>
						<p className="text-center">
							<a
								className=" text-[12px] text-gray-400 md:text-[12px] lg:text-[16px] font-montserrat font-thin text-foot3"
								href="https://techwire.studio/"
								target="_blank"
								rel="noopener noreferrer">
								Designed by TechWire Studio
							</a>
						</p>
					</div>
				</div>
			</div>
			<p className=" mt-4 hidden lg:flex justify-end">
				<a
					className=" text-[12px] text-gray-400 md:text-[12px] lg:text-[16px] font-jost font-thin text-foot3"
					href="https://techwire.studio/"
					target="_blank"
					rel="noopener noreferrer">
					Designed by TechWire Studio
				</a>
			</p>
		</div>
	);
};

export default Footer;
