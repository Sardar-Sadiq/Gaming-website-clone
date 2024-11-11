import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { gsap } from "gsap";

import "./font.css"
const menuLinks = [
  { label: "Home" , path: "/" },
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });
    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "Power4.inOut",
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);


  

  return (
    <div className="menu-container relative " ref={container}>
      <div className="menu-bar fixed top-0 left-0 w-screen py-3 px-[30px] md:px-[100px] flex justify-between items-center rounded-[1rem]  z-20">
        <div className="menu-logo">
          <Link to="/" className="text-[#ffffffff] text-[30px]  ">
            <button className="relative overflow-hidden  py-1 px-auto text-lg font-medium  transition duration-300 group z-40">
              <span className="block transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full text-[30px] contact-m">
                SARDAR
              </span>
              <span className="absolute top-0 left-0 w-full h-full flex text-[30px] items-center justify-center contact-m transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                SARDAR
              </span>
            </button>
          </Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
        
          <button className="relative overflow-hidden  py-1 px-auto text-lg font-medium  transition duration-300 group text-[#ffffffff] uppercase  text-[30px] contact-m z-40">
              <span className="block transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full text-[30px] contact-m">
                MENU
              </span>
              <span className="absolute top-0 left-0 w-full h-full flex text-[30px] items-center justify-center contact-m transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                MENU
              </span>
            </button>
          
        </div>
      </div>

      <div className="menu-overlay fixed top-0 left-0 w-screen h-screen py-3 px-[30px] md:px-[100px] bg-[#C63C51] z-20 flex flex-col justify-between clip-path-polygon-0-0-100-0-100-0-0-0 ">
        <div className="menu-overlay-bar w-full flex justify-between items-center ">
          <div className="menu-logo">
            <Link to="/" className="text-[30px] contact-m  ">
            <button className="relative overflow-hidden  py-1 px-auto text-lg font-medium  transition duration-300 group z-40">
              <span className="block transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full text-[30px] contact-m">
                SARDAR
              </span>
              <span className="absolute top-0 left-0 w-full h-full flex text-[30px] items-center justify-center contact-m transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                SARDAR
              </span>
            </button>
            </Link>
          </div>
          <div className="menu-close cursor-pointer" onClick={toggleMenu}>
          <button className="relative overflow-hidden  py-1 px-auto text-lg font-medium  transition duration-300 group text-black hover:text-[#ffffffff] uppercase  text-[30px] contact-m z-40">
              <span className="block transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full text-[30px] contact-m">
                MENU
              </span>
              <span className="absolute top-0 left-0 w-full h-full flex text-[30px] items-center justify-center contact-m transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                MENU
              </span>
            </button>
          </div>
        </div>
        
        <div className="menu-links flex-grow flex flex-col justify-center items-end text-right px-0 transition-all">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item mb-5" key={index}>
              <div className="menu-link-item-holder">
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className="text-black text-8xl font-light hover:text-white"
                >
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-info flex justify-between items-end transition-all text-lg">
          <div className="menu-info-col">
            <a href="#" className="block text-black mb-3 hover:text-white">
              X &#8599;
            </a>
            <a href="#" className="block text-black mb-3 hover:text-white">
              Instagram &#8599;
            </a>
            <a href="#" className="block text-black mb-3 hover:text-white">
              LinkedIn &#8599;
            </a>
            <a href="#" className="block text-black mb-3 hover:text-white">
              Dribble &#8599;
            </a>
          </div>
          <div className="menu-info-col text-right transition-all">
            <p className="text-black hover:text-white">
              sardarsadi001@gmai.com
            </p>
            <p className="text-black hover:text-white">8341583323</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
