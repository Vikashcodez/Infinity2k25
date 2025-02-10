import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Events.css";
import slides from "../data/slides.json";

//icon images
import icon2 from '../data/arrowForward.png';
import icon1 from '../data/arrowBack.png';

// Import 4 images
import I1 from "../data/1.jpeg";
import I2 from "../data/2.jpeg";
import I3 from "../data/3.jpeg";
import I4 from "../data/4.png";



const Events = () => {
  const images = [I1, I2, I3, I4]; // 4 images in total
  const data = slides.slides; // Assuming this is an array of text for each image
  console.log(data);

  const [startIndex, setStartIndex] = useState(0); // Tracks the first image in the visible set
  const descriptionRef = useRef(null); // Reference for scrolling

  // Define positions for visible images
  const positions = ["left", "center", "right", "back"]; // Only 4 positions

  const imageVariants = {
    center: { x: "0%", scale: 0.7, zIndex: 2 },
    left: { x: "-70%", scale: 0.5, zIndex: 1 },
    right: { x: "70%", scale: 0.5, zIndex: 1 },
    back:{ x:"0%" , scale: 0.7, zIndex:0 }
  };

  // Move forward in a circular way
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move backward in a circular way
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="flex items-center flex-col justify-center h-screen relative overflow-hidden">
        {/* Display 3 images at a time, cycling through 4 total images */}
        {positions.map((position, i) => {
          const imageIndex = (startIndex + i) % images.length; // Ensure circular rotation
          return (
            <motion.img
              key={imageIndex}
              src={images[imageIndex]}
              animate={position}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              initial="center"
              style={{ height: "100%", width: "40%", position: "absolute", cursor: "pointer" }}
              className="rounded-[12px]"
              onClick={() => {
                if (i === 1 && descriptionRef.current) {
                  descriptionRef.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          );
        })}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-10 text-white bg-gray-800 px-4 py-2 rounded-md"
        >
        <img src={icon1} alt="prev" width="30rem" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-10 text-white bg-gray-800 px-4 py-2 rounded-md"
        >
        <img src={icon2} alt="next" width="30rem" />
        </button>
      </div>

      {/* Description Section */}
      <div className="container-2" id="description" ref={descriptionRef}>
        <h1 id="heading">{data[(startIndex + 1) % data.length].title}</h1>
        <p className="paragraph" style={{ whiteSpace: "pre-wrap" }}>
          {data[(startIndex + 1) % data.length].details}
        </p>
        <a href="/form?event=codecraft"><button>register</button></a>
      </div>
    </div>
  );
};

export default Events;