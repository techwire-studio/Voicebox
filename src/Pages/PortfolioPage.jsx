import React, { Suspense, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import main from "../assets/profolio_main.png";
import bg1 from "../assets/portfolio_bg1.png";
import bg2 from "../assets/portfolio_bg2.png";
import apple from "../assets/applemusic.png";
import tidal from "../assets/tidal.png";
import amazon from "../assets/amazonmusic.png";
import img1 from "../assets/colour1.png";
import img2 from "../assets/colour2.png";
import img3 from "../assets/colour3.png";
import img4 from "../assets/colour4.png";
import img5 from "../assets/colour5.png";
import img6 from "../assets/colour6.png";
import img7 from "../assets/colour7.png";
import img8 from "../assets/colour8.png";
import img9 from "../assets/colour9.png";
import speaker_group from "../assets/speaker_group.png";
import mic from "../assets/mic.png";
import play from "../assets/play (1).png";
import pause from "../assets/pause.png";
import sound from "../assets/mic_sound.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png"; // Renamed to remove space
import twitter from "../assets/twitter 3.png"; // Renamed to remove space
import youtube from "../assets/youtube.png";
import logo from "../assets/logo-removebg-preview.png";


// Audio
import audio1 from "../assets/AK.mp3";
import audio2 from "../assets/Beth_1.mp3";
import audio3 from "../assets/BH.mp3";
import audio4 from "../assets/JU.mp3";
import audio5 from "../assets/KI.mp3";
import audio6 from "../assets/Radio Spot_1.mp3";
import audio7 from "../assets/Radio Spot_2.mp3";
import audio8 from "../assets/Radio Spot_3.mp3";
import audio9 from "../assets/Radio Spot_4.mp3";
import audio10 from "../assets/Radio Spot_5.mp3";
import audio11 from "../assets/RV.mp3";
import audio12 from "../assets/US_Amy.mp3";
import audio13 from "../assets/US_Gavin.mp3";
import audio14 from "../assets/Radio Spot_6.mp3";
import audio15 from "../assets/Raj.mp3";
import audio16 from "../assets/Kid.mp3";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Footer = React.lazy(() => import("../components/Footer"));

const PortfolioPage = () => {
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
			content: "Made for Spatial",
		},
		{
			image: img2,
			content: "Made Hits in Spatial",
		},
		{
			image: img3,
			content: "Dance in Spatial Audio ",
		},
		{
			image: img4,
			content: "Electronic in Spatial Audio ",
		},
		{
			image: img5,
			content: "Jazz in Spatial Audio ",
		},
		{
			image: img6,
			content: "Music R&B in Spatial Audio",
		},
		{
			image: img7,
			content: "Hip-Hop in Spatial Audio",
		},
		{
			image: img8,
			content: "Country in Spatial Audio ",
		},
		{
			image: img9,
			content: "African Music in Spatial Audio",
		},
	];

	const musics = [
		{
			title: "Sample 1",
			content: "Calvin Norris",
			audio: audio1,
		},
		{
			title: "Sample 2",
			content: "Andreas Thonikya",
			audio: audio2,
		},
		{
			title: "Sample 3",
			content: "Inception",
			audio: audio3,
		},
		{
			title: "Sample 4",
			content: "Tom Ganarace",
			audio: audio4,
		},
		{
			title: "Sample 5",
			content: "Collin Davis",
			audio: audio5,
		},
		{
			title: "Sample 6",
			content: "Calvin Norris",
			audio: audio6,
		},
		{
			title: "Sample 7",
			content: "Andreas Thonikya",
			audio: audio7,
		},
		{
			title: "Sample 8",
			content: "Inception",
			audio: audio8,
		},
		{
			title: "Sample 9",
			content: "Tom Ganarace",
			audio: audio9,
		},
		{
			title: "Sample 10",
			content: "Collin Davis",
			audio: audio10,
		},
		{
			title: "Sample 11",
			content: "Calvin Norris",
			audio: audio11,
		},
		{
			title: "Sample 12",
			content: "Andreas Thonikya",
			audio: audio12,
		},
		{
			title: "Sample 13",
			content: "Inception",
			audio: audio13,
		},
		{
			title: "Sample 14",
			content: "Tom Ganarace",
			audio: audio14,
		},
		{
			title: "Sample 15",
			content: "Collin Davis",
			audio: audio15,
		},
		{
			title: "Sample 16",
			content: "Calvin Norris",
			audio: audio16,
		},
	];

	const images2 = [facebook, instagram, twitter, youtube];

	const [menuOpen, setMenuOpen] = useState(false);

	// State to track currently playing music index (-1 means no music is playing)
	const [currentlyPlaying, setCurrentlyPlaying] = useState(-1);

	// Create refs for audio elements
	const audioRefs = useRef([]);

	// Initialize refs array
	if (audioRefs.current.length !== musics.length) {
		audioRefs.current = Array(musics.length)
			.fill()
			.map((_, i) => audioRefs.current[i] || React.createRef());
	}

	// Function to handle play/pause
	const handlePlayPause = (index) => {
		if (currentlyPlaying === index) {
			// If clicked on currently playing music, pause it
			audioRefs.current[index].current.pause();
			setCurrentlyPlaying(-1);
		} else {
			// If another music is playing, pause it first
			if (currentlyPlaying !== -1) {
				audioRefs.current[currentlyPlaying].current.pause();
			}

			// Play the clicked music
			audioRefs.current[index].current.play();
			setCurrentlyPlaying(index);
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
								loading="lazy"
								className="h-auto w-32"
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
					alt="main"
					loading="lazy"
				/>
				<div className="absolute w-full h-screen bg-black top-0 bg-opacity-[26%]"></div>
				<h1
					className="absolute z-10 text-[40px] lg:text-[72px] text-white font-bold font-jost
               top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					Portfolio
				</h1>
			</div>
			{/* Content */}
			<div className="w-full">
				<div className="w-full relative">
					{/* Bg 1 */}
					<div className="absolute z-10 w-full flex flex-col items-center top-4 lg:top-10">
						{/* Title */}
						<p className="font-jost font-extrabold text-h4-mobile lg:text-h4-desktop text-white lg:w-[50%] text-center">
							Dolby Atmos Music is currently supported by these 3 major
							streaming services:
						</p>

						{/* Streaming Service Logos */}
						<div className="w-full flex justify-center items-center gap-4 lg:gap-20 mt-4 lg:mt-10 pb-6 border-b-4 border-white">
							<img
								className="w-[100px] lg:w-[200px]"
								src={apple}
								alt="Apple Music"
								loading="lazy"
							/>
							<img
								className="w-[100px] lg:w-[200px]"
								src={tidal}
								alt="Tidal"
								loading="lazy"
							/>
							<img
								className="w-[100px] lg:w-[200px]"
								src={amazon}
								alt="Amazon Music"
								loading="lazy"
							/>
						</div>

						{/* Subtitle */}
						<p className="text-center font-jost text-white text-h4-mobile lg:text-h4-desktop my-6">
							Apple Music Playlists to get you started
						</p>

						{/* Mobile: Swiper */}
						<div className="w-full lg:hidden px-4">
							<Swiper
								slidesPerView={2.5}
								spaceBetween={15}
								// pagination={{ clickable: true }}
								modules={[Pagination]}
								className="w-full mt-4">
								{images.map((data, index) => (
									<SwiperSlide
										key={index}
										className="flex flex-col items-center">
										<img
											src={data.image}
											className="w-full rounded-md"
											alt="data-img"
											loading="lazy"
										/>
										<div className="bg-white h-16 w-full rounded-b-[5px] flex justify-center items-center px-4 text-center">
											<p className="font-jost text-body-mobile">
												{data.content}
											</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						{/* Desktop: Grid */}
						<div className="hidden w-full lg:grid grid-cols-9 gap-x-4 px-8">
							{images.map((data, index) => (
								<div
									key={index}
									className="flex flex-col items-center">
									<img
										src={data.image}
										className="w-full rounded-md"
										alt="data-img"
										loading="lazy"
									/>
									<div className="bg-white h-16 w-full rounded-b-[5px] flex justify-center items-center px-4 text-center">
										<p className="font-jost text-subtext-desktop">
											{data.content}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<img
						className="relative h-[500px] lg:h-auto"
						src={bg1}
						alt="bg1"
						loading="lazy"
					/>
				</div>
				{/* Bg 2 */}
				<div className="w-full relative">
					<div className="w-full lg:flex h-full py-8 px-4  absolute z-10">
						<div className="lg:w-[50%]  lg:flex justify-center items-center lg:text-center lg:h-full">
							<p className="font-jost text-white font-extrabold text-h3-mobile lg:text-h2-desktop w-[90%] lg:w-[60%]">
								Don’t have a streaming subscription?
							</p>
						</div>
						<div className="lg:w-[50%] lg:h-full flex flex-col justify-center mt-10 lg:mt-0 lg:gap-16">
							<p className="text-white font-jost font-medium text-h4-mobile lg:text-h4-desktop lg:w-[70%]">
								If you have headphones, we recommend that you visit the Dolby
								Atmos Visualizer on the Dolby website:
							</p>
							<button
								aria-label="book-a-call"
								className="m-auto lg:m-0 mt-8 lg:mt-0 bg-white px-10 py-2 text-body-mobile lg:text-body-desktop rounded-[40px] font-jost  w-fit">
								Book a Call
							</button>
						</div>
					</div>
					<img
						className="lg:h-auto h-[300px]"
						src={bg2}
						alt="bg2"
						loading="lazy"
					/>
				</div>
				{/* Speakers */}
				{/* <div className="w-full py-8 px-8 lg:px-32 lg:py-32 relative">
          <img src={speaker_group} alt="" />
        </div> */}
				{/* Mic */}
				<div className="w-full flex flex-col py-8 bg-choose_bg">
					<div className="flex">
						<div className="hidden lg:block w-[30%]">
							<img
								className="h-[550px] mt-80"
								src={mic}
								alt="mic"
								loading="lazy"
							/>
						</div>
						<div className="lg:w-[70%] px-4 lg:px-20 text-center lg:text-left">
							<h1 className="font-jost text-white font-extrabold text-h1-mobile lg:text-[64px]">
								Our Recordings
							</h1>
							<p className="font-jost text-body-mobile lg:text-h4-desktop text-white font-medium ">
								Experience our meticulously crafted recordings that embody
								excellence in audio production. Each project reflects passion,
								precision, and innovative sound design expertise.
							</p>
							<div className="w-full lg:px-8 flex flex-col gap-4 mt-4 lg:mt-8">
								{/* <div className="w-full border-b-2"></div> */}
								<div className="music-player">
									{/* Hidden audio elements */}
									{musics.map((music, index) => (
										<audio
											key={`audio-${index}`}
											ref={audioRefs.current[index]}
											src={music.audio}
										/>
									))}

									{/* Music list */}
									{musics.map((music, index) => (
										<div
											key={index}
											className="flex py-3 border-t border-service_bg">
											<div className="w-1/3 flex items-center">
												<h1 className="text-white font-jost font-medium text-left text-h4-mobile lg:text-h3-desktop">
													{music.title}
												</h1>
												{/* <p className="text-white font-jost font-medium text-left text-subtext-mobile lg:text-subtext-desktop">
                          {music.content}
                        </p> */}
											</div>
											<div className="w-1/3 flex justify-center lg:justify-start">
												<img
													className="w-8 lg:w-12 cursor-pointer"
													src={currentlyPlaying === index ? pause : play}
													alt={currentlyPlaying === index ? "Pause" : "Play"}
													onClick={() => handlePlayPause(index)}
													loading="lazy"
												/>
											</div>
											<div className="w-1/3 flex gap-2 justify-start items-center">
												<img
													className="w-8 lg:w-12"
													src={sound}
													alt="Sound"
													loading="lazy"
												/>
												<div className="border-b-4 w-[120px] border-service_bg"></div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="w-full flex justify-center pt-10">
						<img
							className="w-[700px] h-auto"
							src={speaker_group}
							alt="speaker_group"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<Suspense>
				<Footer />
			</Suspense>
		</div>
	);
};

export default PortfolioPage;
