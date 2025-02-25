import { useState, useRef, useEffect, Suspense } from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../Componets/Scene";
import OUWhiteLogo from "../assets/OUWhiteLogo.png";
import { SpotLight } from "./ui/SpotLight";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Enhanced mobile animation with faster movement
      const mobileTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Faster scrub for more responsive movement
          onUpdate: (self) => {
            setProgress(self.progress);
            
            // Enhanced position calculation for faster movement
            let yPos = 0;
            if (self.progress < 0.33) {
              // First section - faster movement
              yPos = self.progress * 3 * 60; // 0 to 60vh
            } else if (self.progress < 0.66) {
              // Second section - faster movement
              yPos = 60 + (self.progress - 0.33) * 3 * 60; // 60vh to 120vh
            } else {
              // Third section - faster movement
              yPos = 120 + (self.progress - 0.66) * 3 * 60; // 120vh to 180vh
            }
            
            // Apply the position with a more dramatic scale change
            if (sceneRef.current) {
              sceneRef.current.style.transform = `translate(0, ${yPos}vh) scale(0.8)`;
            }
          },
          invalidateOnRefresh: true, // Recalculate on page refresh
        },
      });

      return () => {
        if (mobileTimeline) mobileTimeline.kill();
      };
    } else {
      // Desktop GSAP animation with increased 3D element size
      const desktopTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      // Increased scale for desktop view (1.2 instead of default 1.0)
      sceneRef.current.style.transform = "scale(1.2)";
      
      desktopTimeline
        .to(sceneRef.current, {
          ease: "none",
          x: "-50vw",
          y: "100vh",
          scale: 1.2, // Maintain the larger scale during animation
        })
        .to(sceneRef.current, {
          ease: "none",
          x: "-10vw",
          y: "200vh",
          scale: 1.2, // Maintain the larger scale during animation
        })
        .to(sceneRef.current, {
          ease: "none",
          x: "-50vw",
          y: "300vh",
          scale: 1.2, // Maintain the larger scale during animation
        });

      return () => {
        if (desktopTimeline) desktopTimeline.kill();
      };
    }
  }, [isMobile]);

  // Generate appropriate class for the scene container
  const getSceneContainerClass = () => {
    return isMobile
      ? "absolute inset-x-0 bottom-0 h-[75vh] w-full"
      : "absolute right-0 h-[100vh] w-[50vw]";
  };

  return (
    <main ref={mainRef} className="overflow-hidden w-full">
      <SpotLight
        className={isMobile ? "-top-10 left-0" : "-top-20 left-0 md:left-60 md:-top-20"}
        fill="white"
      />
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-black text-white">
            Loading...
          </div>
        }
      >
        {/* First section - Department title */}
        <section className="relative h-screen w-full">
          {isMobile ? (
            <div className="text-white text-center absolute inset-0 pt-16 px-4 z-10">
              <h2 className="text-3xl font-semibold mb-1">Department of</h2>
              <h1 className="text-3xl font-semibold">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  Computer Science & Engineering
                </span>
              </h1>
            </div>
          ) : (
            <div className="text-white text-center absolute right-1/2 left-0 top-1/2 -translate-y-1/2 w-[50%] px-4">
              <h2 className="text-4xl font-semibold">Department of</h2>
              <h1 className="text-4xl font-semibold">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  Computer Science & Engineering
                </span>
              </h1>
            </div>
          )}

          <div ref={sceneRef} className={getSceneContainerClass()}>
            <Canvas camera={isMobile ? { position: [0, 0, 4.8] } : undefined}>
              <Scene progress={progress} />
            </Canvas>
          </div>
        </section>

        {/* Second section - OU Logo */}
        <section className={`relative ${isMobile ? "h-[50vh]" : "h-screen"} w-full flex items-center`}>
          {isMobile ? (
            <div className="text-white w-full text-center px-4">
              <div className="flex justify-center items-center">
                <img src={OUWhiteLogo} alt="Osmania University Logo" className="w-3/4" />
              </div>
            </div>
          ) : (
            <>
              <div className="w-[50%]"></div>
              <div className="text-white w-[50%] text-center px-4">
                <div className="flex justify-center items-center">
                  <img src={OUWhiteLogo} alt="Osmania University Logo" className="w-auto" />
                </div>
              </div>
            </>
          )}
        </section>

        {/* Third section - Presents */}
        <section className={`relative ${isMobile ? "h-[50vh]" : "h-screen"} w-full flex items-center`}>
          {isMobile ? (
            <div className="text-white w-full text-center px-4">
              <h2 className="text-4xl font-bold">Presents</h2>
            </div>
          ) : (
            <>
              <div className="text-white w-[50%] text-center px-4">
                <h2 className="text-3xl font-bold">Presents</h2>
              </div>
              <div className="w-[50%]"></div>
            </>
          )}
        </section>

        {/* Fourth section - INFINITY 2K25 */}
        <section className={`relative ${isMobile ? "h-[75vh]" : "h-screen"} w-full flex items-center`}>
          {isMobile ? (
            <div className="text-white w-full text-center px-4">
              {/* Fixed INFINITY 2K25 text spacing for mobile with increased spacing */}
              <div className="flex flex-col items-center justify-center space-y-8">
                <h1 className="text-5xl font-sans font-extrabold tracking-wider">
                  INFINITY
                </h1>
                <h1 className="text-5xl font-sans font-extrabold tracking-wider">
                  2K25
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div className="w-[50%]"></div>
              <div className="text-white w-[50%] text-center px-4">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-6xl lg:text-9xl font-sans font-extrabold">
                    INFINITY
                    <br />
                    2K25
                  </h1>
                </div>
              </div>
            </>
          )}
        </section>
      </Suspense>
    </main>
  );
}

export default App;