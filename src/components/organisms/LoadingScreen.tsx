"use client";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000);
    }, 2000);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut
          ? "opacity-0 pointer-events-none bg-animated-gradient"
          : "opacity-100 bg-black"
      }`}
    >
      <p
        className="text-xl font-melete font-bold"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FF0004, #FF0090, #9900FF, #4000FF)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "textGradient 3s infinite linear",
        }}
      >
        NEO TOKYO PROJECT ...
      </p>
    </div>
  );
};

export default LoadingScreen;
