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
      // Faster and more responsive movement on mobile
      const mobileTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2, // Increased scrub speed
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      mobileTimeline
        .to(sceneRef.current, {
          ease: "none",
          x: "0",
          y: "60vh", // Increased movement
          scale: 1,
        })
        .to(sceneRef.current, {
          ease: "none",
          x: "0",
          y: "140vh", // Increased movement
          scale: 1,
        })
        .to(sceneRef.current, {
          ease: "none",
          x: "0",
          y: "220vh", // Increased movement
          scale: 1,
        });

      return () => {
        if (mobileTimeline) mobileTimeline.kill();
      };
    } else {
      // Desktop GSAP animation remains unchanged
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

      desktopTimeline
        .to(sceneRef.current, {
          ease: "none",
          x: "-50vw",
          y: "100vh",
        })
        .to(sceneRef.current, {
          ease: "none",
          x: "-10vw",
          y: "200vh",
        })
        .to(sceneRef.current, {
          ease: "none",
          x: "-50vw",
          y: "300vh",
        });

      return () => {
        if (desktopTimeline) desktopTimeline.kill();
      };
    }
  }, [isMobile]);

  // Generate appropriate class for the scene container
  const getSceneContainerClass = () => {
    return isMobile
      ? "absolute inset-x-0 bottom-0 h-[90vh] w-full"
      : "absolute right-0 h-[100vh] w-[50vw]";
  };

  return (
    <main ref={mainRef} className="overflow-x-hidden mb-0">
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
        <section className="relative h-[100vh]">
          {isMobile ? (
            <p className="text-white text-center absolute inset-0 pt-10 px-4 text-4xl font-semibold">
              <h2 className="inline">Department of</h2>
              <br />
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  Computer Science & Engineering
                </span>{" "}
              </h1>{" "}
            </p>
          ) : (
            <p className="text-white text-center absolute right-1/2 left-0 top-1/2 -translate-y-1/2 w-[50%] px-4 text-4xl font-semibold">
              <h2 className="inline">Department of</h2>
              <br />
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  Computer Science & Engineering
                </span>{" "}
              </h1>{" "}
            </p>
          )}

          <div ref={sceneRef} className={getSceneContainerClass()}>
            <Canvas camera={isMobile ? { position: [0, 0, 4.5] } : undefined}>
              <Scene progress={progress} />
            </Canvas>
          </div>
        </section>

        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            <div className="flex justify-center items-center">
              <img src={OUWhiteLogo} alt="Osmania University Logo" className={isMobile ? "w-4/5" : "w-auto"} />
            </div>
          </p>
        </section>

        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="text-white order-1 w-[50%] text-center px-4 text-4xl font-semibold">
            <main className="text-3xl font-bold">Presents</main>
          </p>
          <p className="w-[50%] order-2"></p>
        </section>

        <section className="relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>
          <p className="text-white w-[50%] text-center px-4">
            {isMobile ? (
              <div className="flex flex-col items-center justify-center min-h-[100vh]">
                <h1 className="text-7xl font-sans text-center font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  INFINITY
                  <br />
                  2K25
                </h1>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center after:text-6xl font-sans font-extrabold lg:text-9xl mt-3">
                INFINITY
                <br />
                2K25
              </div>
            )}
          </p>
        </section>
      </Suspense>
    </main>
  );
}

export default App;
