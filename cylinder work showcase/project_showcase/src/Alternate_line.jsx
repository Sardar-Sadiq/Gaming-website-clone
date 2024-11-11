import React, { useEffect } from 'react';

const Alternate_line = () => {
  useEffect(() => {
    const rootStyles = document.querySelector(":root");

    function handleWindowResize() {
      const scrollSectionWidth = document.querySelector(".scroll-section").clientWidth;
      rootStyles.style.setProperty("--scroll-section-width", `${scrollSectionWidth}px`);
    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="alternate-line relative bg-yellow-300 text-black w-full overflow-hidden">
      {/* Left Shadow */}
      <div className="absolute top-0 left-0  h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

      {/* Scroll Content */}
      <div className="scroll-wrapper flex items-center overflow-hidden">
        {/* Duplicate the content for seamless scrolling */}
        <div className="scroll-content flex items-center whitespace-nowrap animate-scroll">
          {/* Scroll Sections */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="scroll-section flex-shrink-0 flex items-center justify-center text-center whitespace-nowrap">
              <h1 className="text-[clamp(0.75rem,2vw+2.5rem,8rem)] pointer-events-none text-shadow-lg">Frontend Developer</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Right Shadow */}
      <div className="absolute top-0 right-0  h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default Alternate_line;
