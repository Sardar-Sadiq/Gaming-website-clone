import { useState, useEffect, useRef } from "react";
import "./style.css";

const AnimatedText1 = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVYZ#$*)!";
  const [text, setText] = useState("Frontend Developer🍃");
  
  const [displayText, setDisplayText] = useState(text);
  const textRef = useRef(null); // Ref to access the text element

  useEffect(() => {
    let interval = null;
    let iteration = 0;

    const changeTextLetter = () => {
      iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) =>
              index < iteration
                ? text[index]
                : letters[Math.floor(Math.random() * letters.length)]
            )
            .join("")
        );
        iteration += 1 / 4;

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 50);
    };

    // Trigger the text animation on page refresh (component mount)
    changeTextLetter();

    const handleMouseOver = () => {
      changeTextLetter();
    };

    const element = textRef.current;
    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      clearInterval(interval);
      if (element) {
        element.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, [text]);

  return (
    <div className="wrapper">
      <h1
        ref={textRef} // Attach the ref to the text element
        className="text-black text-[100px] mt-0"
        style={{
          fontFamily: '"Space Mono", monospace',
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "clamp(1.5rem, 3vw, 3rem)",
        }}
      >
        {displayText}
      </h1>
    </div>
  );
};

export default AnimatedText1;
