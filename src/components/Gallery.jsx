import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Image Imports

// import img1 from "../assets/gallery1.JPG";
// import img2 from "../assets/gallery2.JPG";
// import img3 from "../assets/gallery3.JPG";
// import img4 from "../assets/gallery4.JPG";
// import img5 from "../assets/gallery5.JPG";
// import img6 from "../assets/gallery6.JPG";
// import img7 from "../assets/gallery7.JPG";
// import img8 from "../assets/gallery8.JPG";
// import img9 from "../assets/gallery9.JPG";
// import img10 from "../assets/gallery10.JPG";
// import img11 from "../assets/gallery11.jpg";
// import img12 from "../assets/gallery12.jpg";
// import img13 from "../assets/gallery13.jpg";
// import img14 from "../assets/gallery14.jpg";
// import img15 from "../assets/gallery15.jpg";
// import img16 from "../assets/gallery16.jpg";
// import img17 from "../assets/gallery17.jpg";
// import img18 from "../assets/gallery18.jpg";
// import img19 from "../assets/gallery19.jpg";
// import img21 from "../assets/gallery21.jpg";
// import img22 from "../assets/gallery22.jpg";
// import img23 from "../assets/gallery23.jpg";

// import img24 from "../assets/gallery24.png";
// import img25 from "../assets/gallery25.png";
import img26 from "../assets/Add.webp"
import img1 from "../assets/gallery1.JPG";
import img2 from "../assets/gallery2.JPG";
import img3 from "../assets/gallery3.JPG";
import img4 from "../assets/gallery4.webp";
import img5 from "../assets/gallery5.webp";
import img6 from "../assets/gallery6.webp";
import img7 from "../assets/gallery7.webp";
import img8 from "../assets/gallery8.webp";
import img9 from "../assets/gallery9.webp";
import img10 from "../assets/gallery10.webp";
import img11 from "../assets/gallery11.webp";
import img12 from "../assets/gallery12.webp";
import img13 from "../assets/gallery13.webp";
import img14 from "../assets/gallery14.webp";
import img15 from "../assets/gallery15.webp";
import img16 from "../assets/gallery16.webp";
import img17 from "../assets/gallery17.webp";
import img18 from "../assets/gallery18.webp";
import img19 from "../assets/gallery19.webp";

import img21 from "../assets/gallery21.webp";
import img22 from "../assets/gallery22.webp";
import img23 from "../assets/gallery23.webp";
import img24 from "../assets/gallery24.webp";
import img25 from "../assets/gallery25.webp";


gsap.registerPlugin(ScrollTrigger);

const images = [

	img26,
	
	img24,
	img25,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img21,
	img22,
	img23,
];

const Gallery = () => {
	const titleRef = useRef(null);
	const headingRef = useRef(null);
	const textRef = useRef(null);
	const swiperRef = useRef(null);
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

			gsap.from(swiperRef.current, {
				opacity: 0,
				scale: 0.8,
				duration: 1,
				ease: "power3.out",
				delay: 0.6,
				scrollTrigger: {
					trigger: swiperRef.current,
					start: "top 90%",
				},
			});
		}
	}, [isClient]);

	return (
		<div className="w-full lg:py-8 py-4 px-4 lg:px-4 flex flex-col justify-center items-center">
			<p
				ref={titleRef}
				className="font-jost text-body-mobile lg:text-body-desktop text-service_heading border-b-2 border-b-service_heading w-fit">
				Gallery
			</p>
			<p
				ref={headingRef}
				className="font-jost font-semibold text-text_red text-body-mobile lg:text-h1-desktop mt-4">
				Our Recording and Podcast Studio in Bangalore
			</p>
			<p
				ref={textRef}
				className="font-jost text-subtext-mobile lg:text-body-desktop text-center mt-4 lg:px-8">
				Our state-of-the-art studio is equipped to get your sound just right.
				With a soundproof room, recording booth, industry-standard equipment, a
				trained crew, and a professional sound engineer to help you with your
				recordings, podcasts, and projects, you can put all your energy into
				creating your next masterpiece without worrying about the technical
				details.
			</p>
			<div
				ref={swiperRef}
				className="w-full mt-4 lg:mt-8">
				<Swiper
					modules={[Pagination]}
					className="mySwiper"
					breakpoints={{
						320: { slidesPerView: 2.1, spaceBetween: 10 },
						640: { slidesPerView: 1.5, spaceBetween: 24 },
						1024: { slidesPerView: 1.7, spaceBetween: 32 },
						1280: { slidesPerView: 2.5, spaceBetween: 40 },
					}}>
					{images.map((image, index) => (
						<SwiperSlide
							className=""
							key={index}>
							<img
								className="rounded-[15px] h-[200px] lg:h-[550px] w-full object-fill"
								src={image}
								alt="slide-img"
								loading="lazy"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Gallery;
