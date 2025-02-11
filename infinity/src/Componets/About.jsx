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
    <section ref={containerRef} className="relative py-0 mb-0">
      <div className="container mx-auto px-0 py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - 3D Scene */}
          <div className="w-full lg:w-1/3 h-[500px]"> {/* Fixed height for the 3D scene container */}
            <div ref={sceneRef} className="relative w-full h-full rounded-lg overflow-hidden">
              <Suspense fallback={<div className="w-full h-full bg-gray-800" />}>
                <Canvas>
                  <Scene />
                </Canvas>
              </Suspense>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-gray-300">ABOUT</span>{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                INFINITY
              </span>
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              The National level technical symposium organized by University College of Engineering 
              is here to awestruck all of you with its combined aura of technical and cultural 
              infused into her heart. That's gonna leave you with an exhilarating experience.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              So, Eager to tear the pages of the calendar that pause at 22nd and 23rd of March. 
              Come on, Let's swim in the grandeur tour of this wonderful fest.
            </p>

            {/* Event details cards */}
            <div className="flex flex-wrap gap-4">
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
      </div>
    </section>
  );
};

export default AboutInfinity;
