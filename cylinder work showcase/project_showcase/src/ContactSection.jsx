import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./font.css";

const ContactSection = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animation for the SVG
    gsap.fromTo(
      ".animated-svg",
      {
        opacity: 0,
        rotate: -90,
        scale: 0,
      },

      {
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".animated-svg", // Trigger the animation when the SVG enters the viewport
          start: "top 80%", // Animation starts when SVG is 80% from the top of the viewport
          end: "top 30%", // Animation ends when SVG is 30% from the top
          scrub: true, // Scrub makes the animation follow the scroll
        },
      }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#000000] text-[#e7caca] relative">
        <div className="w-[87%] relative">
          {/* SVG Positioned at the top-left with scroll animation */}
          {/* top-left */}
          <div className="opacity-0 md:opacity-100">
            <div className="absolute top-[150px] left-[80px] animated-svg opacity:0 svg-animation-1">
              <svg
                className="hover:rotate-180 duration-1000 "
                width="150"
                height="150"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_105_323)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M106.973 87.6003C103.915 93.0385 96.0852 93.0385 93.027 87.6003L50.4686 11.9213C47.4696 6.58851 51.3234 7.97602e-06 57.4416 5.67316e-06L142.558 0C148.677 -5.34872e-07 152.53 6.58849 149.531 11.9213L106.973 87.6003ZM87.6003 106.973C93.0385 103.915 93.0385 96.0851 87.6003 93.0269L11.9213 50.4685C6.58848 47.4696 -1.12708e-05 51.3233 -1.15382e-05 57.4415L-1.52588e-05 142.558C-1.55262e-05 148.677 6.58849 152.53 11.9213 149.531L87.6003 106.973ZM106.973 112.4C103.915 106.961 96.0852 106.962 93.027 112.4L50.4686 188.079C47.4697 193.412 51.3234 200 57.4416 200H142.558C148.677 200 152.53 193.411 149.531 188.079L106.973 112.4ZM112.4 93.027C106.961 96.0853 106.961 103.915 112.4 106.973L188.079 149.531C193.412 152.53 200 148.677 200 142.558V57.4417C200 51.3235 193.411 47.4697 188.079 50.4687L112.4 93.027Z"
                    fill="url(#paint0_linear_105_323)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_105_323"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#DF99F7" />{" "}
                    <stop offset="1" stop-color="#FFDBB0" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_105_323">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>
          {/* bottom-right */}
          <div className="opacity-0 md:opacity-100">
            <div className="absolute bottom-[195px] right-[125px] animated-svg  svg-animation z-10 ">
              <svg
                className="hover:rotate-180 duration-1000 "
                width="130"
                height="130"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_104_26)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z"
                    fill="url(#paint0_linear_104_26)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_104_26"
                    x1="20.5"
                    y1="16"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#ACAAFF" />{" "}
                    <stop offset="1" stop-color="#C0E8FF" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_104_26">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
          </div>

          {/* Email Header */}
          <div className="flex flex-col justify-center items-center border-[1px] mt-5 md:mt-20 border-[#f1f1da1A] h-[650px] rounded-[3rem]">
            <div className="text-center space-y-[-10px]">
              <p className="text-[35px] text-[#F1DADA] md:text-[60px] contact-p">
                Looking for a new talent?
              </p>
              <h1
                className="text-[38px] md:text-[130px] font-sans contact-a"
                style={{ letterSpacing: -1, fontWeight: 450 }}
              >
                <a href="mailto:sardarsadiq001@gmail.com">
                  hello@sardarsadiq.fr
                </a>
              </h1>
            </div>

            {/* Links Section */}
            <div className="flex space-x-10 text-lg" >
              <button className="flex items-center space-x-2 text-[#e7caca] hover:text-white transition-colors">
                <span className="text-pink-400">●</span>
                <span>LinkedIn</span>
              </button>
              <button className="flex items-center space-x-2 text-[#e7caca] hover:text-white transition-colors">
                <span className="text-pink-400">●</span>
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <footer className="h-auto mt-5 text-[#f1dada] p-4 flex justify-between items-center">
            {/* Left Section: Copyright */}
            <div className="text-[12px] contact-t font-bold opacity-60">
              ©2024 Sardar Sadiq.
            </div>

            {/* Center Section: Status */}
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full contact-a"></span>
              <span className="font-semibold text-[16px] contact-t">
                Available for a full-time position
              </span>
            </div>

            {/* Right Section: Credit */}
            <div className="text-[12px] font-bold contact-t opacity-60">
              Made by Sardar Sadiq.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
