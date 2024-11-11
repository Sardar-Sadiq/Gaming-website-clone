import React, { useEffect, useState } from "react";
import luffygif from "../src/assets/luffygear5.gif"; // Update with the correct path
import "./preloader.css";

const Preloader = ({ onFinish }) => {
  const [fadeOutUp, setFadeOutUp] = useState(false);

  useEffect(() => {
    // Set timeout to trigger fade-out-up after 3 seconds
    const timer = setTimeout(() => {
      setFadeOutUp(true);
      // Call onFinish after fade-out-up animation ends (1 second)
      setTimeout(onFinish, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src={luffygif}
        alt="luffygif"
        className={`w-[200px] h-[200px] ${fadeOutUp ? "animate-fade-out-up" : "animate-up-down"}`}
      />
    </div>
  );
};

export default Preloader;
