import React, { Suspense, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import main from "../assets/blogpage_main.png";
import img1 from "../assets/blog1.png"
import img2 from "../assets/blog2.png"
import img3 from "../assets/blog3.png"
import img4 from "../assets/blog4.png"
import img5 from "../assets/blog5.png"
import img6 from "../assets/blog6.png"
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png";
import twitter from "../assets/twitter 3.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/logo-removebg-preview.png"

const Footer = React.lazy(() => import("../components/Footer"))

const menuItems = [
  { name: "Home", path: "/", mobileOnly:true },
  { name: "History", path: "/history" },
  { name: "Services", path: "/services" },
  { name: "Studio", path: "/studio" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blogs", path: "/blogs" },
  { name: "Book Now", path: "/book-now" },
];

const items = [
  {
    image:img1,
    title:"See The Various Equipment In Recording Studio",
    content:"See The Various Equipment In Recording Studio kitpro September 30, 2024…"
  },
  {
    image:img2,
    title:"Behind The Scenes Of Music Production",
    content:"See The Various Equipment In Recording Studio kitpro September 30, 2024…"
  },
  {
    image:img3,
    title:"Exploring The World Of Voiceover Recording",
    content:"See The Various Equipment In Recording Studio kitpro September 30, 2024…"
  },
  {
    image:img4,
    title:"The Art Of Mixing And Mastering Audio",
    content:"See The Various Equipment In Recording Studio kitpro September 30, 2024…"
  },
  {
    image:img5,
    title:"Enhance Your Content With Our Best Features",
    content:"See The Various Equipment In Recording Studio kitpro September 30, 2024…"
  },
  {
    image:img6,
    title:"Discover The Array Of Rentals At Harmonize",
    content:"See The Various Equipment In Recording Studio kitpro September 30, 2024…"
  },
]

const images = [facebook, instagram, twitter, youtube];



const BlogsPage = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const gridRef = useRef(null);
  const itemsRef = useRef([]);
  const [isClient, setIsClient] = useState(false);

  // Handle SSR - only run animations on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation for grid items
  useEffect(() => {
    if (isClient && gridRef.current && itemsRef.current.length > 0) {
      const isMobile = window.innerWidth < 768;
      
      // Create animation for each grid item
      itemsRef.current.forEach((item, index) => {
        // Get image and content elements
        const imageEl = item.querySelector("div:first-child");
        const contentEl = item.querySelector("div:nth-child(2)");
        const titleEl = contentEl.querySelector("p:first-child");
        const descEl = contentEl.querySelector("p:nth-child(2)");
        const buttonEl = contentEl.querySelector("button");
        
        // Create a timeline for each item
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 95%", 
            
            toggleActions: "play none none none",
          }
        });
        
        // Animate each element within the item
        tl.from(imageEl, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          
          delay: isMobile ? index * 0.2 : index * 0.15, // Stagger based on index
        })
        .from(contentEl, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.3")
        .from(titleEl, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.2")
        .from(descEl, {
          opacity: 0,
          y: 15,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.2")
        .from(buttonEl, {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: "back.out(1.7)",
        }, "-=0.2");
      });
      
      
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
        <div className="absolute z-20 top-8 right-4 lg:hidden">
          <img
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(true);
            }}
            src={menu}
            alt=""
          />

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full h-screen  z-20 bg-menu_bg "
              >
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                  }}
                  className="w-8 absolute right-4 top-8"
                  src={close}
                  alt=""
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
                      <img className="w-6" src={image} alt="" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <img className="w-full h-screen object-cover" src={main} alt="" />
        <div className="absolute w-full h-screen bg-black top-0 bg-opacity-[26%]"></div>
        <h1
          className="w-[80%] absolute z-10 text-[40px] lg:text-[72px] text-white font-bold font-jost 
               top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          Our Latest Blog
        </h1>
      </div>
      {/* Content */}
      <div 
      ref={gridRef} 
      className="py-4 lg:py-8 px-4 lg:px-16 grid lg:grid-cols-3 gap-6 lg:gap-10"
    >
      {items.map((item, index) => (
        <div 
          key={index} 
          ref={el => (itemsRef.current[index] = el)} 
          className="lg:mt-8"
        >
          <div className="">
            <img src={item.image} alt="" />
          </div>
          <div className="px-4 py-8 bg-service_bg rounded-b-[15px]">
            <p className="text-white font-jost text-h3-mobile lg:text-h3-desktop">
              {item.title}
            </p>
            <p className="text-white font-jost text-subtext-mobile lg:text-subtext-desktop mt-2">
              {item.content}
            </p>
            <button className="m-auto lg:m-0 flex bg-white text-service_bg px-6 py-2 rounded-[20px] mt-4 lg:mt-6">
              Know More
            </button>
          </div>
        </div>
      ))}
    </div>

      <Suspense>
          <Footer />
      </Suspense>
    </div>
  );
};

export default BlogsPage;
