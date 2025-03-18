import React, { Suspense, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import main from "../assets/VoiceBox.mp4";
import img1 from "../assets/menu1.png";
import img2 from "../assets/menu2.png";
import img3 from "../assets/menu3.png";
import img4 from "../assets/menu4.png";
import img5 from "../assets/menu5.png";
import img6 from "../assets/menu6.png";
import img7 from "../assets/menu7.png";
import img8 from "../assets/menu8.png";
import img9 from "../assets/menu9.png";
import img10 from "../assets/menu10.png";
import img11 from "../assets/menu11.png";
import img12 from "../assets/menu12.png";
import img13 from "../assets/menu13.png";
import img14 from "../assets/menu14.png";
import img15 from "../assets/menu15.png";
import img16 from "../assets/menu16.png";
import img17 from "../assets/menu17.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png";
import twitter from "../assets/twitter 3.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/logo-removebg-preview.png";
import mute from "../assets/mute.png"
import unmute from "../assets/unmute.png"
import { img } from "framer-motion/client";

// Components
const Services = React.lazy(() => import("./Services"));
const History = React.lazy(() => import("./History"));
const Studio = React.lazy(() => import("./Studio"));
const WhyChooseUs = React.lazy(() => import("./WhyChooseUs"));
const Gallery = React.lazy(() => import("./Gallery"));
const BookNow = React.lazy(() => import("./BookNow"));
const ClientReview = React.lazy(() => import("./ClientReview"));
const Connect = React.lazy(() => import("./Connect"));
const Footer = React.lazy(() => import("./Footer"));

const Home = () => {
  const menuItems = [
    { name: "Home", path: "/", mobileOnly:true },
    { name: "History", path: "/history" },
    { name: "Services", path: "/services" },
    { name: "Studio", path: "/studio" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blogs", path: "/blogs" },
    { name: "Book Now", path: "/book-now" },
  ];

  const menuImages = [
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
    img17
  ];

  const images = [facebook, instagram, twitter, youtube];

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounting
    };
  }, [menuOpen]);

  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animation runs only on client-side
  }, []);

  useEffect(() => {
    if (
      isClient &&
      headingRef.current &&
      paraRef.current &&
      buttonRef.current
    ) {
      // Heading Animation - Slide from Top
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -50, // Move from the top
        duration: 0.8,
        ease: "power3.out",
      });

      // Paragraph Animation - Slide from Bottom
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 50, // Move from the bottom
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3, // Delays after heading animates
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [isClient]);

  const imagesContainerRef = useRef(null);

  useEffect(() => {
    if (imagesContainerRef.current) {
      gsap.to(imagesContainerRef.current, {
        x: "-50%", // Move the container left by 50% width
        duration: 10, // Time to complete one cycle
        ease: "linear", // Smooth infinite scrolling
        repeat: -1, // Infinite loop
      });
    }
  }, []);

  const videoRef = useRef(null); // Reference to the video element
  const [isMuted, setIsMuted] = useState(false); // Initially unmuted

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="hidden backdrop-blur-md absolute bg-navbar_bg w-full z-10 bg-opacity-[29%] text-white lg:flex items-center justify-between  px-16">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <Link to="/">
            
            <img src={logo} alt="Logo" className="h-auto w-32" />
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
                } ${item.mobileOnly ? "lg:hidden" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Empty Div to Balance Layout */}
          {/* <div className="w-[10%]"></div> */}
        </div>

        <div className="lg:hidden absolute z-20  left-4" >
              <img className="w-[120px]" src={logo} alt="" />
        </div>

        <div className="absolute z-20 top-8 right-4 lg:hidden">
          {/* Menu Button */}
          

            
            <img
              onClick={() => setMenuOpen(true)}
              src={menu}
              alt="Menu"
              className="w-8 cursor-pointer"
            />
          

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full h-screen z-20 bg-menu_bg"
              >
                {/* Close Button with GSAP Animation */}
                <img
                  onClick={() => setMenuOpen(false)}
                  className="w-6 absolute right-5 top-9 cursor-pointer"
                  src={close}
                  alt="Close"
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
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="w-[90%] m-auto mt-4 border-b-2 border-white"></div>

                <div className="grid grid-cols-4 w-fit gap-4 items-center px-4 mt-4">
                  {images.map((image, index) => (
                    <div key={index}>
                      <img className="w-6" src={image} alt="social-images" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <video
        ref={videoRef}
        className="w-full h-screen object-cover"
        src={main} // Replace with your video source
        autoPlay
        loop
        muted={true} // Initially unmuted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

       {/* Mute/Unmute Button */}
       <img
        className="z-20 w-10"
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "200px",
          right: "20px",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        src={isMuted ? mute : unmute }
      />
        {/* {isMuted ? "Mute" : "Unmute"} */}
        {/* Sound
      </button> */}

        <div className="absolute w-full h-screen bg-black top-0  bg-opacity-[26%]"></div>
        <div
          className="w-[60%] absolute 
             lg:top-1/3 lg:-translate-y-1/3  top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center "
        >
          <h1
            ref={headingRef}
            className=" z-10 text-[40px] lg:text-[72px] text-white font-bold font-jost leading-[1.2] mt-14"
          >
            Bangalore’s Premier Audio Dubbing Studio
          </h1>
          <p
            ref={paraRef}
            className="text-white font-jost text-body-mobile lg:text-body-desktop lg:w-[70%] m-auto lg:mt-10 mt-10"
          >
            Over 20 Years of Audio Excellence. Quick Turnover, Unmatched
            Quality, and a Legacy of 15,000+ Recordings
          </p>
          <button
            aria-label="book-now"
            ref={buttonRef}
            className="bg-black bg-opacity-[26%] border border-choose_bg py-2 px-8 mt-8 rounded-[39px] text-white font-jost font-medium text-body-mobile lg:text-body-desktop"
          >
            <Link to="book-now">
            
            Book Now
            </Link>
          </button>
        </div>

        <div className="w-full overflow-hidden bg-menu_bottom py-4 lg:py-8">
          <div ref={imagesContainerRef} className="flex gap-8 lg:gap-12 w-max">
            {/* Duplicate images to create seamless effect */}
            {[...menuImages, ...menuImages].map((image, index) => (
              <img
                key={index}
                className="w-[100px] h-[80px] lg:w-[130px] lg:h-[100px] object-contain"
                src={image}
                alt="company-images"
              />
            ))}
          </div>
        </div>
      </div>
      <Suspense>
        <Services />
        <History />
        <Studio />
        <WhyChooseUs />
        <Gallery />
        <BookNow />
        <ClientReview />
        <Connect />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
