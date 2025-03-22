import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


// import img1 from "../assets/book1.png";
// import img2 from "../assets/book2.png";
// import img3 from "../assets/book3.png";
// import img4 from "../assets/book4.png";
// import img5 from "../assets/book5.png";
// // import img6 from "../assets/book6.webp";
// import img7 from "../assets/book7.png";
// import img8 from "../assets/book8.png";
// // import img9 from "../assets/book9.webp";
// // import img10 from "../assets/book10.webp";
// import img11 from "../assets/book11.png";

import img1 from "../assets/book1.webp";
import img2 from "../assets/book2.webp";
import img3 from "../assets/book3.webp";
import img4 from "../assets/book4.webp";
import img5 from "../assets/book5.webp";
// import img6 from "../assets/book6.webp";
import img7 from "../assets/book7.webp";
import img8 from "../assets/book8.webp";
// import img9 from "../assets/book9.webp";
// import img10 from "../assets/book10.webp";
import img11 from "../assets/book11.webp";

// import img12 from "../assets/book12.webp";

gsap.registerPlugin(ScrollTrigger);

const bookData = [
	{ img: img1, title: "Air-conditioned & Soundproof Studio" },
	{ img: img2, title: "Podcast Mics" },
	{ img: img3, title: `17" Teleprompter for Content` },
	{ img: img4, title: "Audio Mastering" },
	{ img: img5, title: "Sony 4K Cameras" },
	// { img: img6, title: "6 Premium Sofas with 3 Color options" },
	{ img: img7, title: "Makeup Console with changing room" },
	{ img: img8, title: "Professional Lighting Equipment" },
	// { img: img9, title: "10+ Seamless Paper Backdrops" },
	// { img: img10, title: "Studio Props and decor" },
	{ img: img11, title: "Audio and Video Recording assistance" },
	// { img: img12, title: "Multicam HD Streaming" },
];

const BookNow = () => {
	const titleRef = useRef(null);
	const headingRef = useRef(null);
	const textRef = useRef(null);
	const gridRef = useRef(null);
	const buttonRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			gsap.from(titleRef.current, {
				opacity: 0,
				y: -50,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 85%",
				},
			});

			gsap.from(headingRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 1,
				ease: "power3.out",
				delay: 0.2,
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top 85%",
				},
			});

			gsap.from(textRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
				delay: 0.4,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top 85%",
				},
			});

			gsap.from(gridRef.current.children, {
				opacity: 0,
				y: 30,
				stagger: 0.2,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: gridRef.current,
					start: "top 85%",
				},
			});

			gsap.from(buttonRef.current, {
				opacity: 0,
				scale: 0.5,
				duration: 1,
				ease: "power3.out",
				delay: 1,
				scrollTrigger: {
					trigger: buttonRef.current,
					start: "top 85%",
				},
			});
		}
	}, [isClient]);

	return (
		<div className="w-full py-4 lg:py-8 px-4 lg:px-16 bg-service_bg flex flex-col justify-center items-center gap-4">
			<p
				ref={titleRef}
				className="font-jost text-body-mobile lg:text-body-desktop pb-2 text-service_heading border-b-2 border-b-service_heading w-fit">
				Book Now
			</p>
			<p
				ref={headingRef}
				className="text-h4-mobile text-center lg:text-h1-desktop text-text_red font-jost font-semibold">
				Your perfect audio recording and podcast studio.
			</p>
			<p
				ref={textRef}
				className="text-white font-jost text-body-mobile lg:text-body-desktop lg:w-[70%] text-center">
				If you’re looking for an audio recording studio, video or podcast studio
				in Bangalore, then look no further. We offer voiceover, audio books,
				Music recording, podcast production, dubbing services and many more…
			</p>
			<div
				ref={gridRef}
				className="w-full px-8 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-8">
				{bookData.map((data, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-2 lg:gap-8">
						<img
							className="w-[100px]"
							src={data.img}
							alt="data-img"
							loading="lazy"
						/>
						<p className="lg:px-8 text-white font-jost text-subtext-mobile lg:text-subtext-desktop text-center">
							{data.title}
						</p>
					</div>
				))}
			</div>
			<button
				ref={buttonRef}
				aria-label="book-now"
				className="text-black bg-white font-jost text-body-mobile lg:text-body-desktop px-6 py-2 rounded-[20px] mt-4 lg:mt-10">
				<Link to="/book-now">Book Now</Link>
			</button>
		</div>
	);
};

export default BookNow;
