import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/choose1.png";
import img2 from "../assets/choose2.png";
import img3 from "../assets/choose3.png";
import star from "../assets/stars.png";

gsap.registerPlugin(ScrollTrigger);

const chooseData = [
  {
    image: img1,
    title: "Best Equipment",
    content: "Super gear fuels quality audio offering, ensuring crisp sound.",
  },
  {
    image: img2,
    title: "Sound Quality",
    content: "Clear vivid sonics project sound offering, giving crisp audio.",
  },
  {
    image: img3,
    title: "Multiple Studio",
    content: "Various studio hubs yield service uniting, pros across venues.",
  },
];

const WhyChooseUs = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const ratingRef = useRef(null);
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

      gsap.from(cardRefs.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: "top 90%",
        },
      });

      gsap.from(ratingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ratingRef.current,
          start: "top 95%",
        },
      });
    }
  }, [isClient]);

  return (
    <div className="w-full px-4 lg:px-8 py-4 lg:py-8 bg-choose_bg flex flex-col justify-center items-center text-center">
      <p
        ref={titleRef}
        className="font-jost text-body-mobile lg:text-body-desktop border-b text-white pb-2"
      >
        Why Choose Us
      </p>
      <h1
        ref={headingRef}
        className="font-jost font-semibold text-h1-mobile lg:text-[64px] text-service_bg mt-4"
      >
        More Than 20+ Years Experience
      </h1>
      <p
        ref={textRef}
        className="font-jost text-white text-body-mobile lg:text-body-desktop text-center lg:w-[60%] mt-4"
      >
        VoiceBox Productions delivers crisp audio sound uniting 20 years of
        expertise with modern techniques to perfect every record.
      </p>
      <div className="mt-8 w-full grid lg:grid-cols-3 gap-4 lg:gap-20 px-4 lg:px-8">
        {chooseData.map((data, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex flex-col justify-center items-center rounded-[15px] border-2 py-2 px-4 gap-4 bg-choose_div_bg bg-opacity-[15%]"
          >
            <img
              className="w-12 bg-black p-2 rounded-full"
              src={data.image}
              alt=""
            />
            <p className="text-body-desktop text-white font-jost font-bold">
              {data.title}
            </p>
            <p className="text-subtext-desktop font-jost text-white">
              {data.content}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full text-white font-jost text-subtext-mobile lg:text-body-desktop py-10">
        <p>
          Welcome to VoiceBox Productions <br />
          Bangalore’s hub for crisp audio quality & new sound design. <br />
          Our pro team guides your audio journey each step from start to finish,
          ensuring superb results with every project. <br />
          We deliver the ideal mix of studios and engineers to suit your needs
          and budget.
        </p>
      </div>
      <div
        ref={ratingRef}
        className="font-jost text-white text-body-mobile lg:text-body-desktop flex gap-2 items-center justify-center"
      >
        <p className="font-bold">4.9</p>
        <img className="w-24 lg:w-30 h-4 lg:h-5" src={star} alt="" />
        <p className="font-semibold">Google</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
