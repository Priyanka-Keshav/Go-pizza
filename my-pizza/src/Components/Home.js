import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add("animate-fade-in");
          } else {
            section.classList.remove("animate-fade-in");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/wX8foM1z7S0?autoplay=1&mute=1&loop=1&playlist=wX8foM1z7S0"
          title="Making a pizza - reels"
          frameBorder="0"
          allow="autoplay; encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Content Overlay */}
        <div className="relative z-10 text-white text-center flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
          <Link to="/menu">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-bold py-4 px-8 text-xl rounded hover:bg-red-700">
              Explore our menu
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
