// Work.jsx
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./work.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "The Last Whistle",
    description: "An emotional retrospective on the career of legendary football coach Pat Sullivan...",
    image: "https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    id: 1,
    title: "The Last Whistle",
    description: "An emotional retrospective on the career of legendary football coach Pat Sullivan...",
    image: "https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    id: 1,
    title: "The Last Whistle",
    description: "An emotional retrospective on the career of legendary football coach Pat Sullivan...",
    image: "https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    id: 1,
    title: "The Last Whistle",
    description: "An emotional retrospective on the career of legendary football coach Pat Sullivan...",
    image: "https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    id: 1,
    title: "The Last Whistle",
    description: "An emotional retrospective on the career of legendary football coach Pat Sullivan...",
    image: "https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    id: 1,
    title: "The Last Whistle",
    description: "An emotional retrospective on the career of legendary football coach Pat Sullivan...",
    image: "https://images.unsplash.com/photo-1720293080711-b89d093111dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  

  // Add more project objects here as needed...
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const mainImageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [mainImageRef.current, titleRef.current, descriptionRef.current],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, [selectedProject]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex bg-[#0e090d] text-white h-screen">
      {/* Main Display Area - Fixed */}
      <div className="flex-1 pt-[100px] h-screen sticky top-0 overflow-hidden px-8">
        <h1 ref={titleRef} className="text-4xl font-bold mb-4">
          {selectedProject.title}
        </h1>
        <p ref={descriptionRef} className="text-lg mb-6">
          {selectedProject.description}
        </p>
        <div ref={mainImageRef} className="overflow-hidden rounded-lg">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-[80vw] h-[70vh] object-cover object-center rounded-lg"
          />
        </div>
        <div className="mt-4">
          <p>{selectedProject.credits}</p>
        </div>
      </div>

      {/* Right Sidebar - Scrollable */}
      <div className="w-24 h-screen overflow-y-scroll flex flex-col items-center pt-[70px] space-y-5 scrollbar-hidden">
  {projects.map((project, index) => (
    <div
      key={index}
      onClick={() => handleProjectSelect(project)}
      className={`cursor-pointer overflow-hidden transition-all duration-300 ${
        selectedProject.id === project.id ? "ring-2 ring-black" : "opacity-70 hover:opacity-100"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-20 h-32 object-cover"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Work;
