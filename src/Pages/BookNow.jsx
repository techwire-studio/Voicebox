import React, { Suspense, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import main from "../assets/book_main.png";
import blog_link from "../assets/blog_link.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram 3.png";
import twitter from "../assets/twitter 3.png";
import youtube from "../assets/youtube.png";
import location from "../assets/mdi_location.png"
import phone from "../assets/gg_phone.png"
import mail from "../assets/mdi_email-outline.png"
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import logo from "../assets/logo-removebg-preview.png"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);




const Footer = React.lazy(() => (import("../components/Footer")))

const images = [facebook, instagram, twitter, youtube];

const menuItems = [
  { name: "Home", path: "/", mobileOnly:true },
  { name: "History", path: "/history" },
  { name: "Services", path: "/services" },
  { name: "Studio", path: "/studio" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blogs", path: "/blogs" },
  { name: "Book Now", path: "/book-now" },
];

const links = [
  {
    image:location,
    title:"Location",
    content:"Audio tones blended crisply with care, yielding purer clarity"
  },
  {
    image:phone,
    title:"Phone Number",
    content:"Audio tones blended crisply with care, yielding purer clarity"
  },
  {
    image:mail,
    title:"Email Address",
    content:"Audio tones blended crisply with care, yielding purer clarity"
  },
]



const BookNow = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for animation targets
  const formSectionRef = useRef(null);
  const formFieldsRef = useRef([]);
  const formButtonRef = useRef(null);
  
  const contactSectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialIconsRef = useRef(null);
  const imageRef = useRef(null);
  const linksContainerRef = useRef(null);
  const linkCardsRef = useRef([]);
  
  const [isClient, setIsClient] = useState(false);

  // Handle SSR - only run animations on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Form animations
  useEffect(() => {
    if (isClient && formSectionRef.current && formFieldsRef.current.length > 0) {
      const isMobile = window.innerWidth < 768;
      
      // Animate form fields with staggered entrance
      gsap.from(formFieldsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: isMobile ? 0.15 : 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        }
      });
      
      // Button animation
      gsap.from(formButtonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: isMobile ? formFieldsRef.current.length * 0.15 + 0.2 : formFieldsRef.current.length * 0.1 + 0.2,
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        }
      });
    }
  }, [isClient]);

  // Contact info section animations
  useEffect(() => {
    if (isClient && contactSectionRef.current) {
      const isMobile = window.innerWidth < 768;
      
      // Create timeline for the contact info section
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      });
      
      // Animate heading, description and social icons
      contactTl
        .from(headingRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.4")
        .from(socialIconsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.3")
        .from(imageRef.current, {
          x: isMobile ? 0 : 50,
          y: isMobile ? 30 : 0,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.3");
      
      // Animate link cards with stagger
      gsap.from(linkCardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: isMobile ? 0.8 : 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linksContainerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
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
          className="absolute z-10 text-h1-mobile lg:text-[72px] text-white font-bold font-jost 
               top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          Book Now
        </h1>
      </div>
            {/* Form */}
      <div ref={formSectionRef} className="py-8 px-4 lg:px-0 lg:py-16 lg:w-[60%] m-auto">
        <form className="flex flex-col gap-6 lg:gap-12">
          <label ref={el => (formFieldsRef.current[0] = el)} className="">
            <p className="text-body-mobile lg:text-h4-desktop text-service_bg font-jost">
              First Name <span className="text-choose_bg">(Required)</span>
            </p>
            <input
              type="text"
              className="w-full border mt-2 py-4 px-4 border-black font-jost text-body-mobile lg:text-body-desktop text-service_bg"
            />
          </label>
          <label ref={el => (formFieldsRef.current[1] = el)} className="">
            <p className="text-body-mobile lg:text-h4-desktop text-service_bg font-jost">
              Last Name <span className="text-choose_bg">(Required)</span>
            </p>
            <input
              type="text"
              className="w-full border mt-2 py-4 px-4 border-black font-jost text-body-mobile lg:text-body-desktop text-service_bg"
            />
          </label>
          <label ref={el => (formFieldsRef.current[2] = el)} className="">
            <p className="text-body-mobile lg:text-h4-desktop text-service_bg font-jost">
              Email <span className="text-choose_bg">(Required)</span>
            </p>
            <input
              type="text"
              className="w-full border mt-2 py-4 px-4 border-black font-jost text-body-mobile lg:text-body-desktop text-service_bg"
            />
          </label>
          <label ref={el => (formFieldsRef.current[3] = el)} className="">
            <p className="text-body-mobile lg:text-h4-desktop text-service_bg font-jost">
              Company Name
            </p>
            <input
              type="text"
              className="w-full border mt-2 py-4 px-4 border-black font-jost text-body-mobile lg:text-body-desktop text-service_bg"
            />
          </label>
          <label ref={el => (formFieldsRef.current[4] = el)} className="">
            <p className="text-body-mobile lg:text-h4-desktop text-service_bg font-jost">
              Phone Number <span className="text-choose_bg">(Required)</span>
            </p>
            <input
              type="text"
              className="w-full border mt-2 py-4 px-4 border-black font-jost text-body-mobile lg:text-body-desktop text-service_bg"
            />
          </label>
          <label ref={el => (formFieldsRef.current[5] = el)} className="">
            <p className="text-body-mobile lg:text-h4-desktop text-service_bg font-jost">
              Message <span className="text-choose_bg">(Required)</span>
            </p>
            <textarea
              type="text"
              className="w-full border h-[200px] resize-none mt-2 py-4 px-4 border-black font-jost text-body-mobile lg:text-body-desktop text-service_bg"
            />
          </label>
          <button 
            ref={formButtonRef}
            className="bg-black text-white w-fit px-6 py-2 rounded-[20px] flex m-auto"
          >
            Book a Call
          </button>
        </form>
      </div>
      
      {/* Link */}
      <div ref={contactSectionRef} className="w-full bg-choose_bg px-4 py-4 lg:px-8 lg:py-24">
        <div className="w-full lg:flex">
          <div className="lg:w-[40%]">
            <p 
              ref={headingRef}
              className="text-h1-mobile lg:text-[64px] text-white font-jost font-bold leading-[1] mt-6"
            >
              Feel Free To Contact Us!!
            </p>
            <p 
              ref={descriptionRef}
              className="text-body-mobile lg:text-body-desktop font-jost text-white mt-2 lg:mt-6 lg:w-[75%] text-left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
            <div 
              ref={socialIconsRef}
              className="grid grid-cols-4 justify-center items-center mt-4 lg:mt-8 w-fit gap-2 lg:gap-4"
            >
              {images.map((image, index) => (
                <div key={index} className="">
                  <img className="w-6" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div 
            ref={imageRef}
            className="lg:w-[60%] mt-4 lg:mt-0"
          >
            <img src={blog_link} alt="" />
          </div>
        </div>
        <div className="lg:flex justify-end">
          <div 
            ref={linksContainerRef}
            className="grid lg:grid-cols-3 gap-8 lg:gap-16 px-8 lg:px-0 lg:w-[80%] mt-10"
          >
            {links.map((link, index) => (
              <div 
                key={index} 
                ref={el => (linkCardsRef.current[index] = el)}
                className="px-4 pt-4 pb-8 border-2 text-center flex flex-col justify-center items-center border-white rounded-[15px] bg-white bg-opacity-[25%]"
              >
                <img className="w-16 bg-white p-4 rounded-full" src={link.image} alt="" />
                <p className="mt-4 text-white font-jost text-body-mobile lg:text-body-desktop">{link.title}</p>
                <p className="mt-4 text-service_bg font-jost text-subtext-mobile lg:text-subtext-desktop">{link.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Suspense>
              <Footer />
      </Suspense>
    </div>
  );
};

export default BookNow;
