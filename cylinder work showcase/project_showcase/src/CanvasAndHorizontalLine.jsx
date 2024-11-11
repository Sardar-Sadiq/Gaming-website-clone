// CanvasAndHorizontalLine.jsx
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Cyl from "./Cyl";
import Horizontal_line from "./Horizontal_line";
import ContactSection from "./ContactSection";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import "./CanvasAndHorizontalLine.css"; // Import CSS for optimizations


const CanvasAndHorizontalLine = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation to smoothly bring in the Canvas and ContactSection
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 50, // Start with some vertical offset
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        force3D: true, // Force GPU acceleration for smoother animations
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="canvas-container h-[65%]  md:h-[100%]">
      
      <Canvas className="bg-[#000000] py-[50px] md:py-0" flat camera={{ fov: 30 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <Cyl />
          <EffectComposer>
            <Bloom
              minimapblur
              intensity={0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Horizontal_line />
      <ContactSection />
    </div>
  );
};

export default CanvasAndHorizontalLine;
