import { useState, useEffect, useRef } from "react";
import "./style.css";

const AnimatedText = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$*)!";
  const [text, setText] = useState("SARDAR SADIQ");
  
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
        iteration += 1 / 7;

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
          fontSize: "clamp(2rem, 5vw, 5rem)",
        }}
      >
        {displayText}
      </h1>
    </div>
  );
};

export default AnimatedText;
