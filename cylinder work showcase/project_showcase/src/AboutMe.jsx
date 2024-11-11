import { useEffect } from "react";
import { gsap } from "gsap";
import AnimatedText from "./Animatedtext";
import AnimatedText1 from "./Animatedtext1";
import "./about.css";
const AboutMe = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".about-me-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".about-me-content",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      )
      .fromTo(
        ".about-me-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 1 }
      )
      
  }, []);

  return (
    <section className="m-10 about-me h-screen  bg-gray-200 pb-16 relative overflow-hidden">
      {/* <Alternate_line className="mb-5" /> */}

      <div className=" m-5 mt-[100px]  md:mt-[200px] w-auto px-4 gap-5 md:gap-36  md:px-16">
        <div className="flex flex-col md:flex-row  items-center justify-center">
          {/* Left Side */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="about-me-image  flex justify-center mb-8">
              <img
                src="src/assets/profile.jpg" // Make sure this path is correct
                alt="Profile"
                className="rounded-full shadow-lg mt-5  transition-transform duration-500 ease-in-out transform hover:scale-105 md:w-[400px] md:h-[400px]"
              />
            </div>
            <AnimatedText />
            <AnimatedText1 />
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-12">
            <div className="text-center md:text-left mb-12">
              <h2 className="about-me-title text-3xl sm:text-4xl font-bold text-gray-800">
                About Me
              </h2>
            </div>
            <p className="about-me-content text-gray-600 text-[14px] md:text-3xl ">
              I am a passionate developer with experience in creating modern web
              applications. I specialize in front-end development, focusing on
              creating responsive and interactive user experiences. My goal is
              to build intuitive and aesthetically pleasing web interfaces that
              enhance user engagement and accessibility.I spent countless hours
              learning graphic and motion design, as well as web development,
              through online resources and personal projects. All of this
              naturally led me to continue my studies in this field and then
              quickly apply my skills in a professional setting.
            </p>
            {/* <div className="about-me-skills mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Skills & Expertise
              </h3>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>React, Tailwind CSS, GSAP</li>
                <li>HTML, CSS, JavaScript</li>
                <li>UI/UX Design</li>
                <li>Responsive Web Design</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
