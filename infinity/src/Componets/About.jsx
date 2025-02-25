import { useState, useRef, useEffect, Suspense } from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../Componets/infiui";

const AboutInfinity = () => {
  const [progress, setProgress] = useState(0);
  const sceneRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-10 px-4 md:px-0">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-gray-300">ABOUT</span>{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
              INFINITY
            </span>
          </h2>
        </div>

        {/* 3D Scene */}
        <div className="w-full h-[350px] md:h-[500px] mb-6 md:mb-0">
          <div ref={sceneRef} className="relative w-full h-full rounded-lg overflow-hidden">
            <Suspense fallback={<div className="w-full h-full bg-gray-800" />}>
              <Canvas>
                <Scene />
              </Canvas>
            </Suspense>
          </div>
        </div>

        {/* Description & Event Details */}
        <div className="text-white text-center md:text-left max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-4">
            The National level technical symposium organized by University College of Engineering 
            is here to awestruck all of you with its combined aura of technical and cultural 
            infused into her heart. That's gonna leave you with an exhilarating experience.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So, eager to tear the pages of the calendar that pause at 21st and 22nd of March? 
            Come on, let's swim in the grandeur tour of this wonderful fest.
          </p>

          {/* Event Details Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="block text-sm text-gray-300">Date</span>
              <span className="block text-xl font-semibold">March 21-22, 2025</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="block text-sm text-gray-300">Venue</span>
              <span className="block text-xl font-semibold">UCE Campus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfinity;
