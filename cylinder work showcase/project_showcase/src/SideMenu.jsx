// import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { Link } from "react-router-dom"; // Import Link from React Router DOM

// const SideMenu = () => {
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const menuAnim = gsap.timeline({ paused: true });
    
//     // GSAP animation for sliding menu and fading links in/out
//     menuAnim
//       .to(".side-menu", {
//         x: 0, // Slide the menu in from right (open)
//         duration: 0.5,
//         ease: "power3.inOut",
//       })
//       .fromTo(
//         ".menu-item", 
//         { opacity: 0, x: 30 }, // Fade in the items
//         { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
//       );

//     if (isActive) {
//       menuAnim.play(); // Open the menu and animate the text
//     } else {
//       gsap.to(".side-menu", {
//         x: "100%", // Slide the menu out to the right (close)
//         duration: 0.5,
//         ease: "power3.inOut",
//       });
//     }
//   }, [isActive]);

//   return (
//     <div className="relative">
//       {/* Burger Button */}
//       <div
//         className="fixed top-5 right-5 z-50 p-2 m-auto cursor-pointer"
//         onClick={() => setIsActive(!isActive)}
//       >
//         <div className={`w-8 h-1 bg-white my-1 transition-all duration-300 ${isActive ? 'rotate-45 translate-y-2' : ''}`}></div>
//         <div className={`w-8 h-1 bg-white my-1 transition-all duration-300 ${isActive ? 'opacity-0' : ''}`}></div>
//         <div className={`w-8 h-1 bg-white my-1 transition-all duration-300 ${isActive ? '-rotate-45 -translate-y-2' : ''}`}></div>
//       </div>

//       {/* Side Menu */}
//       <div className="side-menu fixed top-0 right-0 w-full h-screen bg-gray-950 bg-opacity-85 z-40 text-white transform translate-x-full">
//         <div className="p-5">
//           <ul className="space-y-0 mt-20  text-right">
            
//             <li className="menu-item text-[5rem] hover:text-purple-700 transition-all">
//               <Link to="/about">About</Link> {/* Link to AboutMe */}
//             </li>
//             <li className="menu-item text-[5rem] hover:text-purple-700 transition-all">Projects</li>
//             <li className="menu-item text-[5rem] hover:text-purple-700 transition-all">Contact</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideMenu;



