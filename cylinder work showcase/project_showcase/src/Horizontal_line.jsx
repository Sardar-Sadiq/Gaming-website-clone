import React, { useEffect } from "react";
import "./font.css";

const Horizontal_line = () => {
  useEffect(() => {
    const rootStyles = document.querySelector(":root");

    function handleWindowResize() {
      const scrollSectionWidth =
        document.querySelector(".scroll-section").clientWidth;
      rootStyles.style.setProperty(
        "--scroll-section-width",
        `${scrollSectionWidth}px`
      );
    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="horizontal-scroll relative pt-[100px]  bg-[#000000] text-white w-full overflow-hidden">
      {/* Left Shadow */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[1000px] h-full bg-gradient-to-r from-[#000000] to-transparent pointer-events-none z-10"></div>

      {/* Scroll Content */}
      <div className="scroll-wrapper flex items-center">
        <div className="scroll-content flex items-center whitespace-nowrap animate-scroll">
          {/* Scroll Sections */}
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="scroll-section flex-shrink-0 flex items-center justify-center text-center whitespace-nowrap mx-10"
            >
              <h1 className="text-[80px] md:text-[120px] pointer-events-none contact-p">
                Frontend Developer
              </h1>
              <div className="relative left-9">
              <svg
                width="50"
                height="50"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                {" "}
                <g clip-path="url(#clip0_119_282)">
                  {" "}
                  <path
                    d="M123.344 200C100 200 100 143.969 76.6558 143.969C49.7872 143.969 0 150.205 0 123.338C0 99.9951 56.0242 99.995 56.0242 76.652C56.0242 49.7946 49.7872 0 76.6558 0C100 0 100 56.0313 123.344 56.0313C150.213 56.0313 200 49.7946 200 76.652C200 99.995 143.966 99.9951 143.966 123.338C143.966 150.205 150.213 200 123.344 200Z"
                    fill="url(#paint0_linear_119_282)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_119_282"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#C63C51" />{" "}
                    <stop offset="1" stop-color="#F8FBBE" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_119_282">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
                </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Right Shadow */}
      <div className="absolute top-0 right-0 w-[200px] md:w-[1000px] h-full bg-gradient-to-l from-[#000000] to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default Horizontal_line;
